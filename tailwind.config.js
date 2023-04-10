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
        fullLeft: {
          '0%': {transform: 'translate(-100%)'},
          '100%' : {transform: 'translate(100%)'},
        },
        fullRight: {
          '0%': {transform: 'translate(100%)'},
          '100%' : {transform: 'translate(-100%)'},
        },
        halfLeft: {
          '0%': {transform: 'translate(100%)'},
          '100%' : {transform: 'translate(0%)'},
        },
        secondLeft: {
          '0%': {transform: 'translate(0%)'},
          '100%' : {transform: 'translate(-100%)'},
        },
        halfRight: {
          '0%': {transform: 'translate(-100%)'},
          '100%' : {transform: 'translate(0%)'},
        },
        secondRight: {
          '0%': {transform: 'translate(0%)'},
          '100%' : {transform: 'translate(100%)'},
        },
      },
      animation: {
        showMenu: 'showMenu 0.5s ease-out forwards',
        hideMenu: 'hideMenu 0.5s ease-out forwards',
        fullLeft: 'fullLeft 0.5s ease-out forwards',
        fullRight: 'fullRight 0.5s ease-out forwards',
        halfRight: 'halfRight 0.5s ease-out forwards',
        halfLeft: 'halfLeft 0.5s ease-out forwards',
        secondLeft: 'secondLeft 0.5s ease-out forwards',
        secondRight: 'secondRight 0.5s ease-out forwards',
      },
      screens: {
        'impact-lg': '1145px',
      }
    },
  },
  plugins: [],
};
