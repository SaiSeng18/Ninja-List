module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // ...
      ringColor: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
    }
  },
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 0 2px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
