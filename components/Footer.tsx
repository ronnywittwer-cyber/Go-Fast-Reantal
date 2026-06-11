import { company } from "@/lib/company";
import { Wordmark } from "./Navbar";

export default function Footer() {
  return (
    <footer id="kontakt" className="border-t border-ink-border bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marke */}
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm text-zinc-400">
              Ihre persönliche Autovermietung in {company.address.city}.
              Unbegrenzte Kilometer, voll versichert, In- und Ausland erlaubt.
            </p>
            <p className="mt-4 text-xs text-zinc-600">
              Gegründet {company.foundedYear} von {company.founder}.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-sky">📍</span>
                <span>
                  {company.address.street}
                  <br />
                  {company.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-sky">📞</span>
                <a
                  href={company.phoneHref}
                  className="transition-colors hover:text-brand-sky"
                >
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Öffnungszeiten
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-3">
                <span className="text-brand-sky">🕘</span>
                <span>{company.openingHours}</span>
              </li>
              <li>
                <a
                  href="#buchung"
                  className="mt-2 inline-block rounded-full bg-brand-blue px-5 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
                >
                  Fahrzeug anfragen
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-border pt-6 text-xs text-zinc-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.
          </p>
          <p>{company.founder} · {company.address.city}</p>
        </div>
      </div>
    </footer>
  );
}
