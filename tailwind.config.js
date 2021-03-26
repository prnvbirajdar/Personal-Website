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
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       color: theme('colors.gray.900'),
      //       a: {
      //         color: theme('colors.blue.800'),
      //         textDecoration: 'none',

      //         '&:hover': {
      //           color: theme('colors.blue.700'),
      //           textDecoration: 'underline',
      //         },
      //       },
      //       code: {
      //         color: theme('colors.pink.800'),
      //       },
      //       pre: {
      //         color: theme('colors.indigo.200'),
      //         backgroundColor: theme('colors.gray.200'),
      //       },
      //       // thead: {
      //       //   color: theme('colors.gray.100'),
      //       //   borderBottomColor: theme('colors.gray.700'),
      //       // },
      //       // 'tbody tr': { borderBottomColor: theme('colors.gray.800') },
      //     },
      //   },

      //   dark: {
      //     css: {
      //       color: '#7982a9',
      //       a: {
      //         color: '#9ECE6A',
      //         '&:hover': {
      //           color: '#9ECE6A',
      //         },
      //       },
      //     },
      //   },
      // }),
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       color: 'rgba(209, 213, 219)',
      //       a: {
      //         color: 'rgba(59, 130, 246)',
      //         textDecoration: 'none',
      //         '&:hover': {
      //           textDecoration: 'underline',
      //         },
      //       },
      //       strong: {
      //         color: 'rgba(209, 213, 219)',
      //       },
      //       h3: {
      //         color: 'rgba(209, 213, 219)',
      //       },
      //       h4: {
      //         color: 'rgba(209, 213, 219)',
      //       },
      //       h5: {
      //         color: 'rgba(209, 213, 219)',
      //       },
      //       code: {
      //         color: theme('colors.pink.800'),
      //       },
      //     },
      //   },
      // },
    },
  },
  variants: { typography: ['dark'] },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')],
})
