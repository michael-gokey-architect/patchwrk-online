/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { createThemes } = require('tw-colors');
import { resolveTwcConfig } from './src/utils/index';

const themeFontFamily = {
	forest: {
		body: '"Tenor Sans", sans-serif',
    display: '"Merienda", cursive',
  },
  racer: {
		body: "Montserrat",
    display: "Anton",
  },
  "retro-diner": {
		body: "Montserrat",
    display: "Roboto Slab",
  },
};

const tailwindColors = {
	patchWRK: {
		main: "white",
		tertiary: "theme('colors.neutral.50')",
		inactive: "theme('colors.blue.200')",
		secondary: "theme('colors.slate.400')",
		"accent-light": "theme('colors.slate.500')",
		"trim-light": "theme('colors.slate.500')",
		"accent-dark": "theme('colors.blue.700')",
		primary: "theme('colors.blue.900')",
		"trim-dark": "theme('colors.blue.900')",
		info: "#0a0a0a",
		success: "#22C55E",
		error: "#F97316",
		warning: "#DC2626",
	},
	nyias: {
		main: "white",
		tertiary: "theme('colors.neutral.50')",
		inactive: "theme('colors.neutral.200')",
		secondary: "theme('colors.red.400')",
		"accent-light": "theme('colors.red.500')",
		"trim-light": "theme('colors.red.500')",
		"accent-dark": "theme('colors.neutral.700')",
		primary: "theme('colors.neutral.900')",
		"trim-dark": "theme('colors.neutral.900')",
		info: "#0a0a0a",
		success: "#22C55E",
		error: "#F97316",
		warning: "#DC2626",
	},
	dragons: {
		main: "white",
		tertiary: "theme('colors.neutral.50')",
		inactive: "theme('colors.purple.200')",
		secondary: "theme('colors.yellow.400')",
		"accent-light": "theme('colors.yellow.500')",
		"trim-light": "theme('colors.yellow.500')",
		"accent-dark": "theme('colors.purple.700')",
		primary: "theme('colors.purple.900')",
		"trim-dark": "theme('colors.purple.900')",
		info: "#0a0a0a",
		success: "#22C55E",
		error: "#F97316",
		warning: "#DC2626",
	},
  grey: {
    main: "white",
    tertiary: "theme('colors.neutral.50')",
    inactive: "theme('colors.neutral.100')",
    secondary: "theme('colors.neutral.500')",
    "accent-light": "theme('colors.neutral.600')",
    "trim-light": "theme('colors.neutral.600')",
    "accent-dark": "theme('colors.neutral.800')",
    primary: "theme('colors.neutral.900')",
    "trim-dark": "theme('colors.neutral.900')",
    info: "#0a0a0a",
    success: "#22C55E",
    error: "#F97316",
    warning: "#DC2626",
  },
  forest: {
    main: "white",
    tertiary: "theme('colors.amber.50')",
    inactive: "theme('colors.amber.100')",
    secondary: "theme('colors.amber.700')",
    "accent-light": "theme('colors.amber.800')",
    "trim-light": "theme('colors.amber.800')",
    "accent-dark": "theme('colors.green.900')",
    primary: "theme('colors.green.950')",
    "trim-dark": "theme('colors.green.950')",
    info: "#0a0a0a",
    success: "#22C55E",
    error: "#F97316",
    warning: "#DC2626",
	},
	racer: {
		main: "white",
		tertiary: "theme('colors.neutral.50')",
		inactive: "theme('colors.sky.100')",
		secondary: "theme('colors.yellow.300')",
		"accent-light": "theme('colors.red.700')",
		"trim-light": "theme('colors.red.700')",
		"accent-dark": "theme('colors.sky.500')",
		primary: "theme('colors.sky.600')",
		"trim-dark": "theme('colors.sky.600')",
		info: "#0A0A0A",
		success: "#22C55E",
		error: "#F97316",
		warning: "#DC2626",
	},
	"retro-diner": {
		main: "white",
		tertiary: "theme('colors.amber.50')",
		inactive: "theme('colors.rose.200')",
		secondary: "theme('colors.rose.500')",
		"accent-light": "theme('colors.orange.400')",
		"trim-light": "theme('colors.orange.400')",
		"accent-dark": "theme('colors.teal.600')",
		primary: "theme('colors.amber.950')",
		"trim-dark": "theme('colors.amber.950')",
		info: "#0A0A0A",
		success: "#22C55E",
		error: "#F97316",
		warning: "#DC2626",
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