import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBFAF7",
          100: "#F4F1EA",
          200: "#E8E2D5",
        },
        ink: {
          DEFAULT: "#0E0E0C",
          900: "#0E0E0C",
          700: "#28261F",
          500: "#56524A",
          400: "#7A7568",
          300: "#9E9886",
        },
        block: {
          peach: "#F4D5C5",
          sand:  "#E9DDC2",
          olive: "#3D4029",
          rose:  "#EDD6D8",
          sky:   "#CFE0E5",
          ink:   "#0E0E0C",
        },
        accent: {
          DEFAULT: "#C8462C",
          dark: "#9E3520",
        },
      },
      fontFamily: {
        display: ["var(--font-instrument)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        snug: "-0.02em",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fadeIn 1.2s ease forwards",
        "marquee": "marquee 35s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
