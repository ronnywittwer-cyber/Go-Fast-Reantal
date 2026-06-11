import { company } from "@/lib/company";

export default function Hero() {
  return (
    <section id="top" className="bg-grid relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-card px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand-sky">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-sky" />
            Autovermietung in Spiez
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
            Kein Limit.{" "}
            <span className="bg-gradient-to-br from-brand-sky to-brand-blue bg-clip-text text-transparent">
              Unbegrenzte Kilometer.
            </span>{" "}
            Volle Freiheit.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-300">
            Fahren Sie so weit Sie wollen – ohne Kilometer-Limit, voll versichert
            und auch ins Ausland. Bei{" "}
            <span className="font-semibold text-white">Go Fast Rental</span>{" "}
            mieten Sie unkompliziert, persönlich und ohne versteckte Kosten.
          </p>

          {/* USP-Badges – schneller Vertrauensaufbau */}
          <ul className="mt-7 flex flex-wrap gap-2.5 text-sm">
            {[
              "♾️  Unbegrenzte Kilometer",
              "🌍  In- & Ausland erlaubt",
              "🛡️  Voll versichert",
            ].map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-ink-border bg-ink-card px-4 py-1.5 font-medium text-zinc-200"
              >
                {badge}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#fahrzeuge"
              className="rounded-full bg-brand-blue px-7 py-3 text-sm font-bold text-white shadow-glow transition-transform hover:scale-105"
            >
              Jetzt Fahrzeug wählen
            </a>
            <a
              href={company.phoneHref}
              className="rounded-full border border-ink-border bg-ink-card px-7 py-3 text-sm font-bold text-white transition-colors hover:border-brand-sky hover:text-brand-sky"
            >
              {company.phone}
            </a>
          </div>

          {/* Schnell-Infos */}
          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-wider text-zinc-500">
                Öffnungszeiten
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                Täglich 09–22 Uhr
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-zinc-500">
                Standort
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                {company.address.city}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-zinc-500">
                Kilometer
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                Unbegrenzt inkl.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
