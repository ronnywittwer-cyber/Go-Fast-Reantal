import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: "#0a1020",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s – Go Fast Rental",
  },
  description: siteDescription,
  keywords: [
    "Autovermietung Spiez",
    "Auto mieten Spiez",
    "Mietwagen Spiez",
    "Autovermietung Thun",
    "Mietauto Berner Oberland",
    "Auto mieten unbegrenzte Kilometer",
    "Go Fast Rental",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description:
      "Unbegrenzte Kilometer, voll versichert, In- und Ausland erlaubt. Jetzt Fahrzeug auswählen und anfragen.",
    url: "/",
    siteName: "Go Fast Rental",
    locale: "de_CH",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body>{children}</body>
    </html>
  );
}
