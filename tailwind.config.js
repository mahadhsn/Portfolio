/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: [
    "./src/index.html",
    "./src/frontend/*.{js,ts,jsx,tsx}",
    "./src/frontend/components/*.{js,ts,jsx,tsx}",
    "./src/frontend/data/*.{js,ts,jsx,tsx}",
    "./src/frontend/pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "200px",
      sm: "500px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bglight: "rgb(var(--bglight) / <alpha-value>)",
        bgdark: "rgb(var(--bgdark) / <alpha-value>)",

        secondarybglight: "rgb(var(--secondarybglight) / <alpha-value>)",
        secondarybgdark: "rgb(var(--secondarybgdark) / <alpha-value>)",

        textlight: "rgb(var(--textlight) / <alpha-value>)",
        textdark: "rgb(var(--textdark) / <alpha-value>)",

        primarylight: "rgb(var(--primarylight) / <alpha-value>)",
        primarydark: "rgb(var(--primarydark) / <alpha-value>)",

        secondarylight: "rgb(var(--secondarylight) / <alpha-value>)",
        secondarydark: "rgb(var(--secondarydark) / <alpha-value>)",

        accentlight: "rgb(var(--accentlight) / <alpha-value>)",
        accentdark: "rgb(var(--accentdark) / <alpha-value>)",

        accenthoverlight: "rgb(var(--accenthoverlight) / <alpha-value>)",
        accenthoverdark: "rgb(var(--accenthoverdark) / <alpha-value>)",

        borderlight: "rgb(var(--borderlight) / <alpha-value>)",
        borderdark: "rgb(var(--borderdark) / <alpha-value>)",

        errorlight: "rgb(var(--errorlight) / <alpha-value>)",
        errordark: "rgb(var(--errordark) / <alpha-value>)",
      },
      animation: {
        bop: "bop 2s ease-in-out infinite",
        gradient: "gradient 3s ease infinite",
        glitch: "glitch 1s infinite",
        "fade-in": "fade-in 1.5s ease-out forwards",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        bop: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "10%": { transform: "translate(-5px, 5px)" },
          "20%": { transform: "translate(-5px, -5px)" },
          "30%": { transform: "translate(5px, 5px)" },
          "40%": { transform: "translate(5px, -5px)" },
          "50%": { transform: "translate(-5px, 5px)" },
          "60%": { transform: "translate(-5px, -5px)" },
          "70%": { transform: "translate(5px, 5px)" },
          "80%": { transform: "translate(5px, -5px)" },
          "90%": { transform: "translate(-5px, 5px)" },
          "100%": { transform: "translate(0)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
