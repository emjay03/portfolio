/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'background':'#FBFAF8',
     'Primary':'#E7DECD',
     'Secondary':'#0A122A',
     'Tertiary':'#B10F2E',
     'Data':'#DE7C5A',
     'Chone':'#280000',

     //Darkmode
     'black-mode':'#000000',
     'white':'#ffff',
     'gray':'#d9d9d9',
    },
    extend: {
      
    },
  },
  plugins: [],
}
