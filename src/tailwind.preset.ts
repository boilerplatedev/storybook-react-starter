/* eslint-disable global-require */
import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const preset: Config = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        /**
         * Make sure you load fonts as soon as possible in the implementor app.
         *
         <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
         */
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // Tailwind plugins
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default preset
