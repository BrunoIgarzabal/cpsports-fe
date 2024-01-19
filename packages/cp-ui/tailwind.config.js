const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: {
        color: '#1D3080',
        contrast: '#fff',
        hover: {
          color: '#001D69',
          contrast: '#fff'
        },
      },
      secondary: {
        color: '#BF2B42',
        contrast: '#fff',
        hover: {
          color: '#A3002E',
          contrast: '#fff'
        },
      }
    }
  },
  plugins: []
}
