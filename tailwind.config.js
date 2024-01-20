/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight:{
        'screen-100': 'calc(100vh - 128px)'
      },
      textColor: {
        'primary': '#e0e4ce',
      },
      backgroundColor:{
        'primary': '#114d4d',
        'secondary': '#6e9987',
        'tertiary': '#e0e4ce',
        'nav-footer': '#2d3839'
      }
    },
  },
  plugins: [],
}