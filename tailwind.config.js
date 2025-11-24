/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F61", // salon primary color (example)
        secondary: "#FFD700", // accent color
        accent: "#6B5B95", // secondary accent
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // modern font for salon
        heading: ["Playfair Display", "serif"], // elegant headings
      },
    },
  },
  plugins: [],
};
