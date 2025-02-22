/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage :{
        'airplan' : "url('/img/airplane.png)",
      }
    },
  },
  plugins: [],
}

