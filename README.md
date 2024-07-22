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

## Theme Usage

`npm install color`  
`npm install flat`  
`npm i validate-color --save`  

./src/app/core/plugins/theme.ts
Create theme.ts file
Copy and paste the theme.ts file from connections into theme.ts

tailwind.config.js

```diff
+  const plugin = require("tailwindcss/plugin");
+      import { resolveTwcConfig } from './src/app/core/plugins/theme.ts';

+  const themeFontFamily = {
+      grey: {
+          body: '"Montserrat", sans-serif',
+          display: '"Titan One", sans-serif',
+      },
+  }

+  const tailwindColors = {
+      grey: {
+          main: "#ffffff",
+          tertiary: "#fafafa",
+          inactive: "#f5f5f5",
+          secondary: "#737373",
+          accentLight: "#525252",
+          trimLight: "#525252",
+          accentDark: "#262626",
+          primary: "#171717",
+          trimDark: "#171717",
+          info: "#0a0a0a",
+          infoLight: "#ffffff",
+          success: "#22c55e",
+          error: "#f97316",
+          warning: "#dc2626",
+      },
+  }

+  const resolvedColors = resolveTwcConfig(tailwindColors, { styleType: 'colors' })
+  const resolvedFonts = resolveTwcConfig(themeFontFamily, { styleType: 'fonts' })

   module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
       fontFamily: {
           sans: ["Montserrat"]
       },
       extend: {
-          colors: {
-              main: "#ffffff",
-              tertiary: "#fafafa",
-              inactive: "#f5f5f5",
-              secondary: "#737373",
-              accentLight: "#525252",
-              trimLight: "#525252",
-              accentDark: "#262626",
-              primary: "#171717",
-              trimDark: "#171717",
-              info: "#0a0a0a",
-              infoLight: "#ffffff",
-              success: "#22c55e",
-              error: "#f97316",
-              warning: "#dc2626", 
-          }
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
   plugins: [
       // require('@tailwindcss/forms'),
       require("@tailwindcss/typography"),
       // require('tailwindcss/aspect-ratio'),
       // require('@tailwindcss/container-queries'),
+      // Based off of tw-colors plugin
+      plugin(
+          ({ addUtilities, addVariant }) => {
+              // add the css variables to "@layer utilities" because:
+              // - The Base layer does not provide intellisense
+              // - The Components layer might get overriden by tailwind default styles in case of name clash
+                  addUtilities(resolvedColors.utilities);
+                  addUtilities(resolvedFonts.utilities);

+                  // add the theme as variant e.g. "theme-[name]:text-2xl"
+                  resolvedColors.variants.forEach(({ name, definition }) =>
+                      addVariant(name, definition)
+                  );
+              },
+              // extend the styles config
+              {
+                  theme: {
+                      extend: {
+                      // @ts-ignore tailwind types are broken
+                          colors: resolvedColors.styles,
+                          fontFamily: resolvedFonts.styles,
+                      },
+                  },
+              }
+          ),
       ],
   };
```

**CAUTION** When using Tailwind colors, a typo in theme() will only break that theme.
```css
dragons: {
    main: "white",
    tertiary: "theme('colors.neutral.50')",
    inactive: "theme('colors.purple.290')", //purple.290 isn't a tailwind color
    secondary: "theme('colors.yellow.400')",
    accentLight: "theme('colors.yellow.500')",
  	trimLight: "theme('colors.yellow.500')",
    accentDark: "theme('colors.purple.700')",
    primary: "theme('colors.purple.900')",
    trimDark: "theme('colors.purple.900')",
    info: "#0a0a0a",
    success: "#22C55E",
    error: "#F97316",
    warning: "#DC2626",
},
```

**CAUTION** Keys are deduped and utilities will look for the most recent value type. Ex. Primary will look for theme() instead of a hex. The grey theme will break.
```css
grey: {
    main: "white",
    tertiary: "theme('colors.neutral.50')",
    inactive: "theme('colors.neutral.100')",
    secondary: "theme('colors.neutral.500')",
    accentLight: "theme('colors.neutral.600')",
    trimLight: "theme('colors.neutral.600')",
    accentDark: "theme('colors.neutral.800')",
    primary: "#FAFAFA", // If primary is a HEX here ...
    trimDark: "theme('colors.neutral.900')",
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
    accentLight: "theme('colors.amber.800')",
    trimLight: "theme('colors.amber.800')",
    accentDark: "theme('colors.green.900')",
    primary: "theme('colors.green.950')", // ... but a theme() here. Primary now expects theme()
    trimDark: "theme('colors.green.950')",
    info: "#0a0a0a",
    success: "#22C55E",
    error: "#F97316",
    warning: "#DC2626",
},
```

Apply `class="grey"` or `data-theme=grey` as high up as possible, preferably in the `<body>` 

```diff
-  <body>
+  <body data-theme='grey'>
```

**Adding more themes and fonts**
tailwind.config.js
```diff
  const themeFontFamily = {
      grey: {
          body: '"Montserrat", sans-serif',
          display: '"Titan One", sans-serif',
      },
+     patchWrk: {
+         body: '"Montserrat", sans-serif',
+         display: '"Titan One", sans-serif',
+     },
  }

  const tailwindColors = {
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
+     patchWrk: {
+         main: "#ffffff",
+         tertiary: "#f9fafb",
+         inactive: "#bfdbfe",
+         secondary: "#94a3b8",
+         accentLight: "#64748b",
+         trimLight: "#64748b",
+         accentDark: "#1d4ed8",
+         primary: "#1e3a8a",
+         trimDark: "#1e3a8a",
+         info: "#0a0a0a",
+         infoLight: "#ffffff",
+         success: "#22c55e",
+         error: "#f97316",
+         warning: "#dc2626",
+     },
  }
```


