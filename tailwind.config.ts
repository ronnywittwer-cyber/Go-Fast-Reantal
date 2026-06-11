import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Markenfarben "Go Fast Rental" – abgeleitet aus dem blauen Logo
        ink: {
          DEFAULT: "#0a1020", // tiefes Navy
          soft: "#0d1426",
          card: "#121b33",
          border: "#243152",
        },
        brand: {
          // Royales Blau aus dem Logo
          blue: "#2563eb",
          blueDark: "#1741a6",
          navy: "#0f244f",
          // Helles Sky-Blau als Akzent (ersetzt das frühere Neongelb)
          sky: "#5fa8ff",
          // Stahlgrau wie der "RENTAL"-Schriftzug im Logo
          steel: "#9aa3b8",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(37, 99, 235, 0.55)",
        sky: "0 0 30px -8px rgba(95, 168, 255, 0.55)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
