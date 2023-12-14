import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Thanks to tints.dev for the values; https://coolors.co/palette/272727-fed766-009fb7-696773-eff1f3 for the palette
        "raisin": {
          50: "#EEE7E7",
          100: "#DACECE",
          200: "#B1A0A0",
          300: "#867474",
          400: "#554E4E",
          500: "#272727",
          600: "#201D1D",
          700: "#191515",
          800: "#110E0E",
          900: "#090707",
          950: "#060404"
        },
        "mustard": {
          50: "#FFFBF0",
          100: "#FFF7E1",
          200: "#FFF0C2",
          300: "#FEE8A4",
          400: "#FEE085",
          500: "#FED766",
          600: "#FEC620",
          700: "#D5A001",
          800: "#8E6B01",
          900: "#473500",
          950: "#231B00"
        },
        "moonstone": {
          50: "#E0FBFF",
          100: "#BDF6FF",
          200: "#7AEDFF",
          300: "#3DE5FF",
          400: "#00D9FA",
          500: "#009FB7",
          600: "#008094",
          700: "#006170",
          800: "#003E47",
          900: "#001F24",
          950: "#001214"
        },
        "dimgrey": {
          50: "#EFEFF1",
          100: "#E2E1E4",
          200: "#C2C1C8",
          300: "#A5A4AD",
          400: "#858390",
          500: "#696773",
          600: "#54525B",
          700: "#403F46",
          800: "#2A292E",
          900: "#161618",
          950: "#0A0A0B"
        },
        "antiflashwhite": {
          50: "#FCFCFD",
          100: "#FCFCFD",
          200: "#F9FAFB",
          300: "#F6F7F8",
          400: "#F3F5F6",
          500: "#EFF1F3",
          600: "#B9C2CB",
          700: "#8291A1",
          800: "#53616F",
          900: "#2A3037",
          950: "#14171A"
        }    
      },
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',

        // 'layout': '200px minmax(900px, 1fr) 100px'
      },
      gridRow: {
        'span-10': 'span 10 / span 10'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.green,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia
    }
  },
  plugins: [
    plugin(function({addBase, theme}) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') }
      })
    })
  ],
}
export default config
