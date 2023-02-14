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
    },
  },
  plugins: [],
}
