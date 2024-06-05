/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'theme1': {
          'primary': '#1DA1F2',
          'secondary': '#14171A',
          'tertiary': '#657786',
          'quaternary': '#AAB8C2',
          'quinary': '#E1E8ED',
          'senary': '#F5F8FA',
          'label-titles': '#000000',
          'font-color': '#ffffff'
        },
        'theme2': {
          'primary': '#FF6347',
          'secondary': '#8B0000',
          'tertiary': '#B22222',
          'quaternary': '#FF4500',
          'quinary': '#FFA07A',
          'senary': '#FF7F50',
          'label-titles': '#000000',
          'font-color': '#ffffff'
        }
      },
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
},
variants: {},
plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  require('tailwind-hamburgers'),
],
}
