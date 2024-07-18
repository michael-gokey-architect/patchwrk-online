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
    "accentLight": "theme('colors.yellow.500')",
    "trimLight": "theme('colors.yellow.500')",
    "accentDark": "theme('colors.purple.700')",
    primary: "theme('colors.purple.900')",
    "trimDark": "theme('colors.purple.900')",
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
    "accentLight": "theme('colors.neutral.600')",
    "trimLight": "theme('colors.neutral.600')",
    "accentDark": "theme('colors.neutral.800')",
    primary: "#FAFAFA", // If primary is a HEX here ...
    "trimDark": "theme('colors.neutral.900')",
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
    "accentLight": "theme('colors.amber.800')",
    "trimLight": "theme('colors.amber.800')",
    "accentDark": "theme('colors.green.900')",
    primary: "theme('colors.green.950')", // ... but a theme() here. Primary now expects theme()
    "trimDark": "theme('colors.green.950')",
    info: "#0a0a0a",
    success: "#22C55E",
    error: "#F97316",
    warning: "#DC2626",
},
```


