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

// Mietbedingungen & Konditionen
export const conditions = [
  {
    icon: "infinity",
    title: "Unbegrenzte Kilometer",
    text: "Alle Mieten beinhalten unbegrenzte Kilometer – ohne versteckte Zusatzkosten.",
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

export interface Car {
  id: CarId;
  name: string;
  // Bild-Platzhalter: Lege deine echten Bilder unter /public/cars/ ab
  // und trage den Pfad hier ein, z.B. "/cars/auto-1.jpg".
  image: string | null;
  pricePerDay: string; // Preis-Platzhalter, später ersetzen
  specs: string[];
}

// Die 5 Fahrzeuge. Bilder liegen unter /public/cars/.
// Preise sind noch Platzhalter ("CHF XX.– / Tag") – einfach hier eintragen.
// Specs bei Bedarf anpassen.
export const cars: Car[] = [
  {
    id: "car-1",
    name: "Lamborghini Aventador SVJ",
    image: "/cars/lamborghini.jpg",
    pricePerDay: "CHF XX.– / Tag",
    specs: ["Supersportwagen", "2 Sitze", "V12"],
  },
  {
    id: "car-2",
    name: "Mercedes A-Klasse",
    image: "/cars/mercedes-a-klasse.jpg",
    pricePerDay: "CHF XX.– / Tag",
    specs: ["Kompaktklasse", "5 Sitze", "Automatik"],
  },
  {
    id: "car-3",
    name: "Opel Astra",
    image: "/cars/opel.jpg",
    pricePerDay: "CHF XX.– / Tag",
    specs: ["Kompaktklasse", "5 Sitze", "Klimaanlage"],
  },
  {
    id: "car-4",
    name: "Smart Fortwo",
    image: "/cars/smart.jpg",
    pricePerDay: "CHF XX.– / Tag",
    specs: ["Stadtflitzer", "2 Sitze", "Wendig"],
  },
  {
    id: "car-5",
    name: "Opel Kadett – Oldtimer",
    image: "/cars/opel-kadett.jpg",
    pricePerDay: "CHF XX.– / Tag",
    specs: ["Oldtimer", "Klassiker", "Benzin"],
  },
];
