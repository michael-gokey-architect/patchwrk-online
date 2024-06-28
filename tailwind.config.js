/** @type {import('tailwindcss').Config} */
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
          light: { 
             'primary': 'steelblue',
             'secondary': 'darkblue',
             'brand': '#F3F3F3',
          },
          dark: { 
            'primary': 'turquoise',
            'secondary': 'tomato',
            'brand': '#4A4A4A',
         },
         forest: { 
          'primary': '2A9D8F',
          'secondary': 'E9C46A',
          'brand': '#F3264653F3F3',
          },
          ThemeRedStone: { 
            'body': 'White',
            'tertiary'  : 'Neutral 200',
            'primary': 'Stone 900',
            'secondary': 'Red 400',
            'brand': '#Red 500',
          }
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



