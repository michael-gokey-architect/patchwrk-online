/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { createThemes } = require('tw-colors');
import { createThemeFonts } from './src/utils/index';

module.exports = {
  content: ["./src/**/*.{html,js}"],

  plugins: [
    // require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
    // require('tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
    // createThemes(
    //   {
    //     forest: {
    //       main: "white",
    //       tertiary: "#FFFBEB",
    //       inactive: "#FEF3C7",
    //       secondary: "#B45309",
    //       "accent-light": "#92400E",
    //       "trim-light": "#92400E",
    //       "accent-dark": "#14532D",
    //       primary: "#052E16",
    //       "trim-dark": "#052E16",
    //       info: "#0A0A0A",
    //       success: "#22C55E",
    //       error: "#F97316",
    //       warning: "#DC2626",
    //     },
    //     racer: {
    //       main: "white",
    //       tertiary: "#FAFAFA",
    //       inactive: "#E0F2FE",
    //       secondary: "#FDE047",
    //       "accent-light": "#B91C1C",
    //       "trim-light": "#B91C1C",
    //       "accent-dark": "#0EA5E9",
    //       primary: "#0284C7",
    //       "trim-dark": "#0284C7",
    //       info: "#0A0A0A",
    //       success: "#22C55E",
    //       error: "#F97316",
    //       warning: "#DC2626",
    //     },
    //     "retro-diner": {
    //       main: "white",
    //       tertiary: "#FFFBEB",
    //       inactive: "#FECDD3",
    //       secondary: "#F43F5E",
    //       "accent-light": "#FB923C",
    //       "trim-light": "#FB923C",
    //       "accent-dark": "#0D9488",
    //       primary: "#451A03",
    //       "trim-dark": "#451A03",
    //       info: "#0A0A0A",
    //       success: "#22C55E",
    //       error: "#F97316",
    //       warning: "#DC2626",
    //     },
    //   },
    //   {
    //     defaultTheme: "forest",
    //     strict: true,
    //   }
    // ),
    createThemeFonts({
      forest: {
        body: "Tenor Sans",
        display: "Merienda",
      },
      racer: {
        body: "Montserrat",
        display: "Anton",
      },
      "retro-diner": {
        body: "Montserrat",
        display: "Roboto Slab",
      },
    }),
    plugin(
      () => {},
      {
        theme: {
          extend: {
            // @ts-ignore tailwind types are broken
            fontFamily: {
              "display": ["var(--twc-body)"],
            },
          },
        },
      }
    ),
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Helvetica Neue", "sans-serif"],
    },
    extend: {
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



