// Zentrale Firmen- und Geschäftsdaten für Go Fast Rental.
// Hier kannst du alle Stammdaten an einer Stelle anpassen.

export const company = {
  name: "Go Fast Rental",
  founder: "Daniel Scharou",
  foundedYear: 2025,
  address: {
    street: "Thunstrasse 23",
    zip: "3700",
    city: "Spiez",
    country: "Schweiz",
  },
  // TODO: Für Impressum & Datenschutz ergänzen. Leere Felder werden auf der
  // Webseite ausgeblendet – die E-Mail-Adresse ist im Impressum aber Pflicht.
  email: "",
  // z.B. "Einzelunternehmen" oder "GmbH"
  legalForm: "",
  // UID (CHE-xxx.xxx.xxx), nur falls im Handelsregister eingetragen
  uid: "",
  openingHours: "Täglich 09:00 – 22:00 Uhr",
  phone: "076 221 38 24",
  // Telefonnummer in internationalem Format für tel:-Links
  phoneHref: "tel:+41762213824",
  // WhatsApp-Nummer international ohne "+" und Leerzeichen
  whatsapp: "41762213824",
} as const;

// Link, der WhatsApp mit einer vorbereiteten Nachricht öffnet
export const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  "Hallo Go Fast Rental, ich interessiere mich für ein Mietauto.",
)}`;

// Kilometer-Regelung: inklusive Kontingent pro Monat, danach Verrechnung pro km.
export const kmPolicy = {
  includedPerMonth: 2000,
  extraChfPerKm: 0.5,
} as const;

// Fertige Texte, z.B. "2’000 km/Monat", "2’000 km/Monat inklusive", "CHF 0.50"
export const kmPerMonth = `${kmPolicy.includedPerMonth.toLocaleString("de-CH")} km/Monat`;
export const kmIncluded = `${kmPerMonth} inklusive`;
export const kmExtraPrice = `CHF ${kmPolicy.extraChfPerKm.toFixed(2)}`;

// Mietregeln (für Konditionen & FAQ)
export const rentalTerms = {
  minAge: 18,
  // 0 = keine Mindestdauer, auch Neulenker
  licenseMinYears: 0,
  depositChf: 1000,
  deductibleChf: 1000, // Selbstbehalt im Schadenfall
} as const;

// Mietbedingungen & Konditionen
export const conditions = [
  {
    icon: "gauge",
    title: kmIncluded,
    text: `Jede Miete beinhaltet ${kmPerMonth}. Mehrkilometer werden mit ${kmExtraPrice} pro km verrechnet.`,
  },
  {
    icon: "globe",
    title: "In- & Ausland",
    text: "Fahrten innerhalb der Schweiz und ins Ausland sind ausdrücklich erlaubt.",
  },
  {
    icon: "shield",
    title: "Voll versichert",
    text: `Alle Fahrzeuge sind voll versichert. Im Schadenfall beträgt der Selbstbehalt ${formatChf(rentalTerms.deductibleChf)}`,
  },
  {
    icon: "wallet",
    title: `Kaution ${formatChf(rentalTerms.depositChf)}`,
    text: `Bei Abholung wird eine Kaution von ${formatChf(rentalTerms.depositChf)} hinterlegt – Sie erhalten sie bei der Rückgabe sofort zurück.`,
  },
  {
    icon: "fuel",
    title: "Voll zu Voll",
    text: "Sie erhalten das Auto vollgetankt und geben es bitte ebenso vollgetankt zurück.",
  },
  {
    icon: "card",
    title: "Flexible Zahlung",
    text: "Bezahlen Sie bequem per Bar, TWINT oder Banküberweisung – ganz wie es Ihnen passt.",
  },
] as const;

// Max. Grösse für den Ausweis-Upload. Vercel erlaubt ~4.5 MB pro Request.
export const maxUploadBytes = 4 * 1024 * 1024;

// Vorlaufzeit für Buchungen in Tagen: 0 = ab heute buchbar, 1 = ab morgen …
export const bookingLeadDays = 0;

// Frühestes buchbares Datum als "YYYY-MM-DD" (Schweizer Zeit).
export function earliestBookingDate(now: Date = new Date()): string {
  const day = new Date(now.getTime() + bookingLeadDays * 86_400_000);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Zurich",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(day);
}

export type CarId = "dacia-sandero" | "smart-forfour" | "opel-astra";

export interface CarPrices {
  day: number; // CHF pro Tag
  week: number; // CHF pro Woche
  month: number; // CHF pro Monat
}

export interface CarImage {
  src: string;
  alt: string;
}

export interface Car {
  id: CarId;
  name: string;
  // Bilder liegen unter /public/cars/ (Hochformat 3:4, 600 × 800 px).
  // Das erste Bild ist das Hauptbild der Karte.
  images: CarImage[];
  prices: CarPrices;
  specs: string[];
  // Verfügbarkeit: true = buchbar, false = aktuell nicht verfügbar.
  available: boolean;
}

// Formatiert einen Betrag im Schweizer Stil, z.B. 1500 -> "CHF 1’500.–"
export function formatChf(amount: number): string {
  return "CHF " + amount.toLocaleString("de-CH") + ".–";
}

// Hilfsfunktion für die Bildergalerie: /cars/<prefix>-1.jpg, -2.jpg, …
function gallery(prefix: string, name: string, views: string[]): CarImage[] {
  return views.map((view, i) => ({
    src: `/cars/${prefix}-${i + 1}.jpg`,
    alt: `${name} – ${view}`,
  }));
}

// Die Fahrzeuge. Preise (Tag / Woche / Monat) und Specs hier anpassen.
export const cars: Car[] = [
  {
    id: "dacia-sandero",
    name: "Dacia Sandero Stepway",
    images: gallery("dacia", "Dacia Sandero Stepway", [
      "Front",
      "Seitlich vorne",
      "Seitenansicht",
      "Seitlich hinten",
      "Heck",
      "Kofferraum",
      "Innenraum",
    ]),
    prices: { day: 40, week: 150, month: 500 },
    specs: ["Crossover", "5 Sitze", "Touchscreen"],
    available: true,
  },
  {
    id: "smart-forfour",
    name: "Smart forfour",
    images: gallery("smart", "Smart forfour", [
      "Front",
      "Seitlich vorne",
      "Seitenansicht",
      "Seitlich hinten",
      "Heck",
      "Cockpit",
      "Innenraum",
    ]),
    prices: { day: 50, week: 220, month: 800 },
    specs: ["Stadtflitzer", "4 Sitze", "Automatik"],
    available: true,
  },
  {
    id: "opel-astra",
    name: "Opel Astra Caravan",
    images: gallery("opel", "Opel Astra Caravan", [
      "Front",
      "Seitlich hinten",
      "Heck",
      "Kofferraum",
      "Innenraum",
      "Cockpit",
    ]),
    prices: { day: 40, week: 150, month: 500 },
    specs: ["Kombi", "5 Sitze", "Automatik"],
    available: true,
  },
];
