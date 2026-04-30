/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat
        dosis: ['Dosis', 'sans-serif'],           // Add Dosis
        clashDisplay: ['Clash Display', 'sans-serif'],           // Add Dosis
        unica: ['unica', 'sans-serif'], 
        madeTommyOutline: ['MADE TOMMY Outline', 'sans-serif']          // Add Dosis
      },
      colors: {
        // Define your custom color
        customPurple: {
          light: '#FF26B9',
          DEFAULT: '#D434FE',
          dark: '#903AFF',
          darker: '#140d27',
        }, 
      },
      screens: {
        // 'xl': '1512px', 
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.3, transform: 'scale(0.8)' },
        }
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

