import { company } from "@/lib/company";

/**
 * Wortmarke im Stil des Logos: "GO FAST" in Blau, "RENTAL" in Stahlgrau.
 * Sobald du die Logo-Grafik hast, kannst du diesen Block durch
 *   <Image src="/logo.png" alt="Go Fast Rental" width={160} height={40} priority />
 * ersetzen (Datei nach /public/logo.png legen – am besten eine helle/weisse
 * Variante, damit sie auf dem dunklen Navy-Hintergrund gut sichtbar ist).
 */
export function Wordmark() {
  return (
    <span className="flex items-baseline gap-1.5 font-black uppercase tracking-tight">
      <span className="bg-gradient-to-br from-brand-sky to-brand-blue bg-clip-text text-xl text-transparent">
        Go Fast
      </span>
      <span className="text-base font-semibold tracking-[0.2em] text-brand-steel">
        Rental
      </span>
    </span>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-border/60 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" aria-label="Go Fast Rental – Startseite">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex">
          <a href="#fahrzeuge" className="transition-colors hover:text-white">
            Fahrzeuge
          </a>
          <a href="#konditionen" className="transition-colors hover:text-white">
            Konditionen
          </a>
          <a href="#buchung" className="transition-colors hover:text-white">
            Buchung
          </a>
          <a href="#kontakt" className="transition-colors hover:text-white">
            Kontakt
          </a>
        </nav>

        <a
          href={company.phoneHref}
          className="rounded-full border border-brand-sky/40 bg-brand-sky/10 px-4 py-2 text-sm font-semibold text-brand-sky transition-all hover:bg-brand-sky hover:text-ink"
        >
          {company.phone}
        </a>
      </div>
    </header>
  );
}
