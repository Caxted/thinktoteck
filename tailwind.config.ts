import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary":    "#0A0B0E",
        "bg-surface":    "#111318",
        "bg-elevated":   "#1A1E27",
        "accent-orange": "#F5A623",
        "accent-blue":   "#4A7FA5",
        "text-primary":  "#F0F2F6",
        "text-secondary":"#8A95A8",
        "text-muted":    "#4E5668",
      },
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        heading:  ["'Syne'", "sans-serif"],
        body:     ["'DM Sans'", "sans-serif"],
        mono:     ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "blur-up": "blurUp 0.6s ease forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        blurUp: {
          from: { opacity: "0", transform: "translateY(30px)", filter: "blur(8px)" },
          to:   { opacity: "1", transform: "translateY(0)",    filter: "blur(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(245,166,35,0.15)" },
          "50%":      { boxShadow: "0 0 40px rgba(245,166,35,0.30)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(8px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
