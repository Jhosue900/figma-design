/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },


      fontFamily: {
        aston: ['Astonpoliz', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      colors: {
        'event-bg': 'rgba(153, 160, 174, 0.1)',
        'soft-gray': '#CACFD8',
      },

      borderRadius: {
        'radius-md': '12px',
      },

      letterSpacing: {
        'tight-custom': '-0.04em',
      }
    },
  },
  plugins: [],
}