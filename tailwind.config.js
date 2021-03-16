module.exports = {
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
            color: '#333',
            a: {
              color: 'rgba(59, 130, 246)',
              textDecoration: `none`,
              '&:hover': {
                textDecoration: `underline`,
              },
            },
            h3: {
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
  plugins: [require('@tailwindcss/typography')],
}
