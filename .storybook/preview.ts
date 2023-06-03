import type { Preview } from '@storybook/react'
import { useGlobals, useEffect } from '@storybook/preview-api'

import 'tailwindcss/tailwind.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'paintbrush',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    // theme globals
    (storyFn, context) => {
      const [globals, updateGlobals] = useGlobals()
      const { theme } = globals

      // only the first render
      useEffect(() => {
        const savedTheme = window.localStorage.getItem('data-theme')

        /**
         * This function triggers useEffect hook to update data-theme attribute and save it to local storage.
         * Also handles handle `data-theme === undefined` case and default set it to light.
         */
        updateGlobals({ theme: savedTheme ? savedTheme : 'light' })

        /**
         * This function is used to get the iframe body element and add the dark theme class to it.
         */
        const body = document.querySelector<HTMLElement>('body')
        body?.classList.add('dark:bg-gray-900', 'bg-white')
      }, [])

      // whenever theme changes
      useEffect(() => {
        if (theme) {
          document.documentElement.setAttribute('data-theme', theme)
          window.localStorage.setItem('data-theme', theme)
        }
      }, [theme])

      return storyFn(context)
    },
  ],
}

export default preview
