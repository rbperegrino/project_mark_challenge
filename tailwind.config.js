/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,scss,ts}",
  ],
  theme: {
    extend: {
      fontFamily              : {
        archivo: '"Archivo", "sans-serif"',
        archivonarrow: '"Archivo Narrow", "sans-serif"',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")({ strategy: 'class'})]
}

