import { kmIncluded } from "./company";

// Öffentliche Adresse der Webseite – wird für Google, Sitemap und
// Vorschaubilder (WhatsApp, Facebook …) gebraucht.
// Kann auf Vercel mit der Umgebungsvariable NEXT_PUBLIC_SITE_URL
// überschrieben werden.
const productionUrl = "https://www.gofastrental.ch";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  if (process.env.VERCEL) return productionUrl;
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const siteTitle = "Go Fast Rental – Autovermietung in Spiez";
export const siteDescription =
  `Auto mieten in Spiez bei Thun: ${kmIncluded}, voll versichert, Fahrten im In- und Ausland erlaubt. Täglich 09:00–22:00 Uhr.`;
