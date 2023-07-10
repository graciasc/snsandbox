/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'sr-blue': '#00b4ff',
      },
      borderColor: {
        'sr-blue': '#00b4ff',
      },
      textColor: {
        'sr-blue': '#00b4ff',
      },
      fontSize: {
        'xxxs': "9px",
        'xxs': "10px",
      },
    },
  },
  plugins: [],
}

