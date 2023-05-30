import type { StorybookConfig } from '@storybook/react-vite'
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // Docs: https://storybook.js.org/addons/@storybook/addon-styling
    '@storybook/addon-styling',
    // Docs: https://storybook.js.org/addons/@storybook/addon-a11y
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    // Doc: https://storybook.js.org/docs/6.5/react/configure/telemetry
    disableTelemetry: true,
  },
}
export default config
