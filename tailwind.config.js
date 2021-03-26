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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.blue.800'),
              textDecoration: 'none',

              '&:hover': {
                color: theme('colors.blue.700'),
                textDecoration: 'underline',
              },
            },
            code: {
              color: theme('colors.pink.600'),
            },
          },
        },

        dark: {
          css: {
            color: theme('colors.gray.300'),
            strong: {
              color: theme('colors.gray.300'),
            },
            h3: {
              color: theme('colors.gray.300'),
            },
            h4: {
              color: theme('colors.gray.300'),
            },
            h5: {
              color: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.blue.700'),
              textDecoration: 'none',

              '&:hover': {
                color: theme('colors.blue.600'),
                textDecoration: 'underline',
              },
            },
            code: {
              color: theme('colors.pink.600'),
            },
          },
        },
      }),
    },
  },
  variants: { typography: ['dark'] },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')],
})
