# Fahrzeugbilder

Lege hier deine echten Autobilder ab, z.B.:

- `auto-1.jpg`
- `auto-2.jpg`
- `auto-3.jpg`
- `auto-4.jpg`
- `auto-5.jpg`

Trage den Pfad anschliessend in `lib/company.ts` beim jeweiligen Fahrzeug ein:

```ts
{
  id: "car-1",
  name: "Fahrzeug 1",
  image: "/cars/auto-1.jpg", // <- hier eintragen (statt null)
  pricePerDay: "CHF 89.– / Tag",
  specs: ["Benzin", "Sitze: 5", "Automatik"],
}
```

Empfohlenes Seitenverhältnis: **16:10** (z.B. 1280 × 800 px) für eine
einheitliche Darstellung der Karten.
