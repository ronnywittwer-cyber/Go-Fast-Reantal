import { company } from "@/lib/company";
import { Logo } from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-border/60 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" aria-label="Go Fast Rental – Startseite">
          <Logo className="h-8 w-auto sm:h-9" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex">
          <a href="#fahrzeuge" className="transition-colors hover:text-white">
            Fahrzeuge
          </a>
          <a href="#buchung" className="transition-colors hover:text-white">
            Buchung
          </a>
          <a href="#konditionen" className="transition-colors hover:text-white">
            Konditionen
          </a>
          <a href="#kontakt" className="transition-colors hover:text-white">
            Kontakt
          </a>
        </nav>

        <a
          href={company.phoneHref}
          className="rounded-full border border-brand-sky/40 bg-brand-sky/10 px-4 py-2 text-sm font-semibold text-brand-sky transition-all hover:bg-brand-sky hover:text-ink"
        >
          Schnell &amp; unkompliziert
        </a>
      </div>
    </header>
  );
}
