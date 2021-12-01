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
    extend: {
      colors: {
        background: '#F9F3DF',
        tileFront: '#C37B89',
        tileBack: '#D1E8E4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
