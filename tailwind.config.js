/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],

  plugins: [
    // require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
    // require('tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
  ],
  variants: {},

  theme: {
    // extend: {},
    extend: {
      plugins: [
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
            }
       }, {
          produceThemeClass: (themeName) => `theme-${themeName}`
       })
      ],
      fontFamily: {
        'theme1': {
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        'theme2': {
          sans: ['Ropo', 'sans-serif'],
          serif: ['Playfair', 'serif'],
        },

      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      },
    }
  }
}



