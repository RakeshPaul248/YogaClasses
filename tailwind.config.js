/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],
        OpenSans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'main': {
          000: '#745a82',
          100: '#f1eff3',
          200: '#d5ceda',
          300: '#baadc1',
          400: '#9e8ca8',
          500: '#826b8f',
          600: '#685175',
          700: '#5d4868',
          800: '#513f5b',
          900: '#46364e',
          1000: '#46364e',
        }
      }
    }
  },
  plugins: [],
}
