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
        'text-error': 'hsl(0, 100%, 67%)',
        'date-text': 'hsl(0, 1%, 44%)',
      },
    },
  },
  plugins: [],
}

