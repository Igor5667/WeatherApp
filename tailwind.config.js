/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-background": "linear-gradient(110deg, #48e4b8, #414365)",
      },
    },
  },
  plugins: [],
};
