import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // Docs: https://storybook.js.org/addons/@storybook/addon-a11y
    "@storybook/addon-a11y",
    // Docs: https://storybook.js.org/addons/@storybook/addon-themes
    "@storybook/addon-themes",
    "@storybook/addon-mdx-gfm",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  core: {
    // Doc: https://storybook.js.org/docs/6.5/react/configure/telemetry
    disableTelemetry: true,
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

export default config;
