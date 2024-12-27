/** @type {import('tailwindcss').Config} */

// some very random animations included pls ingore lol
export default {
  content: [
    "./src/index.html",
    "./src/frontend/*.{js,ts,jsx,tsx}",
    "./src/frontend/components/*.{js,ts,jsx,tsx}",
    "./src/frontend/data/*.{js,ts,jsx,tsx}",
    "./src/frontend/pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '200px',
      // => @media (min-width: 640px) { ... }

      'sm': '500px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        gradient: "gradient 3s ease infinite",
        glitch: "glitch 1s infinite",
        "fade-in": "fade-in 1.5s ease-out forwards",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
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
}