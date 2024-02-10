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
        'primary': '#ffffff',
        'secondary': '#6e9987',
        'tertiary': '#114d4d',  
      },
      backgroundColor:{
        'primary': '#114d4d',
        'secondary': '#6e9987',
        'tertiary': '#ffffff',
        'nav-footer': '#2d3839'
      },
      width:{
        '100': '400px'
      },
      height:{
        '100': '400px'
      },
    },
  },
  plugins: [],
}