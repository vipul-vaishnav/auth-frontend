/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ["'Open-sans'", 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false
  }
}
