import type { NuxtPage } from '@nuxt/schema'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  nitro: {
    preset: 'vercel-edge',
  },
  devtools: { enabled: true },
  modules:[
    '@nuxtjs/sanity',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    'nuxt-swiper',
    'dayjs-nuxt'
  ],
  css: ['~/assets/css/main.css'],
  app:{
    pageTransition: { name: 'page', mode: 'out-in' },
    head:{
      link:[
        { rel:"icon", type:"image/png", href:"/favicon-96x96.png", sizes:"96x96", media:"(prefers-color-scheme:light)" },
        { rel:"icon", type:"image/png", href:"/favicon-dark-96x96.png", sizes:"96x96", media:"(prefers-color-scheme:dark)" },
        { rel:"shortcut icon", href:"/favicon.ico", media:"(prefers-color-scheme:light)"},
        { rel:"shortcut icon", href:"/favicon-dark.ico", media:"(prefers-color-scheme:dark)"},
        { rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png", media:"(prefers-color-scheme:light)"},
        { rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon-dark.png", media:"(prefers-color-scheme:dark)"},
        { rel:"icon", type:"image/svg+xml", href:"/favicon.svg"},
        { rel:"manifest", href:"/site.webmanifest"},        
        { rel: 'stylesheet', href: 'https://use.typekit.net/hnq7yja.css' },
      ]
    }    
  },
  icon: {
    componentName: 'NuxtIcon'
  },
  hooks: {
    'pages:extend' (pages) {
      // add a route
      pages.push({
        name: 'la-carta',
        path: '/la-carta',
        file: '~/pages/carta.vue'
      },
      {
        name: 'el-menu',
        path: '/el-menu',
        file: '~/pages/menu.vue'
      },{
        name: 'la-volta-solidaria',
        path: '/la-volta-solidaria',
        file: '~/pages/solidaria.vue'
      },
      {
        name: 'aviso-legal',
        path: '/aviso-legal',
        file: '~/pages/terms.vue'
      },
      {
        name: 'reservas',
        path: '/reservas',
        file: '~/pages/reservas.vue'
      },
      {
        name: 'revista',
        path: '/revista',
        file: '~/pages/revista/index.vue'
      })

      // remove routes
      function removePagesMatching (pattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove: NuxtPage[] = []
        for (const page of pages) {
          if (page.file && pattern.test(page.file)) {
            pagesToRemove.push(page)
          } else {
            removePagesMatching(pattern, page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }
      removePagesMatching(/\.ts$/, pages)
    }
  },
  dayjs: {
    locales: ['es'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'es',
    defaultTimezone: 'Europe/Madrid',
  },
  sanity:{
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.SANITY_API_VERSION,
    useCdn: true,
    additionalClients: {
      preview: {
        useCdn: false,
        withCredentials: true,
      },
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL
    }
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light', 
    classSuffix: ''
  },
  image:{
    dir: 'assets/images',
    provider:'sanity',
    sanity:{
      projectId: process.env.SANITY_PROJECT_ID,
    },
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1336,
      '3xl': 1536
    },
    densities: [1,2],
  },
  build: {
    transpile: ['gsap'],
  },
  i18n: {
    defaultLocale: "es-ES",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
})