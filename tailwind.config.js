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
        showmenu: {
          '0%' : {transform: 'translate(100%)'},
          '100%': {transform: 'translate(0)'}
        },
        hidemenu: {
          '100%' : {transform: 'translate(100%)'},
          '0%': {transform: 'translate(0)'}
        },
      },
      animation: {
        showmenu: 'showmenu 0.5s ease-out',
        hidemenu: 'hidemenu 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
