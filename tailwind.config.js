/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Ensure dark mode is enabled via the "class" strategy
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rosarivo: ["Rosarivo", "serif"],
         
         ramaraja: ['Ramaraja', 'serif'], 
      },
    },
  },
  plugins: [],
};
