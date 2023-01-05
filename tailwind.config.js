/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter : "'Inter, sans-serif'"
      }
    },
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  backgroundImage: {
    'mobile-light-bg': "url('./assets/mobile/bg-image-daytime.jpg')",
  },
};
