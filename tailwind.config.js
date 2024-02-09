
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT{
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/component/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [

  ],
}

