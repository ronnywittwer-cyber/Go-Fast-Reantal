"use client";

import { useState } from "react";

/**
 * Text-Wortmarke im Logo-Stil als Fallback:
 * "GO FAST" in Blau, "RENTAL" in Stahlgrau.
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

/**
 * Zeigt die echte Logo-Grafik aus /public an, sobald sie existiert –
 * andernfalls den Text-Schriftzug (kein kaputtes Bild).
 *
 * Lade dein Logo nach: public/logo-go-fast.png
 * (am besten mit transparentem Hintergrund). Das weisse, abgerundete
 * Feld sorgt dafür, dass das Logo auch auf dem dunklen Navy gut wirkt.
 */
export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <Wordmark />;
  }

  return (
    <span className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-go-fast.png`}
        alt="Go Fast Rental"
        className={className}
        onError={() => setFailed(true)}
      />
    </span>
  );
}
