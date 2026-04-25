/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["selector", '[data-mode="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "960px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-raised": "var(--bg-raised)",
        "bg-sunk": "var(--bg-sunk)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-muted": "var(--ink-muted)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-ink": "var(--accent-ink)",
        highlight: "var(--highlight)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
        mono: "var(--font-mono)",
      },
      borderRadius: {
        xs: "var(--r-xs)",
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
        full: "var(--r-full)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
        swoop: "var(--ease-swoop)",
        soft: "var(--ease-soft)",
      },
    },
  },
  plugins: [],
};
