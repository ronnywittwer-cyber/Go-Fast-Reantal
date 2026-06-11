import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Markenfarben "Go Fast Rental"
        ink: {
          DEFAULT: "#0a0a0b",
          soft: "#121214",
          card: "#17171a",
          border: "#26262b",
        },
        brand: {
          // Sportliches Rot
          red: "#e10600",
          redDark: "#b30500",
          // Neongelb als Akzent
          neon: "#d7ff00",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(225, 6, 0, 0.55)",
        neon: "0 0 30px -8px rgba(215, 255, 0, 0.55)",
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
