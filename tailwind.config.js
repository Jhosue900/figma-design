/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      backgroundImage: {
        'border-grad': "linear-gradient(90deg, #DA3731 0%, #A84E59 10%, #56759C 20%, #3883B5 30%, #1096D6 40%, #069BDE 50%, #039DE1 60%, #9EB35D 80%, #E9B039 90%, #F7B033 100%)",
      },

      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'shine': 'shine 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'lamp-swing': 'lamp-swing 3s ease-in-out infinite',
        'light-pulse': 'light-pulse 2s infinite',

        'blob': 'blob 10s infinite',
      },

      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },


        'lamp-swing': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'light-pulse': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1) translateX(-50%)' },
          '50%': { opacity: 0.9, transform: 'scale(1.1) translateX(-50%)' },
        },

        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },

      },

      fontFamily: {
        aston: ['Astonpoliz', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      colors: {
        'event-bg': 'rgba(153, 160, 174, 0.1)',
        'soft-gray': '#CACFD8',

        'agency-red': '#DA3731',
        'agency-blue': '#1096D6',
        'agency-green': '#9EB35D',
        'agency-yellow': '#F7B033',
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