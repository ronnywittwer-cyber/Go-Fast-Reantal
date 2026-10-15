"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { CarImage } from "@/lib/company";

// Bildergalerie im Hochformat (3:4). Auf dem Handy wischen, am Computer
// mit den Pfeilen blättern. Klicks auf Pfeile/Punkte wählen das Auto nicht aus.
export default function CarGallery({
  images,
  dimmed = false,
  priority = false,
}: {
  images: CarImage[];
  dimmed?: boolean;
  priority?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function goTo(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const next = (i + images.length) % images.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    setIndex(Math.round(track.scrollLeft / track.clientWidth));
  }

  function stop(e: React.SyntheticEvent) {
    e.stopPropagation();
  }

  const arrow =
    "absolute top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-white backdrop-blur transition-opacity hover:bg-ink sm:flex sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100";

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex h-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <div key={img.src} className="relative h-full w-full shrink-0 snap-center">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={priority && i === 0}
              className={`object-cover ${dimmed ? "grayscale" : ""}`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Vorheriges Bild"
            onClick={(e) => {
              stop(e);
              goTo(index - 1);
            }}
            onKeyDown={stop}
            className={`${arrow} left-3`}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Nächstes Bild"
            onClick={(e) => {
              stop(e);
              goTo(index + 1);
            }}
            onKeyDown={stop}
            className={`${arrow} right-3`}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Bild ${i + 1} von ${images.length}`}
                aria-current={i === index}
                onClick={(e) => {
                  stop(e);
                  goTo(i);
                }}
                onKeyDown={stop}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <span className="absolute left-3 top-3 z-10 rounded-full bg-ink/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
            {index + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}
