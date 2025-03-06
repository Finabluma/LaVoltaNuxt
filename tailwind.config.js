/** @type {import('tailwindcss').Config} */
const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')
const colors = require('tailwindcss/colors')

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
      primary: '#ED80C0',
      secondary: '#CA6DA4',
      cyan100: '#cffafe',
      cyan300: '#67e8f9',
      cyan400: '#22d3ee',
      green300: '#86efac',
      yellow300: '#fde047',
      orange400: '#fb923c',
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      screens: settingsScreens,
      fontSize: settingsFontSizes,
      fontFamily: {
        ibm: ['ibm-plex-mono', 'sans-serif'],
        coordinates: ['coordinates-variable', 'sans -serif '],
        cameo: ['nitti-typewriter-cameo', 'sans-serif'],
        typewriter: ['nitti-typewriter-normal', 'sans-serif'],
        houschka: ['houschka-rounded', 'sans-serif'],
        mozaic: ['mozaic-hum-variable', 'sans-serif'],
        hero: [' hero-new', 'sans-serif'],
        rooney: ['rooney-sans', 'sans-serif'],
        gloss: ['gloss-drop', 'cursive'],
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
