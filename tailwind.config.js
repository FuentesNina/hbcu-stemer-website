/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Oswald', 'sans-serif'],
        'title': ['"Open Sans"', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
        'quote': ['"Lumios Marker"']
      },
      colors: {
        'myRed': '#ff1616',
        'myGreen': '#cfff00',
        'myLightGrey': '#d9d9d9',
        'myDarkGrey': '#545454',
      },
      keyframes:{
        showMenu: {
          '0%' : {transform: 'translate(0%)'},
          '100%': {transform: 'translate(-100%)'},
        },
        hideMenu: {
          '0%': {transform: 'translate(0)'},
          '100%' : {transform: 'translate(100%)'},
        },
      },
      animation: {
        showMenu: 'showMenu 0.5s ease-out forwards',
        hideMenu: 'hideMenu 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
