module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: 16,
      sm: 20,
      md: 24,
      '2md': 28,
      lg: 32,
      xl: 36,
    },
    colors: {
      transparent: 'transparent',

      black: '#000',

      white: {
        smoked: '#FFF6FF',
        1000: '#FFF',
      },

      purple: {
        900: '#25263E',
        700: '#39255E',
        500: '#6E55CA',
        300: '#B479E8',
      },

      green: {
        300: '#74F7D3',
        200: '#91FFE2',
      },

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },

      cyan: {
        500: '#81D8F7',
        300: '#98E1FB',
      },

      orange: {
        500: '#FC511E',
        300: '#E66110',
      },
      blue: {
        500: '#1274E3',
        300: '#20C1FA',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Josefin Sans, sans-serif',
        ubuntu: 'Ubuntu, sans-serif',
      },
    },
  },
  plugins: [],
};
