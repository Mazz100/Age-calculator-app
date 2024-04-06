/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {


    fontFamily: {
      bodyFont: ['Poppins', 'sans-serif', 'Arial'],
    },

    extend: {
      colors: {
        'primary-purple': 'hsl(259, 100%, 65%)',
        'secondary-black': 'hsl(0, 0%, 8%)',
        'error': 'hsl(0, 100%, 67%)',
        'date-text': 'hsl(0, 0%, 94%)',
      },

      borderRadius: {
        '4xl': '2rem'/* 32px */,
        '5xl': '5.75rem'/* 92px */,
      },

      fontSize:{
        'xxs': '0.625rem'/* 10px */,
        'mini': '0.5rem' /* 8px */
      }
    },
  },
  plugins: [],
}

