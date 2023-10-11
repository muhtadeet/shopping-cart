/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")
const { nextui } = require("@nextui-org/react")
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      reemkufi: ['Reem Kufi', 'sans-serif'],
      lato: ['Lato', 'sans-serif']
    },
    extend: {},
  },
  plugins: [nextui()],
})

