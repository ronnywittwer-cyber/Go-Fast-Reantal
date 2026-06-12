"use client";

import Image from "next/image";
import { cars, formatChf, type CarId } from "@/lib/company";

interface CarSelectionProps {
  selected: CarId | null;
  onSelect: (id: CarId) => void;
}

export default function CarSelection({ selected, onSelect }: CarSelectionProps) {
  return (
    <section id="fahrzeuge" className="border-t border-ink-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Unsere Fahrzeuge
          </h2>
          <p className="mt-3 text-zinc-400">
            Wählen Sie Ihr Wunschfahrzeug aus – Ihre Auswahl wird automatisch ins
            Buchungsformular übernommen.
          </p>
        </div>

        <div
          role="radiogroup"
          aria-label="Fahrzeugauswahl"
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cars.map((car) => {
            const isActive = selected === car.id;
            return (
              <button
                type="button"
                key={car.id}
                role="radio"
                aria-checked={isActive}
                onClick={() => onSelect(car.id)}
                className={`group relative overflow-hidden rounded-2xl border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky ${
                  isActive
                    ? "border-brand-blue bg-ink-card shadow-glow"
                    : "border-ink-border bg-ink-card hover:border-zinc-600"
                }`}
              >
                {/* Auswahl-Indikator (Radio-Styling) */}
                <span
                  className={`absolute right-4 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all ${
                    isActive
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-zinc-500 bg-ink/60 text-transparent"
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 5 5 9-9" />
                  </svg>
                </span>

                {/* Bild-Platzhalter: später durch echtes Bild ersetzen.
                    Lege Bilder unter /public/cars/ ab und setze car.image. */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-zinc-800 to-ink">
                  {car.image ? (
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2 text-zinc-500">
                      <svg
                        className="h-12 w-12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M3 13l2-5a2 2 0 0 1 1.9-1.4h10.2A2 2 0 0 1 19 8l2 5M5 13h14M5 13v4m14-4v4M7 17h.01M17 17h.01" />
                        <rect x="3" y="13" width="18" height="4" rx="1" />
                      </svg>
                      <span className="text-xs uppercase tracking-wider">
                        Bild folgt
                      </span>
                    </div>
                  )}
                </div>

                {/* Karten-Inhalt */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{car.name}</h3>

                  <ul className="mt-3 flex flex-wrap gap-2">
                    {car.specs.map((spec) => (
                      <li
                        key={spec}
                        className="rounded-md border border-ink-border px-2 py-1 text-xs text-zinc-400"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>

                  {/* Preise: Tag prominent, Woche & Monat daneben */}
                  <div className="mt-4 flex items-end justify-between gap-3 rounded-xl border border-ink-border bg-ink/40 px-3 py-2.5">
                    <div className="leading-none">
                      <span className="text-xl font-black text-white">
                        {formatChf(car.prices.day)}
                      </span>
                      <span className="text-xs text-zinc-400"> / Tag</span>
                    </div>
                    <div className="text-right text-xs leading-tight text-zinc-400">
                      <div>
                        {formatChf(car.prices.week)}{" "}
                        <span className="text-zinc-500">/ Woche</span>
                      </div>
                      <div>
                        {formatChf(car.prices.month)}{" "}
                        <span className="text-zinc-500">/ Monat</span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`mt-4 block text-sm font-semibold ${
                      isActive ? "text-brand-sky" : "text-zinc-500"
                    }`}
                  >
                    {isActive ? "✓ Ausgewählt" : "Auswählen"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
