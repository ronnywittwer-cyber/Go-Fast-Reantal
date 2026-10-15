// API-Route für Buchungsanfragen.
// Nimmt das Formular (inkl. Ausweis-Upload) entgegen, prüft es serverseitig
// und verschickt die Anfrage per E-Mail über Resend (https://resend.com).
//
// Benötigte Umgebungsvariablen (siehe .env.example):
//   RESEND_API_KEY      – API-Key von Resend
//   BOOKING_TO_EMAIL    – Empfänger der Anfragen (Go Fast Rental)
//   BOOKING_FROM_EMAIL  – Absender, z.B. "Go Fast Rental <buchung@deine-domain.ch>"

import { NextResponse } from "next/server";
import { cars, company, formatChf, maxUploadBytes } from "@/lib/company";

export const runtime = "nodejs";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif", "application/pdf"];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

function error(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

// --- Spam-Schutz -----------------------------------------------------------
// 1) Honeypot: das Feld "website" ist für Menschen unsichtbar. Bots füllen es.
// 2) Zeit-Check: Menschen brauchen mehr als 3 Sekunden für das Formular.
// 3) Mengen-Begrenzung: max. 5 Anfragen pro 10 Minuten und IP-Adresse
//    (pro Server-Instanz; reicht gegen einfache Spam-Wellen).
// Bei 1) und 2) antworten wir mit "ok", senden aber nichts – so merkt der Bot
// nicht, dass er blockiert wurde.
const MIN_FILL_MS = 3_000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const recentRequests = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recentRequests.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS,
  );
  hits.push(now);
  recentRequests.set(ip, hits);
  // Speicher klein halten
  if (recentRequests.size > 1000) {
    for (const [key, times] of recentRequests) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) recentRequests.delete(key);
    }
  }
  return hits.length > RATE_LIMIT;
}

function looksLikeBot(formData: FormData): boolean {
  if (String(formData.get("website") ?? "").trim() !== "") return true;
  const startedAt = Number(formData.get("startedAt"));
  if (!Number.isFinite(startedAt) || startedAt <= 0) return true;
  return Date.now() - startedAt < MIN_FILL_MS;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_TO_EMAIL;
  const from = process.env.BOOKING_FROM_EMAIL ?? "Go Fast Rental <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Buchung: RESEND_API_KEY oder BOOKING_TO_EMAIL fehlt.");
    return error(
      "Der Versand ist momentan nicht verfügbar. Bitte kontaktieren Sie uns telefonisch.",
      500,
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return error(
      "Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es in ein paar Minuten erneut oder rufen Sie uns an.",
      429,
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return error("Ungültige Anfrage.");
  }

  if (looksLikeBot(formData)) {
    console.warn("Buchung: vermutlich Spam, verworfen.", { ip });
    return NextResponse.json({ ok: true });
  }

  const field = (name: string) => String(formData.get(name) ?? "").trim();
  const firstName = field("firstName");
  const lastName = field("lastName");
  const email = field("email");
  const phone = field("phone");
  const carId = field("car");
  const dateFrom = field("dateFrom");
  const dateTo = field("dateTo");
  const idFile = formData.get("idDocument");

  // Serverseitige Validierung (Client-Prüfung kann umgangen werden)
  const car = cars.find((c) => c.id === carId);
  const isDate = (v: string) => /^\d{4}-\d{2}-\d{2}$/.test(v);

  if (!firstName || !lastName) return error("Bitte Vor- und Nachnamen angeben.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return error("Bitte eine gültige E-Mail-Adresse eingeben.");
  if (!phone) return error("Bitte Telefonnummer angeben.");
  if (!car || !car.available) return error("Bitte ein verfügbares Fahrzeug auswählen.");
  if (!isDate(dateFrom) || !isDate(dateTo) || dateTo < dateFrom) return error("Bitte einen gültigen Mietzeitraum wählen.");
  if (!(idFile instanceof File) || idFile.size === 0) return error("Bitte Ausweis/Führerschein hochladen.");
  if (idFile.size > maxUploadBytes) return error("Die Datei ist zu gross (max. 4 MB).");
  if (idFile.type && !ALLOWED_TYPES.includes(idFile.type)) return error("Bitte ein Bild (JPG/PNG) oder PDF hochladen.");

  const days =
    Math.round((Date.parse(dateTo) - Date.parse(dateFrom)) / 86_400_000) + 1;

  const rows: [string, string][] = [
    ["Name", `${firstName} ${lastName}`],
    ["E-Mail", email],
    ["Telefon", phone],
    ["Fahrzeug", car.name],
    ["Zeitraum", `${formatDate(dateFrom)} – ${formatDate(dateTo)} (${days} ${days === 1 ? "Tag" : "Tage"})`],
    ["Preise", `${formatChf(car.prices.day)} / Tag · ${formatChf(car.prices.week)} / Woche · ${formatChf(car.prices.month)} / Monat`],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111">
      <h2 style="margin:0 0 16px">Neue Buchungsanfrage – ${escapeHtml(company.name)}</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:6px 16px 6px 0;font-weight:bold;vertical-align:top">${label}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="margin-top:16px;color:#555">Ausweis/Führerschein ist als Anhang beigefügt.<br>Auf diese E-Mail antworten, um direkt dem Kunden zu schreiben.</p>
    </div>`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const attachment = {
    filename: idFile.name || "ausweis",
    content: Buffer.from(await idFile.arrayBuffer()).toString("base64"),
  };

  const sendFailed = () =>
    error(
      "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
      502,
    );

  let res: Response;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        reply_to: email,
        subject: `Buchungsanfrage: ${car.name} (${formatDate(dateFrom)} – ${formatDate(dateTo)})`,
        html,
        text,
        attachments: [attachment],
      }),
    });
  } catch (err) {
    console.error("Buchung: Resend nicht erreichbar", err);
    return sendFailed();
  }

  if (!res.ok) {
    console.error("Buchung: Resend-Fehler", res.status, await res.text());
    return sendFailed();
  }

  return NextResponse.json({ ok: true });
}
