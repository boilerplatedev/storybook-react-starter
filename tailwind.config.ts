import { type Config } from 'tailwindcss'
import tailwindPreset from './src/tailwind.preset'

export default {
  darkMode: ['class'],
  presets: [
    // Custom Tailwind Preset. This will be part of the exported package - which can then be easily imported into child projects
    tailwindPreset,
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
} satisfies Config
