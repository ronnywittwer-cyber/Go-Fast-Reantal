// Öffentliche Adresse der Webseite – wird für Google, Sitemap und
// Vorschaubilder (WhatsApp, Facebook …) gebraucht.
// Sobald die eigene Domain steht, auf Vercel die Umgebungsvariable
// NEXT_PUBLIC_SITE_URL setzen, z.B. "https://go-fast-rental.ch".
// Bis dahin wird automatisch die Vercel-Adresse verwendet.
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const siteTitle = "Go Fast Rental – Autovermietung in Spiez";
export const siteDescription =
  "Auto mieten in Spiez bei Thun: unbegrenzte Kilometer, voll versichert, Fahrten im In- und Ausland erlaubt. Täglich 09:00–22:00 Uhr.";
