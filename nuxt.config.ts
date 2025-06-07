import type { NuxtPage } from "@nuxt/schema";
import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  nitro: {
    preset: "vercel-edge",
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/sanity",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@nuxtjs/i18n",
    "nuxt-swiper",
    "dayjs-nuxt",
  ],
  css: ["~/assets/css/main.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        // Preconnect to Typekit domain to speed up connection
        {
          rel: "preconnect",
          href: "https://use.typekit.net",
          crossorigin: "anonymous",
        },
        { rel: "dns-prefetch", href: "https://use.typekit.net" },
        // The actual stylesheet link for Adobe Fonts
        { rel: "stylesheet", href: "https://use.typekit.net/hnq7yja.css" },
      ],
    },
  },
  icon: {
    componentName: "NuxtIcon",
  },
  hooks: {
    "pages:extend"(pages) {
      // add a route
      pages.push(
        {
          name: "la-carta",
          path: "/la-carta",
          file: "~/pages/carta.vue",
        },
        {
          name: "el-menu",
          path: "/el-menu",
          file: "~/pages/menu.vue",
        },
        {
          name: "la-volta-solidaria",
          path: "/la-volta-solidaria",
          file: "~/pages/solidaria.vue",
        },
        {
          name: "aviso-legal",
          path: "/aviso-legal",
          file: "~/pages/terms.vue",
        },
        {
          name: "reservas",
          path: "/reservas",
          file: "~/pages/reservas.vue",
        },
        {
          name: "revista",
          path: "/revista",
          file: "~/pages/revista/index.vue",
        }
      );

      // remove routes
      function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove: NuxtPage[] = [];
        for (const page of pages) {
          if (page.file && pattern.test(page.file)) {
            pagesToRemove.push(page);
          } else {
            removePagesMatching(pattern, page.children);
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1);
        }
      }
      removePagesMatching(/\.ts$/, pages);
    },
  },
  dayjs: {
    locales: ["es"],
    plugins: ["relativeTime", "utc", "timezone"],
    defaultLocale: "es",
    defaultTimezone: "Europe/Madrid",
  },
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.SANITY_API_VERSION,
    useCdn: false,

    //  // privado, no en public
    additionalClients: {
      preview: {
        useCdn: false,
        withCredentials: true,
      },
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      GA_ID: process.env.NUXT_PUBLIC_GA_ID || "", // fallback por si no está definida
    },
    private: {
      sanity: {
        token: process.env.NUXT_SANITY_TOKEN,
      },
    },
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },
  image: {
    dir: "assets/images",
    provider: "sanity",
    sanity: {
      projectId: process.env.SANITY_PROJECT_ID,
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1336,
      "3xl": 1536,
    },
    densities: [1, 2],
  },
  build: {
    transpile: ["gsap"],
  },
  i18n: {
    defaultLocale: "es-ES",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: "terser",
      cssCodeSplit: true,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ["console.info", "console.debug", "console.warn"],
        },
        format: {
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
      },
    },
  },
});
