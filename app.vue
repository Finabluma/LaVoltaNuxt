<script setup>
  import { computed, onMounted, onUnmounted } from 'vue'
  // Meta
  const { siteOptions } = useMainStore()
  const route = useRoute()
  const config = useRuntimeConfig()
  const { $urlFor } = useNuxtApp()

  const ogImg = computed(() => {
    return $urlFor(siteOptions?.seo?.ogImage.asset).size(1200).url()
  })

  const ogImageUrl = ogImg ? ogImg : ''

  useHead({
    titleTemplate: (title) =>
      title ? `${title} | ${siteOptions?.name}` : siteOptions?.name,
    htmlAttrs: {
      lang: siteOptions?.hrefLang,
    },
    meta: [
      {
        property: 'og:locale',
        content: siteOptions?.hrefLang ?? 'es',
      },
      {
        property: 'og:title',
        content: siteOptions?.name,
      },
      {
        property: 'og:site_name',
        content: siteOptions?.name,
      },
      {
        name: 'description',
        content: siteOptions?.seo?.metaDescription,
      },
      {
        property: 'og:url',
        content: [`${config.public.baseURL}${route.fullPath}`].join(),
      },
      {
        property: 'og:description',
        content: siteOptions?.seo?.metaDescription,
      },
      {
        name: 'keywords',
        content: siteOptions?.seo?.metaKeywords
          ? siteOptions?.seo?.metaKeywords.join(',')
          : '',
      },
      {
        property: 'og:image',
        content: ogImageUrl,
      },
      {
        property: 'og:image:type',
        content: ogImageUrl ? `${siteOptions.seo.ogImage.asset.mimeType}` : '',
      },
      {
        property: 'og:image:width',
        content: ogImageUrl
          ? `${siteOptions.seo.ogImage.asset.metadata.dimensions.width}`
          : '',
      },
      {
        property: 'og:image:height',
        content: ogImageUrl
          ? `${siteOptions.seo.ogImage.asset.metadata.dimensions.height}`
          : '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-96x96.png',
        sizes: '96x96',
        media: '(prefers-color-scheme:light)',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-dark-96x96.png',
        sizes: '96x96',
        media: '(prefers-color-scheme:dark)',
      },
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
        media: '(prefers-color-scheme:light)',
      },
      {
        rel: 'shortcut icon',
        href: '/favicon-dark.ico',
        media: '(prefers-color-scheme:dark)',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
        media: '(prefers-color-scheme:light)',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon-dark.png',
        media: '(prefers-color-scheme:dark)',
      },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/hnq7yja.css' },
    ],
  })

  let ctx = null
  let smoother = null

  const { gsap, ScrollSmoother, ScrollTrigger } = useGsap()

  // onMounted(() => {
  //   ctx = gsap.context(() => {
  //     smoother = ScrollSmoother.create({
  //       wrapper: '#smooth-wrapper',
  //       content: '#smooth-content',
  //       smooth: 1.5,
  //       effects: true,
  //       smoothTouch: 0.1,
  //       speed: 1.5,
  //     })
  //     ScrollTrigger.refresh()
  //   })
  // })
  // onUnmounted(() => {
  //   smoother.kill()
  //   ctx.revert()
  // })
</script>
<template>
  <div id="smooth-wrapper">
    <a class="sr-only" href="#main">Skip to content</a>
    <div class="grid-wrap">
      <TodayAvailability />
      <AppHeader />
      <div id="smooth-content">
        <NuxtPage />
      </div>
      <CookieConsent />
    </div>
  </div>
</template>
