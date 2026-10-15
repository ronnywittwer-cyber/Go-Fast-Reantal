// Auto-Silhouetten (Seitenansicht, Front rechts) für das Laufband.
// Fenster und Radkästen sind per Maske echt ausgeschnitten, damit der
// Hintergrund (auch ein Farbverlauf) durchscheint.

type Shape = {
  id: string;
  body: string;
  windows: string[];
  wheels: [number, number];
};

const shapes: Shape[] = [
  // Crossover / SUV (wie Dacia Sandero Stepway)
  {
    id: "crossover",
    body: "M3 18V12.5Q3 10.5 6 10L14 9L19 5Q20 4.2 22 4.2H33Q35 4.2 36.2 5.5L39.5 9.4L44 10.4Q46 10.9 46 13V18Z",
    windows: [
      "M16 9L20 5.8Q20.8 5.3 22 5.3H26V9Z",
      "M27.2 5.3H32.8Q34.2 5.3 35 6.3L37.6 9H27.2Z",
    ],
    wheels: [12, 37],
  },
  // Kleinwagen (wie Smart forfour)
  {
    id: "city",
    body: "M8 18V9.5Q8 4 13.5 4H28Q31.5 4 33.3 7.5L35.6 11.5Q39 12.2 39 15V18Z",
    windows: [
      "M10.2 10.5V8.8Q10.2 5.4 13.6 5.4H20.5V10.5Z",
      "M21.8 5.4H27.8Q30.2 5.4 31.4 7.8L33 10.5H21.8Z",
    ],
    wheels: [15, 32],
  },
  // Kombi (wie Opel Astra Caravan)
  {
    id: "wagon",
    body: "M2 18V9.5Q2 5 6.5 5H30.5Q32.5 5 34 6.6L37.4 10.2L43.6 11.2Q46 11.7 46 14V18Z",
    windows: [
      "M4.5 10V8.5Q4.5 6.3 6.8 6.3H14V10Z",
      "M15.2 6.3H23.5V10H15.2Z",
      "M24.7 6.3H30.3Q31.6 6.3 32.6 7.4L35 10H24.7Z",
    ],
    wheels: [11, 37],
  },
  // Sportwagen
  {
    id: "sports",
    body: "M1.5 18V13.2Q1.5 11.2 4.5 10.6L14.5 9.2L21 6Q23 5.1 26 5.1H29.5Q32.5 5.1 34.6 6.9L38 9.6L44.2 11Q47 11.7 47 14.2V18Z",
    windows: [
      "M19 9.2L22.3 7Q23.6 6.2 26 6.2H27.4V9.2Z",
      "M28.6 6.2H29.6Q31.8 6.2 33.4 7.5L35.4 9.2H28.6Z",
    ],
    wheels: [11, 38],
  },
];

export const carIconCount = shapes.length;

export function CarIcon({
  variant,
  className,
}: {
  variant: number;
  className?: string;
}) {
  const shape = shapes[variant % shapes.length];
  const maskId = `gf-car-${shape.id}`;
  return (
    <svg className={className} viewBox="0 0 48 24" aria-hidden="true">
      <defs>
        <mask id={maskId}>
          <rect width="48" height="24" fill="white" />
          {shape.windows.map((d) => (
            <path key={d} d={d} fill="black" />
          ))}
          {shape.wheels.map((x) => (
            <g key={x}>
              {/* Spalt zwischen Rad und Karosserie */}
              <circle cx={x} cy={18} r={4} fill="none" stroke="black" strokeWidth={1.2} />
              {/* Felge */}
              <circle cx={x} cy={18} r={1.2} fill="black" />
            </g>
          ))}
        </mask>
      </defs>
      <g mask={`url(#${maskId})`} fill="currentColor">
        <path d={shape.body} />
        {shape.wheels.map((x) => (
          <circle key={x} cx={x} cy={18} r={3.4} />
        ))}
      </g>
    </svg>
  );
}
