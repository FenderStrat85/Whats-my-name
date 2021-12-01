module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    height: {
      sm: '40vh',
      md: '55vh',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
