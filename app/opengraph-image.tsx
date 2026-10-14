import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { company } from "@/lib/company";

// Vorschaubild, wenn der Link geteilt wird (WhatsApp, Facebook, iMessage …).
// Wird beim Build einmal erzeugt.
export const alt = "Go Fast Rental – Autovermietung in Spiez";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function dataUrl(file: string, mime: string) {
  const buf = await readFile(join(process.cwd(), "public", file));
  return `data:${mime};base64,${buf.toString("base64")}`;
}

export default async function OpengraphImage() {
  const [car, logo] = await Promise.all([
    dataUrl("cars/lamborghini.jpg", "image/jpeg"),
    dataUrl("logo-go-fast.png", "image/png"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#0a1020",
        }}
      >
        {/* Fahrzeugbild rechts, nach links ins Navy auslaufend */}
        <img
          src={car}
          width={780}
          height={630}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 780,
            height: 630,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1200,
            height: 630,
            display: "flex",
            background:
              "linear-gradient(90deg, #0a1020 0%, #0a1020 36%, rgba(10,16,32,0.85) 52%, rgba(10,16,32,0) 78%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 70px",
            width: 780,
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#ffffff",
              borderRadius: 18,
              padding: "12px 18px",
              alignSelf: "flex-start",
            }}
          >
            <img src={logo} width={246} height={80} />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 40,
              fontSize: 60,
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            <span>Kein Limit.</span>
            <span style={{ color: "#5fa8ff" }}>Unbegrenzte</span>
            <span style={{ color: "#5fa8ff" }}>Kilometer.</span>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              marginTop: 34,
              fontSize: 24,
              color: "#e4e4e7",
            }}
          >
            {["Voll versichert", "In- & Ausland", "Täglich 9–22 Uhr"].map(
              (t) => (
                <div
                  key={t}
                  style={{
                    display: "flex",
                    border: "2px solid #243152",
                    backgroundColor: "#121b33",
                    borderRadius: 999,
                    padding: "8px 20px",
                    lineHeight: 1.2,
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {t}
                </div>
              ),
            )}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 34,
              fontSize: 26,
              color: "#9aa3b8",
            }}
          >
            Autovermietung in {company.address.city} · {company.phone}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
