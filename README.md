# Go Fast Rental – Website

Moderne, responsive Website für die Autovermietung **Go Fast Rental** in Spiez.
Gebaut mit **Next.js (App Router)**, **TypeScript** und **Tailwind CSS**.

## Features

- 🏎️ Sportliches, edles Dark-Design mit roten & neongelben Akzenten
- 📱 Voll responsive (Mobile, Tablet, Desktop)
- 🚗 Fahrzeugauswahl mit Bildergalerie pro Auto (Hochformat, wischen / blättern)
- 📝 Buchungs-/Kontaktformular mit Validierung
- 🆔 Verpflichtender Ausweis-/Führerschein-Upload
- 🔗 Auswahl oben wird automatisch ins Formular übernommen
- ✉️ Buchungsanfragen per E-Mail (Resend) inkl. Ausweis als Anhang
- ⚖️ Impressum & Datenschutzerklärung (Schweizer DSG)
- 💬 Schwebender WhatsApp-Button (Nummer in `lib/company.ts`)
- 🔎 SEO: Metadaten, Sitemap, robots.txt, Google-Unternehmensdaten (JSON-LD), Favicon & Vorschaubild für geteilte Links

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
  api/booking/route.ts # Versand der Buchungsanfragen per E-Mail
  impressum/page.tsx  # Impressum
  datenschutz/page.tsx # Datenschutzerklärung
  globals.css         # Tailwind & globale Styles
components/
  Navbar.tsx          # Sticky-Navigation
  Hero.tsx            # Header-/Hero-Bereich
  Conditions.tsx      # Mietbedingungen & Konditionen
  BookingSection.tsx  # Klammert Auswahl + Formular (shared state)
  CarSelection.tsx    # Fahrzeug-Karten zur Auswahl
  CarGallery.tsx      # Bildergalerie pro Fahrzeug (Hochformat)
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
Die Fahrzeuge (Name, Preise, Specs, Galerie) stehen in `lib/company.ts`.
Bilder gehören nach `public/cars/` (siehe [public/cars/README.md](./public/cars/README.md)).

### Formular-Versand (E-Mail)
Buchungsanfragen werden über die API-Route
[`app/api/booking/route.ts`](./app/api/booking/route.ts) serverseitig geprüft
und per [Resend](https://resend.com) als E-Mail verschickt – inklusive
Ausweis/Führerschein als Anhang (max. 4 MB). Mit „Antworten“ schreibt man
direkt dem Kunden.

Einrichtung:

1. Kostenlosen Account auf [resend.com](https://resend.com) erstellen und einen
   API-Key anlegen.
2. `.env.example` nach `.env.local` kopieren und die Werte eintragen
   (auf Vercel: *Settings → Environment Variables*).
3. Für den Live-Betrieb die eigene Domain bei Resend verifizieren und
   `BOOKING_FROM_EMAIL` auf eine Adresse dieser Domain setzen. Ohne eigene
   Domain kann Resend nur an die E-Mail-Adresse des Resend-Accounts senden.

### Impressum & Datenschutz
Die Seiten `/impressum` und `/datenschutz` holen Adresse, Telefon usw. aus
`lib/company.ts`. Dort noch **E-Mail-Adresse** (Pflicht im Impressum),
**Rechtsform** und ggf. **UID** eintragen. Die Datenschutzerklärung nennt
Vercel (Hosting) und Resend (E-Mail) als Dienstleister – bei einem anderen
Anbieter bitte den Abschnitt in `app/datenschutz/page.tsx` anpassen.
Die Texte sind eine sorgfältige Vorlage, ersetzen aber keine Rechtsberatung.

### SEO & Vorschaubild
- `lib/site.ts`: Titel, Beschreibung und Webseiten-Adresse. Sobald die eigene
  Domain steht, auf Vercel `NEXT_PUBLIC_SITE_URL` setzen (z.B.
  `https://go-fast-rental.ch`).
- `app/opengraph-image.tsx`: Vorschaubild für WhatsApp, Facebook usw.
- `components/BusinessJsonLd.tsx`: Unternehmensdaten für Google.
- `app/icon.png` / `app/apple-icon.png`: Favicon und Homescreen-Icon.
