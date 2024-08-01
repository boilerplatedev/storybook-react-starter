/* eslint-disable global-require */
import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const preset: Config = {
  darkMode: ['class'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // Tailwind plugins
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default preset
