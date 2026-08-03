import type { Metadata, Viewport } from "next";
import { kmPolicy } from "@/lib/company";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a1020",
};

export const metadata: Metadata = {
  title: "Go Fast Rental – Autovermietung in Spiez",
  description: `Go Fast Rental – Ihre Autovermietung in Spiez. ${kmPolicy.includedPerMonth} km/Monat inklusive, voll versicherte Fahrzeuge, Fahrten im In- und Ausland. Täglich 09:00–22:00 Uhr geöffnet.`,
  keywords: [
    "Autovermietung",
    "Mietwagen",
    "Spiez",
    "Thun",
    "Go Fast Rental",
    "Auto mieten Schweiz",
  ],
  openGraph: {
    title: "Go Fast Rental – Autovermietung in Spiez",
    description: `${kmPolicy.includedPerMonth} km/Monat inklusive, voll versichert, In- und Ausland erlaubt. Jetzt Fahrzeug auswählen und anfragen.`,
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
