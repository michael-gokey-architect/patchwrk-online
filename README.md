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

```css
         forest: {
          'body': 'White',
          'tertiary'  : 'Amber 50',
          'inactive': 'Amber 100',
          'secondary': 'Amber 700',
          'accent-light': 'Amber 800',
          'trim-light': 'Amber 800',
          'accent-dark': 'Green 900',
          'primary': 'Green 950',
          'trim-dark': 'Green 950',
          'info': 'Netural 950',
          'success': '22C55E',
          'error': 'F97316',
          'warning': 'DC2626',
         },
         leftTurnRacers: {
            'body': 'White',
            'tertiary'  : 'Netural 50',
            'inactive': 'Sky 100',
            'secondary': 'Yellow 300',
            'accent-light': 'Red 700',
            'trim-light': 'Red 700',
            'accent-dark': 'Sky 500',
            'primary': 'Sky 600',
            'trim-dark': 'Sky 600',
            'info': 'Netural 950',
            'success': '22C55E',
            'error': 'F97316',
            'warning': 'DC2626',
         },
         retroDinner: {
            'body': 'White',
            'tertiary'  : 'Netural 50',
            'inactive': 'Sky 100',
            'secondary': 'Yellow 300',
            'accent-light': 'Red 700',
            'trim-light': 'Red 700',
            'accent-dark': 'Sky 500',
            'primary': 'Sky 600',
            'trim-dark': 'Sky 600',
            'info': 'Netural 950',
            'success': '22C55E',
            'error': 'F97316',
            'warning': 'DC2626',
         }
```



```javascript

'patchWRK': {
	'body': 'White',
	'tertiary'  : 'Netural 50',
	'inactive': 'Blue 200',
	'secondary': 'Slate 400',
	'accent-light': 'Slate 500',
	'trim-light': 'Slate 500',
	'accent-dark': 'Blue 700',
	'primary': 'Blue 900',
	'trim-dark': 'Blue 900',
	'info': 'Netural 950',
	'success': '22C55E',
	'error': 'F97316',
	'warning': 'DC2626',
},

'nyias': {
	'body': 'White',
	'tertiary'  : 'Netural 50',
	'inactive': 'Netural 200',
	'secondary': 'Red 400',
	'accent-light': 'Red 500',
	'trim-light': 'Red 500',
	'accent-dark': 'Netural 700',
	'primary': 'Netural 900',
	'trim-dark': 'Netural 900',
	'info': 'Netural 950',
	'success': '22C55E',
	'error': 'F97316',
	'warning': 'DC2626',
},

'dragons': {
	'body': 'White',
	'tertiary'  : 'Netural 50',
	'inactive': 'Purple 200',
	'secondary': 'Yellow 400',
	'accent-light': 'Yellow 500',
	'trim-light': 'Yellow 500',
	'accent-dark': 'Purple 700',
	'primary': 'Purple 900',
	'trim-dark': 'Purple 900',
	'info': 'Netural 950',
	'success': '22C55E',
	'error': 'F97316',
	'warning': 'DC2626',
},

```


