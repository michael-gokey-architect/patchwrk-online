/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],

  plugins: [
    // require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
    // require('tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
    createThemes(
      {
        light: {
          primary: "steelblue",
          secondary: "darkblue",
          base: "#F3F3F3",
        },
        dark: {
          primary: "turquoise",
          secondary: "tomato",
          base: "#4A4A4A",
        },
        forest: {
          main: "white",
          tertiary: "#FFFBEB",
          inactive: "#FEF3C7",
          secondary: "#B45309",
          "accent-light": "#92400E",
          "trim-light": "#92400E",
          "accent-dark": "#14532D",
          primary: "#052E16",
          "trim-dark": "#052E16",
          info: "#0A0A0A",
          success: "#22C55E",
          error: "#F97316",
          warning: "#DC2626",
        },
        racer: {
          main: "white",
          tertiary: "#FAFAFA",
          inactive: "#E0F2FE",
          secondary: "#FDE047",
          "accent-light": "#B91C1C",
          "trim-light": "#B91C1C",
          "accent-dark": "#0EA5E9",
          primary: "#0284C7",
          "trim-dark": "#0284C7",
          info: "#0A0A0A",
          success: "#22C55E",
          error: "#F97316",
          warning: "#DC2626",
        },
        "retro-diner": {
          main: "white",
          tertiary: "#FFFBEB",
          inactive: "#FECDD3",
          secondary: "#F43F5E",
          "accent-light": "#FB923C",
          "trim-light": "#FB923C",
          "accent-dark": "#0D9488",
          primary: "#451A03",
          "trim-dark": "#451A03",
          info: "#0A0A0A",
          success: "#22C55E",
          error: "#F97316",
          warning: "#DC2626",
        },
      },
      {
        defaultTheme: "forest",
        strict: true,
      }
    ),
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Helvetica Neue", "sans-serif"],
    },
    extend: {
      fontFamily: {
        theme1: {
          sans: ["Graphik", "sans-serif"],
          serif: ["Merriweather", "serif"],
        },
        theme2: {
          sans: ["Ropo", "sans-serif"],
          serif: ["Playfair", "serif"],
        },
        body: ["var(--font-family-body)", "sans-serif"],
        display: ["var(--font-family-display)", "serif"],
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
      },
    },
  },
};



