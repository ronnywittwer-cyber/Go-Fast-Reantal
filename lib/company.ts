// Zentrale Firmen- und Geschäftsdaten für Go Fast Rental.
// Hier kannst du alle Stammdaten an einer Stelle anpassen.

export const company = {
  name: "Go Fast Rental",
  founder: "Daniel Scharou",
  foundedYear: 2025,
  address: {
    street: "Thun Strasse 23",
    city: "Spiez",
  },
  openingHours: "Täglich 09:00 – 22:00 Uhr",
  phone: "079 221 38 24",
  // Telefonnummer in internationalem Format für tel:-Links
  phoneHref: "tel:+41792213824",
} as const;

// Kilometer-Regelung: inklusive Kontingent pro Monat, danach Verrechnung pro km.
export const kmPolicy = {
  includedPerMonth: 2000,
  extraChfPerKm: 0.5,
} as const;

// Mietbedingungen & Konditionen
export const conditions = [
  {
    icon: "infinity",
    title: `${kmPolicy.includedPerMonth} km/Monat inklusive`,
    text: `Jede Miete beinhaltet ${kmPolicy.includedPerMonth} km pro Monat. Mehrkilometer werden mit ${kmPolicy.extraChfPerKm.toFixed(2)} CHF pro km verrechnet.`,
  },
  {
    icon: "globe",
    title: "In- & Ausland",
    text: "Fahrten innerhalb der Schweiz und ins Ausland sind ausdrücklich erlaubt.",
  },
  {
    icon: "shield",
    title: "Voll versichert",
    text: "Alle Fahrzeuge sind voll versichert – Sie sind rundum abgesichert unterwegs.",
  },
  {
    icon: "wallet",
    title: "Kaution 1’000.– CHF",
    text: "Bei Abholung wird eine Kaution von 1’000.– CHF hinterlegt.",
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

export type CarId = "car-1" | "car-2" | "car-3" | "car-4" | "car-5";

export interface CarPrices {
  day: number; // CHF pro Tag
  week: number; // CHF pro Woche
  month: number; // CHF pro Monat
}

export interface Car {
  id: CarId;
  name: string;
  // Bilder liegen unter /public/cars/.
  image: string | null;
  prices: CarPrices;
  specs: string[];
  // Verfügbarkeit: true = buchbar, false = aktuell nicht verfügbar.
  available: boolean;
}

// Formatiert einen Betrag im Schweizer Stil, z.B. 1500 -> "CHF 1’500.–"
export function formatChf(amount: number): string {
  return "CHF " + amount.toLocaleString("de-CH") + ".–";
}

// Die 5 Fahrzeuge. Bilder liegen unter /public/cars/.
// Preise (Tag / Woche / Monat) und Specs bei Bedarf hier anpassen.
export const cars: Car[] = [
  {
    id: "car-1",
    name: "Lamborghini Aventador SVJ",
    image: "/cars/lamborghini.jpg",
    prices: { day: 40, week: 200, month: 500 },
    specs: ["Supersportwagen", "2 Sitze", "V12"],
    available: true,
  },
  {
    id: "car-2",
    name: "Mercedes A-Klasse",
    image: "/cars/mercedes-a-klasse.jpg",
    prices: { day: 40, week: 200, month: 500 },
    specs: ["Kompaktklasse", "5 Sitze", "Automatik"],
    available: true,
  },
  {
    id: "car-3",
    name: "Opel Astra",
    image: "/cars/opel.jpg",
    prices: { day: 40, week: 200, month: 500 },
    specs: ["Kompaktklasse", "5 Sitze", "Klimaanlage"],
    available: true,
  },
  {
    id: "car-4",
    name: "Smart Fortwo",
    image: "/cars/smart.jpg",
    prices: { day: 50, week: 200, month: 800 },
    specs: ["Stadtflitzer", "2 Sitze", "Wendig"],
    available: true,
  },
  {
    id: "car-5",
    name: "Opel Kadett – Oldtimer",
    image: "/cars/opel-kadett.jpg",
    prices: { day: 40, week: 200, month: 500 },
    specs: ["Oldtimer", "Klassiker", "Benzin"],
    available: true,
  },
];
