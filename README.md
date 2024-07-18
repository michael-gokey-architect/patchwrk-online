# PatchwrkOnline


http://patchwrk.biotool.online

TODO:Robyne
testing


## Tailwind

- npm install -D @tailwindcss/typography
- npm install -D tailwindcss-aspect-ratio
- npm install  -D tailwindcss-container-query


going to try to create aother perfect page, and then get themes working


https://www.npmjs.com/package/tw-colors

https://github.com/L-Blondy/tw-colors

**SOME NOTES ABOUT THEMES**

**A Typo in the theme() will only break that theme.**
```css
dragons: {
    main: "white",
    tertiary: "theme('colors.neutral.50')",
    inactive: "theme('colors.purple.290')", //purple.290 isn't a tailwind color
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
```

**Keys are deduped and utilities will look for the most recent value type. Ex. Primary will look for theme() instead of a hex. The grey theme will break.**
```css
grey: {
    main: "white",
    tertiary: "theme('colors.neutral.50')",
    inactive: "theme('colors.neutral.100')",
    secondary: "theme('colors.neutral.500')",
    "accent-light": "theme('colors.neutral.600')",
    "trim-light": "theme('colors.neutral.600')",
    "accent-dark": "theme('colors.neutral.800')",
    primary: "#FAFAFA", // If primary is a HEX here ...
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
    primary: "theme('colors.green.950')", // ... but a theme() here. Primary now expects theme()
    "trim-dark": "theme('colors.green.950')",
    info: "#0a0a0a",
    success: "#22C55E",
    error: "#F97316",
    warning: "#DC2626",
},
```


