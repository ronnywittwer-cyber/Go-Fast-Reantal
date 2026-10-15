import { company, kmIncluded } from "@/lib/company";

// Wiedererkennungs-Element: zwei gekreuzte, endlos laufende Bänder –
// wie Absperrband an der Rennstrecke. Läuft ohne JavaScript (reines CSS).

const items = [
  company.name,
  kmIncluded,
  "Voll versichert",
  "In- & Ausland erlaubt",
  "Täglich 09–22 Uhr",
  "Bar · TWINT · Überweisung",
  `${company.address.city} · Berner Oberland`,
];

// Pfeil im Stil des Logos als Trennzeichen
function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 8h24M20 2l7 6-7 6" />
    </svg>
  );
}

function Track({
  animation,
  textClass,
  arrowClass,
}: {
  animation: string;
  textClass: string;
  arrowClass: string;
}) {
  // Liste 2× pro Hälfte, damit auch breite Bildschirme gefüllt sind;
  // die zweite Hälfte ist eine Kopie für den nahtlosen Übergang.
  const half = [...items, ...items];
  return (
    <div className={`flex w-max ${animation} group-hover:[animation-play-state:paused]`}>
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1}
          className="flex shrink-0 items-center"
        >
          {half.map((item, i) => (
            <li key={i} className="flex items-center">
              <span className={`whitespace-nowrap px-6 ${textClass}`}>
                {item}
              </span>
              <Arrow className={`h-4 w-8 shrink-0 ${arrowClass}`} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default function SpeedBand() {
  return (
    <div
      className="group relative h-44 overflow-hidden sm:h-40"
      role="region"
      aria-label="Unsere Vorteile"
    >
      {/* Hinteres Band: dunkel, läuft nach rechts */}
      <div className="absolute left-[-5%] top-1/2 w-[110%] -translate-y-1/2 rotate-[7deg] sm:rotate-[2.5deg] border-y border-brand-sky/25 bg-ink-card py-3 sm:py-3.5">
        <Track
          animation="animate-marquee-reverse"
          textClass="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400 sm:text-base"
          arrowClass="text-brand-sky/50"
        />
      </div>

      {/* Vorderes Band: Markenblau, läuft nach links */}
      <div className="absolute left-[-5%] top-1/2 w-[110%] -translate-y-1/2 -rotate-[5deg] sm:-rotate-[2.5deg] bg-gradient-to-r from-brand-blueDark via-brand-blue to-brand-blueDark py-3 shadow-glow sm:py-4">
        <Track
          animation="animate-marquee"
          textClass="text-base font-black uppercase italic tracking-wide text-white sm:text-xl"
          arrowClass="text-brand-sky"
        />
      </div>
    </div>
  );
}
