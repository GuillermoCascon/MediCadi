/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/*/*.jsx", "./src/imgs/logo.png"],
  theme: {
    extend: {
      fill: (theme) => ({
        ...theme('colors'),
      }),
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const colors = require('tailwindcss/colors');

      const colorUtilities = Object.entries(colors).flatMap(([name, value]) => ({
        [`.fill-${name}`]: {
          fill: value,
        },
      }));

      addUtilities(colorUtilities);
    },
  ],
}

