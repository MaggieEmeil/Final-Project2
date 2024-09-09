/** @type {import('tailwindcss').Config} */
export default {
  content: [ ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', require('tailwindcss-rtl'),],
  theme: {
    extend: {},
  },
  plugins: [ require('tailwindcss-rtl'),],
}

