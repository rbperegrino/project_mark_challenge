const colors = require('tailwindcss/colors');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,scss,ts}",
  ],
  theme: {
    colors: {
      ...colors,
      gray: {
        ...colors.gray,
        '100': '#BFCFE0',
        '200': '#EDF2F7',
        '300': '#E2E8F0',
        '400': '#CBD5E0',
        800: '#2D3748'
      },
      blue: {
        ...colors.blue,
        600: '#2462D1'
      },
      'lead': {
        100: '#F7F1FF',
        200: '#E9D9FF',
        300: '#DABFFF',
        400: '#46426D'
      },
      'rfp': {
        100: '#FEF6EF',
        200: '#FFE4CC',
        300: '#FFD6B3',
        400: '#66421F'
      },
      'submitted': {
        100: '#E6F4FF',
        200: '#BFE3FF',
        300: '#99D1FF',
        400: '#003A66'
      },
      'won': {
        100: '#DEF5F7',
        200: '#AAECF2',
        300: '#81DDE5',
        400: '#2A5154'
      },
      'lost': {
        100: '#FFF2F6',
        200: '#FFD9E4',
        300: '#FFBFD2',
        400: '#773A47'
      },
      'closed': {
        100: '#F2F7FA',
        200: '#E2E8F0',
        300: '#CBD5E0',
        400: '#4A5568'
      }
    },
    extend: {
      fontFamily              : {
        archivo: '"Archivo", "sans-serif"',
        archivonarrow: '"Archivo Narrow", "sans-serif"',
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [require("@tailwindcss/forms")({ strategy: 'class'})],
  safelist: [
    {
      pattern:
        /(bg|text|border|from|to|via)-(lead|rfp|submitted|won|lost|closed)/,
    },
  ],
}

