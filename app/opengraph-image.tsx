import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { cars, company, kmPerMonth } from "@/lib/company";

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
  // Hauptbild (Front) jedes Fahrzeugs, max. 3
  const [logo, ...carImages] = await Promise.all([
    dataUrl("logo-go-fast.png", "image/png"),
    ...cars
      .slice(0, 3)
      .map((c) => dataUrl(c.images[0].src.replace(/^\//, ""), "image/jpeg")),
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
        {/* Fahrzeugkarten rechts, leicht versetzt */}
        <div
          style={{
            position: "absolute",
            right: 36,
            top: 0,
            height: 630,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          {carImages.map((src, i) => (
            <img
              key={i}
              src={src}
              width={156}
              height={208}
              style={{
                width: 156,
                height: 208,
                objectFit: "cover",
                borderRadius: 18,
                border: "3px solid #243152",
                marginTop: i === 1 ? -60 : 60,
              }}
            />
          ))}
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 70px",
            width: 640,
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
            <span>Faire Preise.</span>
            <span style={{ color: "#5fa8ff" }}>{kmPerMonth}</span>
            <span style={{ color: "#5fa8ff" }}>inklusive.</span>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              marginTop: 34,
              fontSize: 20,
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
                    padding: "7px 16px",
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
