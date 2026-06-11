# Go Fast Rental – Website

Moderne, responsive Website für die Autovermietung **Go Fast Rental** in Spiez.
Gebaut mit **Next.js (App Router)**, **TypeScript** und **Tailwind CSS**.

## Features

- 🏎️ Sportliches, edles Dark-Design mit roten & neongelben Akzenten
- 📱 Voll responsive (Mobile, Tablet, Desktop)
- 🚗 Fahrzeugauswahl mit 5 Karten und Radio-Styling
- 📝 Buchungs-/Kontaktformular mit Validierung
- 🆔 Verpflichtender Ausweis-/Führerschein-Upload
- 🔗 Auswahl oben wird automatisch ins Formular übernommen

## Entwicklung

```bash
npm install
npm run dev
```

Die Seite läuft dann auf [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Produktions-Build
npm run start   # Produktions-Server
```

## Projektstruktur

```
app/
  layout.tsx          # Root-Layout & Metadaten
  page.tsx            # Hauptseite (setzt die Komponenten zusammen)
  globals.css         # Tailwind & globale Styles
components/
  Navbar.tsx          # Sticky-Navigation
  Hero.tsx            # Header-/Hero-Bereich
  Conditions.tsx      # Mietbedingungen & Konditionen
  BookingSection.tsx  # Klammert Auswahl + Formular (shared state)
  CarSelection.tsx    # Fahrzeug-Karten zur Auswahl
  ContactForm.tsx     # Buchungsformular inkl. Validierung
  Footer.tsx          # Kontakt, Öffnungszeiten, Standort
lib/
  company.ts          # Zentrale Firmendaten, Konditionen & Fahrzeuge
public/
  cars/               # Hier echte Fahrzeugbilder ablegen
```

## Anpassen

### Firmendaten
Alle Stammdaten (Adresse, Telefon, Öffnungszeiten …) findest du zentral in
[`lib/company.ts`](./lib/company.ts).

### Fahrzeuge (Bilder & Preise)
Die 5 Fahrzeuge sind aktuell Platzhalter. In `lib/company.ts` kannst du pro
Fahrzeug Name, Preis, Specs und Bildpfad setzen. Bilder gehören nach
`public/cars/` (siehe [public/cars/README.md](./public/cars/README.md)).

### Formular-Versand anbinden
Das Formular validiert aktuell clientseitig und zeigt eine Bestätigung an. Um
Anfragen tatsächlich zu empfangen, lege eine API-Route an (z.B.
`app/api/booking/route.ts`) oder binde einen E-Mail-Service ein. Die Stelle ist
in [`components/ContactForm.tsx`](./components/ContactForm.tsx) mit `// TODO`
markiert.
