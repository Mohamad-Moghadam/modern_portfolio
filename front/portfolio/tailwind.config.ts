import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        garden: {
          950: "#060c08",
          900: "#0a1410",
          800: "#0f1f16",
          700: "#163024",
          600: "#1e4a36",
          500: "#10b981",
          400: "#34d399",
          300: "#6ee7b7",
          200: "#a7f3d0",
          100: "#d1fae5",
          50: "#ecfdf5",
        },
        cyber: {
          500: "#06b6d4",
          400: "#22d3ee",
          300: "#67e8f9",
        },
        vine: {
          500: "#a855f7",
          400: "#c084fc",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "blink": "blink 1s step-end infinite",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        "glow-pulse": "glowPulse 5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.5)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "0.6", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;