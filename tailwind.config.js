const windmill = require('@windmill/react-ui/config')

module.exports = windmill({
  purge: {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgba(209, 213, 219)',
            a: {
              color: 'rgba(59, 130, 246)',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            strong: {
              color: 'rgba(209, 213, 219)',
            },
            h3: {
              color: 'rgba(209, 213, 219)',
            },
            h4: {
              color: 'rgba(209, 213, 219)',
            },
            h5: {
              color: 'rgba(209, 213, 219)',
            },
            code: {
              color: '#ec4899',
            },
          },
        },
      },
    },
  },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')],
})
