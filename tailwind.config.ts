import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F33",
          deep: "#071525",
          mid: "#16324D",
          soft: "#2A4A66",
        },
        teal: {
          DEFAULT: "#1B6B6A",
          dark: "#145251",
          light: "#2A8A88",
          mist: "#E4F2F1",
        },
        gold: {
          DEFAULT: "#C9A227",
          deep: "#A6841A",
          soft: "#E4C878",
          mist: "#F7EFD4",
        },
        cream: {
          DEFAULT: "#F6F1E8",
          warm: "#EFE6D6",
          paper: "#FFFCF7",
        },
        ink: {
          DEFAULT: "#1A2332",
          muted: "#5C6B7A",
          faint: "#8A96A3",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 31, 51, 0.04), 0 12px 32px rgba(11, 31, 51, 0.06)",
        lift: "0 8px 28px rgba(11, 31, 51, 0.12)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
