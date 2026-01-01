/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EE1C27',
        dark: '#0A0A0A',
        offwhite: '#F5F5F5',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
