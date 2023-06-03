import { type Config } from 'tailwindcss'
import tailwindPreset from './src/tailwind.preset'

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  presets: [
    // Custom Tailwind Preset. This will be part of the exported package - which can then be easily imported into child projects
    tailwindPreset,
  ],
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    // DEV ONLY - For this Storybook only
    './.storybook/**/*.{js,jsx,ts,tsx,mdx}',
  ],
} satisfies Config
