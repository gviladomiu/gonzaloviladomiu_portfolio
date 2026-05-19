import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Off-white surface + monochrome grays + single accent
        surface: {
          DEFAULT: "#FAFAF9",  // page bg (Hero, Education)
          alt: "#E8E8E8",      // alt section bg (Experience, Stack)
          panel: "#FFFFFF",    // cards
        },
        ink: {
          DEFAULT: "#0A0A0A",
          900: "#0A0A0A",
          800: "#1A1A1A",
          700: "#2E2E2E",
          600: "#4A4A4A",
          500: "#6B6B6B",
          400: "#8B8B8B",
          300: "#B0B0B0",
          200: "#D4D4D4",
          100: "#E8E8E8",
          50:  "#F2F2F2",
        },
        accent: {
          DEFAULT: "#2596BE",
          dark: "#1F7FA3",
          soft: "#E5F3F8",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        snug: "-0.018em",
        tight: "-0.025em",
        tighter: "-0.035em",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
