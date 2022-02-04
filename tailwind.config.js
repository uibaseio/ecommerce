const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: colors.indigo,
    },
  },
  plugins: [forms],
};
