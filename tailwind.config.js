/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'shine': 'shine 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'lamp-swing': 'lamp-swing 3s ease-in-out infinite',
        'light-pulse': 'light-pulse 2s infinite',
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
        }

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