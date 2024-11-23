/** @type {import('tailwindcss').Config} */
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
    extend: {
      screens: settingsScreens,
      fontSize: settingsFontSizes,
      fontFamily: {
        sans: ['ibm-plex-mono', 'sans-serif'],
        serif: ['dejanire-headline', 'serif'],
        cameo: ['nitti-typewriter-cameo', 'sans-serif'],
        typewriter: ['nitti-typewriter-normal', 'sans-serif'],
      },
      colors: {
        constlines: '#9cf',
        orbit: '#bdccd4',
        cardinales: '#fb5a6e',
      },
      backgroundImage: () => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        azulejos: "url('~/assets/images/azulejos.svg')",
        azulejosw: "url('~/assets/images/azulejos_w.svg')",
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
  plugins: [require('tailwindcss-pseudo-elements')()],
}
