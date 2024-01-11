/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // colors: {
    //   transparent: 'transparent',
    //   'background':'#FBFAF8',
    //  'Primary':'#E7DECD',
    //  'Secondary':'#0A122A',
    //  'Tertiary':'#B10F2E',
    //  'Data':'#DE7C5A',
    //  'Chone':'#280000',

    //  //Darkmode
    //  'black-mode':'#000000',
    //  'white':'#ffff',
    //  'gray':'#d9d9d9',
    // },
    fontFamily: {
      'roboto': ['Roboto Condensed', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
   
      'playfair': ['Playfair Display', 'sans-serif'],

     
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(92deg, rgba(255,227,169,1) 0%, rgba(255,140,140,1) 2%, rgba(255,93,93,1) 84%)',
      },
      
    },
  },
  plugins: [],
}
