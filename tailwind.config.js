/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
import { resolveTwcConfig } from './src/utils/index';

const themeFontFamily = {
  patchWrk: {
    body: '"Montserrat", sans-serif',
    display: '"Titan One", sans-serif',
  },
  nyias: {
    body: '"Montserrat", sans-serif',
    display: '"Titan One", sans-serif',
  },
  dragons: {
    body: '"Montserrat", sans-serif',
    display: '"Titan One", sans-serif',
  },
  grey: {
    body: '"Montserrat", sans-serif',
    display: '"Titan One", sans-serif',
  },
  forest: {
    body: '"Tenor Sans", sans-serif',
    display: '"Merienda", cursive',
  },
  racer: {
    body: '"Montserrat", sans-serif',
    display: '"Anton", sans-serif',
  },
  retroDiner: {
    body: '"Montserrat", sans-serif',
    display: '"Roboto Slab", serif',
  },
  duke: {
    body: '"Open Sans", sans-serif',
    display: '"EB Garamond", serif',
  },
  raven: {
    body: '"Montserrat", sans-serif',
    display: '"Anton", sans-serif',
  },
  slateGreen: {
    body: '"Mulish", sans-serif',
    display: '"Chakra Petch", sans-serif',
  },
  roseAmber: {
    body: '"Quicksand", sans-serif',
    display: '"Satisfy", cursive',
  },
  violetSky: {
    body: '"Montserrat", sans-serif',
    display: '"Delius", cursive',
  },
};

const tailwindColors = {
  patchWrk: {
    main: "#ffffff",
    tertiary: "#f9fafb",
    inactive: "#bfdbfe",
    secondary: "#94a3b8",
    accentLight: "#64748b",
    trimLight: "#64748b",
    accentDark: "#1d4ed8",
    primary: "#1e3a8a",
    trimDark: "#1e3a8a",
    info: "#0a0a0a",
		infoLight: "#ffffff",
    success: "#22c55e",
    error: "#f97316",
    warning: "#dc2626",
  },
  nyias: {
    main: "#ffffff",
    tertiary: "#f9fafb",
    inactive: "#e5e5e5",
    secondary: "#f87171",
    accentLight: "#ef4444",
    trimLight: "#ef4444",
    accentDark: "#404040",
    primary: "#171717",
    trimDark: "#171717",
    info: "#0a0a0a",
		infoLight: "#ffffff",
    success: "#22c55e",
    error: "#f97316",
    warning: "#dc2626",
  },
  dragons: {
    main: "#ffffff",
    tertiary: "#f9fafb",
    inactive: "#e9d5ff",
    secondary: "#facc15",
    accentLight: "#eab308",
    trimLight: "#eab308",
    accentDark: "#7e22ce",
    primary: "#581c87",
    trimDark: "#581c87",
    info: "#0a0a0a",
		infoLight: "#ffffff",
    success: "#22c55e",
    error: "#f97316",
    warning: "#dc2626",
  },
  grey: {
    main: "#ffffff",
    tertiary: "#fafafa",
    inactive: "#f5f5f5",
    secondary: "#737373",
    accentLight: "#525252",
    trimLight: "#525252",
    accentDark: "#262626",
    primary: "#171717",
    trimDark: "#171717",
    info: "#0a0a0a",
		infoLight: "#ffffff",
    success: "#22c55e",
    error: "#f97316",
    warning: "#dc2626",
  },
  forest: {
    main: "#ffffff",
    tertiary: "#FFFBEB",
    inactive: "#FEF3C7",
    secondary: "#b45309",
    accentLight: "#92400e",
    trimLight: "#92400e",
    accentDark: "#14532d",
    primary: "#052e16",
    trimDark: "#052e16",
    info: "#0a0a0a",
		infoLight: "#ffffff",
    success: "#22c55e",
    error: "#f97316",
    warning: "#dc2626",
  },
  racer: {
    main: "#ffffff",
    tertiary: "#fafafa",
    inactive: "#e0f2fe",
    secondary: "#fde047",
    accentLight: "#b91c1c",
    trimLight: "#b91c1c",
    accentDark: "#0ea5e9",
    primary: "#0284c7",
    trimDark: "#0284c7",
    info: "#0a0a0a",
		infoLight: "#ffffff",
    success: "#22c55e",
    error: "#f97316",
    warning: "#dc2626",
  },
  retroDiner: {
    main: "#ffffff",
    tertiary: "#fffbeb",
    inactive: "#fecdd3",
    secondary: "#f43f5e",
    accentLight: "#fb923c",
    trimLight: "#fb923c",
    accentDark: "#0d9488",
    primary: "#451a03",
    trimDark: "#451a03",
    info: "#0a0a0a",
		infoLight: "#ffffff",
    success: "#22c55e",
    error: "#f97316",
    warning: "#dc2626",
  },
  duke: {
    main: "#ffffff",
    tertiary: "#fffbeb",
    inactive: "#fef3c7",
    secondary: "#fcd34d",
    accentLight: "#fcd34d",
    trimLight: "#fcd34d",
    accentDark: "#00539b",
    primary: "#012169",
    trimDark: "#012169",
    info: "#0a0a0a",
		infoLight: "#ffffff",
    success: "#22c55e",
    error: "#f97316",
    warning: "#dc2626",
  },
  raven: {
    main: "#ffffff",
    tertiary: "#fafafa",
    inactive: "#fdf2f8",
    secondary: "#fbcfe8",
    accentLight: "#f9a8d4",
    trimLight: "#f9a8d4",
    accentDark: "#1c1917",
    primary: "#0c0a09",
    trimDark: "#0c0a09",
    info: "#0a0a0a",
		infoLight: "#ffffff",
    success: "#22c55e",
    error: "#f97316", 
    warning: "#dc2626",
  },
  slateGreen: {
    main: "#ffffff",
    tertiary: "#fafafa",
    inactive: "#d9f99d",
    secondary: "#a3a635",
    accentLight: "#84cc16",
    trimLight: "#84cc16",
    accentDark: "#334155",
    primary: "#0f172a",
    trimDark: "#0f172a",
    info: "#0a0a0a",
		infoLight: "#ffffff",
    success: "#22c55e",
    error: "#f97316",
    warning: "#dc2626",
  },
  roseAmber: {
    main: "#ffffff",
    tertiary: "#fafafa",
    inactive: "#fecdd3",
    secondary: "#fbbf24",
    accentLight: "#f59e0b",
    trimLight: "#f59e0b",
    accentDark: "#be123c",
    primary: "#881337",
    trimDark: "#881337",
    info: "#0a0a0a",
		infoLight: "#ffffff",
    success: "#22c55e",
    error: "#f97316",
    warning: "#dc2626",
  },
  violetSky: {
    main: "#ffffff",
    tertiary: "#fafafa",
    inactive: "#ddd6fe",
    secondary: "#38bdf8",
    accentLight: "#0ea5e9",
    trimLight: "#0ea5e9",
    accentDark: "#5b21b6",
    primary: "#4c1d95",
    trimDark: "#4c1d95",
    info: "#0a0a0a",
		infoLight: "#ffffff",
    success: "#22c55e",
    error: "#f97316",
    warning: "#dc2626",
  },
};

const resolvedColors = resolveTwcConfig(tailwindColors, { styleType: 'colors' })
const resolvedFonts = resolveTwcConfig(themeFontFamily, { styleType: 'fonts' })

module.exports = {
  content: ["./src/**/*.{html,js}"],

  plugins: [
    // require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
    // require('tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
		// Based off of tw-colors plugin
		plugin(
			({ addUtilities, addVariant }) => {
				// add the css variables to "@layer utilities" because:
				// - The Base layer does not provide intellisense
				// - The Components layer might get overriden by tailwind default styles in case of name clash
				addUtilities(resolvedColors.utilities);
				addUtilities(resolvedFonts.utilities);
				// add the theme as variant e.g. "theme-[name]:text-2xl"
				resolvedColors.variants.forEach(({ name, definition }) =>
					addVariant(name, definition)
				);
			},
			// extend the styles config
			{
				theme: {
					extend: {
						// @ts-ignore tailwind types are broken
						colors: resolvedColors.styles,
						fontFamily: resolvedFonts.styles,
					},
				},
			}
		),
  ],
	theme: {
		fontFamily: {
			sans: ["Montserrat"]
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