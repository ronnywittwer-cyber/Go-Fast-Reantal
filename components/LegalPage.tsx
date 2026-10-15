import Navbar from "./Navbar";
import Footer from "./Footer";

// Gemeinsames Layout für Impressum & Datenschutz.
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <a
          href="/"
          className="text-sm font-medium text-brand-sky transition-colors hover:text-white"
        >
          ← Zurück zur Startseite
        </a>
        <h1 className="mt-6 text-3xl font-black text-white sm:text-4xl">
          {title}
        </h1>
        {updated && (
          <p className="mt-2 text-sm text-zinc-500">Stand: {updated}</p>
        )}
        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-zinc-300">
          {children}
        </div>
      </article>
      <Footer />
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-white">{title}</h2>
      {children}
    </section>
  );
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 marker:text-brand-sky">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export const legalLink =
  "text-brand-sky underline-offset-2 transition-colors hover:text-white hover:underline";
