import { conditions } from "@/lib/company";

// Minimaler Inline-Icon-Satz, damit keine externe Icon-Library nötig ist.
function ConditionIcon({ name }: { name: string }) {
  const common = {
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "infinity":
      return (
        <svg {...common}>
          <path d="M6 8a4 4 0 1 0 0 8c2 0 3-1.5 6-4s4-4 6-4a4 4 0 1 1 0 8c-2 0-3-1.5-6-4S8 8 6 8Z" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...common}>
          <path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
          <path d="M16 12h3M3 9h14" />
          <circle cx="16" cy="12" r="0.6" fill="currentColor" />
        </svg>
      );
    case "fuel":
      return (
        <svg {...common}>
          <path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h12" />
          <path d="M14 8h2.5A1.5 1.5 0 0 1 18 9.5V16a1.5 1.5 0 0 0 3 0V8l-3-3" />
          <path d="M6 9h6" />
        </svg>
      );
    case "card":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 10h18M7 15h4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Conditions() {
  return (
    <section id="konditionen" className="border-t border-ink-border/60 bg-ink-soft">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Mietbedingungen & Konditionen
          </h2>
          <p className="mt-3 text-zinc-400">
            Alles transparent und fair – damit Sie sich ganz auf die Fahrt
            konzentrieren können.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-ink-border bg-ink-card p-6 transition-colors hover:border-brand-red/60"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                <ConditionIcon name={c.icon} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
