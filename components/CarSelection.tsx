"use client";

import { cars, formatChf, kmExtraPrice, kmIncluded, type CarId } from "@/lib/company";
import CarGallery from "./CarGallery";

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
          {cars.map((car, carIndex) => {
            const isActive = selected === car.id;
            const disabled = !car.available;
            const select = () => !disabled && onSelect(car.id);
            return (
              // Kein <button>, weil die Galerie eigene Buttons enthält.
              <div
                key={car.id}
                role="radio"
                aria-checked={isActive}
                aria-disabled={disabled}
                aria-label={car.name}
                tabIndex={disabled ? -1 : 0}
                onClick={select}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    select();
                  }
                }}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky ${
                  disabled
                    ? "cursor-not-allowed border-ink-border bg-ink-card opacity-60"
                    : isActive
                      ? "border-brand-blue bg-ink-card shadow-glow"
                      : "border-ink-border bg-ink-card hover:border-zinc-600"
                }`}
              >
                {/* Auswahl-Indikator (Radio-Styling) – bei Nicht-Verfügbarkeit ausgeblendet */}
                <span
                  className={`absolute right-4 top-4 z-30 flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all ${
                    disabled
                      ? "hidden"
                      : isActive
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

                <div className="relative">
                  {/* Overlay bei Nicht-Verfügbarkeit */}
                  {disabled && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-ink/70">
                      <span className="rounded-full border border-zinc-500 bg-ink/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-zinc-200">
                        Aktuell nicht verfügbar
                      </span>
                    </div>
                  )}
                  <CarGallery
                    images={car.images}
                    dimmed={disabled}
                    priority={carIndex === 0}
                  />
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

                  <p className="mt-2 text-[11px] leading-tight text-zinc-500">
                    {kmIncluded}, danach {kmExtraPrice}/km
                  </p>

                  <span
                    className={`mt-4 block text-sm font-semibold ${
                      disabled
                        ? "text-zinc-600"
                        : isActive
                          ? "text-brand-sky"
                          : "text-zinc-500"
                    }`}
                  >
                    {disabled
                      ? "Nicht verfügbar"
                      : isActive
                        ? "✓ Ausgewählt"
                        : "Auswählen"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
