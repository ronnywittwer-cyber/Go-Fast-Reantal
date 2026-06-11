"use client";

import { useState } from "react";
import type { CarId } from "@/lib/company";
import CarSelection from "./CarSelection";
import ContactForm from "./ContactForm";

/**
 * Klammert Fahrzeugauswahl und Buchungsformular zusammen und teilt den
 * "selectedCar"-State, damit die Auswahl oben automatisch ins Formular
 * übernommen wird (und umgekehrt über das Dropdown).
 */
export default function BookingSection() {
  const [selectedCar, setSelectedCar] = useState<CarId | null>(null);

  function handleSelect(id: CarId) {
    setSelectedCar(id);
  }

  return (
    <>
      <CarSelection selected={selectedCar} onSelect={handleSelect} />

      <section id="buchung" className="border-t border-ink-border/60 bg-ink-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Jetzt anfragen
            </h2>
            <p className="mt-3 text-zinc-400">
              Füllen Sie das Formular aus – Ihr oben gewähltes Fahrzeug ist
              bereits vorausgewählt.
            </p>
          </div>

          <ContactForm selectedCar={selectedCar} onSelectCar={handleSelect} />
        </div>
      </section>
    </>
  );
}
