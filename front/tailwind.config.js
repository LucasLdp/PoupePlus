/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-main": "#5bba6f",
        "green-second": "#3fa45d",
        "green-terciary": "#2a9134",
        "green-quarteriary": "#137547",
        "green-background": "#054a29",
        "color-menta": "#f2fff5",
        "color-saldo": "#cfdfd1",
        "color-red": "#db9d9d",
        "color-blue": "#92badf",
        "color-grey": "#c4c4c4",
        "color-contorno": "#CFDFD1",
        'color-light-green': 'rgba(91, 186, 111, 0.1)',
        'color-light-green-focus': 'rgba(91, 186, 111, 0.2)',
        'color-light-blue': 'rgba(204, 204, 204, 0.1)',
      }
    },
  },
  plugins: [],
}