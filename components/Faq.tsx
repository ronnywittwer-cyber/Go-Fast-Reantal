import { company, whatsappHref } from "@/lib/company";
import { faq } from "@/lib/faq";

// Häufige Fragen als aufklappbare Liste (ohne JavaScript, mit <details>)
// plus strukturierte Daten, damit Google die Fragen erkennen kann.
export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section id="faq" className="border-t border-ink-border/60">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Häufige Fragen
          </h2>
          <p className="mt-3 text-zinc-400">
            Alles Wichtige zur Miete auf einen Blick.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-ink-border bg-ink-card transition-colors open:border-brand-blue/60"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-sky/10 text-brand-sky transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-zinc-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-400">
          Ihre Frage ist nicht dabei? Rufen Sie uns an unter{" "}
          <a href={company.phoneHref} className="font-semibold text-brand-sky hover:text-white">
            {company.phone}
          </a>{" "}
          oder schreiben Sie uns per{" "}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-sky hover:text-white"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
