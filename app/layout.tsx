import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Go Fast Rental – Autovermietung in Spiez",
  description:
    "Go Fast Rental – Ihre Autovermietung in Spiez. Unbegrenzte Kilometer, voll versicherte Fahrzeuge, Fahrten im In- und Ausland. Täglich 09:00–22:00 Uhr geöffnet.",
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
    description:
      "Unbegrenzte Kilometer, voll versichert, In- und Ausland erlaubt. Jetzt Fahrzeug auswählen und anfragen.",
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
