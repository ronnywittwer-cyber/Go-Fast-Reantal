import { company } from "@/lib/company";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-border/60 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="text-xl text-white">Go</span>
          <span className="rounded-md bg-brand-red px-2 py-0.5 text-xl text-white shadow-glow">
            Fast
          </span>
          <span className="text-xl text-brand-neon">Rental</span>
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
          className="rounded-full border border-brand-neon/40 bg-brand-neon/10 px-4 py-2 text-sm font-semibold text-brand-neon transition-all hover:bg-brand-neon hover:text-ink"
        >
          {company.phone}
        </a>
      </div>
    </header>
  );
}
