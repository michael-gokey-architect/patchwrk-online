/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],

  plugins: [
    // require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // require('tailwindcss/aspect-ratio'),
		// require('@tailwindcss/container-queries'),
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
			'forest': {
				'body': 'white',
				'tertiary': '#FFFBEB',
				'inactive': '#FEF3C7',
				'secondary': '#B45309',
				'accent-light': '#92400E',
				'trim-light': '#92400E',
				'accent-dark': '#14532D',
				'primary': '#052E16',
				'trim-dark': '#052E16',
				'info': '#0A0A0A',
				'success': '#22C55E',
				'error': '#F97316',
				'warning': '#DC2626',
				}
		})
  ],
  theme: {
    extend: {
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



