module.exports = {
  corePlugins: {
    animation: true,
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"]
      },
      colors: {
        'custom-gray': '#dbdbdb'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
