# Fahrzeugbilder

Pro Auto gibt es eine Bildergalerie, alle Bilder im **Hochformat 3:4
(600 × 800 px)**:

- `dacia-1.jpg` … `dacia-7.jpg` – Dacia Sandero Stepway
- `smart-1.jpg` … `smart-7.jpg` – Smart forfour
- `opel-1.jpg` … `opel-6.jpg` – Opel Astra Caravan
- `mg-1.jpg` … `mg-7.jpg` – MG ZS Luxury

Das Bild mit der Nummer 1 ist jeweils das Hauptbild auf der Karte.
Welche Bilder zu welchem Auto gehören, steht in `lib/company.ts`
(`images: gallery("dacia", …)`).

## Neue Bilder hinzufügen

Am einfachsten die Originalfotos hochladen und Claude bitten, sie
zuzuschneiden. Von Hand: Bild auf 3:4 zuschneiden, auf 600 × 800 px
verkleinern, als `<auto>-<nummer>.jpg` hier ablegen und in
`lib/company.ts` bei der Galerie eine Beschreibung ergänzen.
