import type { Config } from 'tailwindcss'
import {colors, typography, indents, radii, screens, iconsMask} from "./design.config";

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,scss}'
  ],
  theme: {
    screens: {
      ...screens
    },
    margin: {
      ...indents,
      auto: 'auto',
      '0': '0'
    },
    padding: {...indents, '0': '0'},
    gap: {...indents, '0': '0'},
    borderRadius: {...radii, '0': '0'},
    fontSize: {...typography},
    colors: {...colors},
    container: {
      center: true,
      screens: {
        DEFAULT: '100%'
      }
    }
  },
  safelist: [
      ...Object.values(iconsMask)
  ],
  plugins: [],
}

export default config