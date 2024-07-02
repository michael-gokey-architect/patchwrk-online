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


```javascript
      createThemes({
         'light': { 
            'primary': 'steelblue',
            'secondary': 'darkblue',
            'base': '#F3F3F3',
         },
         'dark': { 
            'primary': 'turquoise',
            'secondary': 'tomato',
            'base': '#4A4A4A',
         },
      }, {
         produceThemeClass: (themeName) => `theme-${themeName}`
      })
```
