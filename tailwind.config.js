/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      firstlight: '#E66EB2',
      firstdark: '#1B365C',
      secondark: '#7EA1C4',
      black: '#27272a',
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      screens: settingsScreens,
      fontSize: settingsFontSizes,
      fontFamily: {
        coordinates: ['coordinates-variable', 'sans -serif '],
        cameo: ['nitti-typewriter-cameo', 'sans-serif'],
        houschka: ['houschka-rounded', 'sans-serif'],
      },
      colors: {
        constlines: '#9cf',
        orbit: '#bdccd4',
        cardinales: '#fb5a6e',
      },
      margin: {
        clus1lev: 'calc(1rem / 2 * -1)',
        clus2lev: 'calc(1rem / 2)',
        clus3lev: 'calc(1rem)',
        clus1sidebar: 'calc(1.7rem / 2 * -1)',
        clus2sidebar: 'calc(1.7rem / 2)',
      },
      backgroundImage: () => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        azulejos: "url('~/assets/images/azulejos.svg')",
        azulejosLight: "url('~/assets/images/azulejos-light.svg')",
        azulejos2: "url('~/assets/images/azulejos2.svg')",
      }),
      fill: (theme) => ({
        constlines: theme('colors.constlines'),
        orbit: theme('colors.orbit'),
        cardinales: theme('colors.cardinales'),
      }),
      stroke: (theme) => ({
        cardinales: theme('colors.cardinales'),
        constlines: theme('colors.constlines'),
      }),
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements')(),
    plugin(({ addVariant }) => {
      addVariant('card', '&[data-component="card"]')
    }),
  ],
}
