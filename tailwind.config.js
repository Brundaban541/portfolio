/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
   fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
   },
   container: {
      padding: {
         DEFAULT: '15px',
      },
   },
   screen: {
      'sm': '640px',
      'md': '768px',
      'lg': '976px',
      'xl': '1280px',
   },
    extend: {
      colors: {
         primary: '#0a0a0a',
         accent: '#eda951',
         typo: '#8809C3',
         header: '#C5FAD5'
      },
      backgroundImage: {
         site: "url('./assets/site-bg1.jpg')",
         abbg: "url('./assets/bg3.png')",
         about: "url('./assets/textbg1.jpg')",
      },
      screens: {
         xs: '360px',
         xxl: '2100px'
      }
    },
  },
  plugins: [
   require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

