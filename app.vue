<script setup>
  // Meta
  const { siteFavicon, siteOptions } = useMainStore()
  const route = useRoute()
  const config = useRuntimeConfig()
  const { $urlFor } = useNuxtApp()
  const ogImageUrl = siteOptions?.pageShareImage
    ? $urlFor(siteOptions?.pageShareImage).with(1200)
    : ''
  const appleTouchIcon = $urlFor(siteFavicon?.appleTouchIcon).width(180).url()

  const favicon32 = $urlFor(siteFavicon?.favicon).width(32).url()

  const favicon16 = $urlFor(siteFavicon?.favicon).width(16).url()

  useHead({
    titleTemplate: (title) =>
      title ? `${siteOptions?.name} | ${title}` : siteOptions?.name,
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
        property: 'og:url',
        content: [`${config.public.baseURL}${route.fullPath}`].join(),
      },
      {
        name: 'description',
        content: siteOptions?.seo?.metaDescription,
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
        property: 'og:image:width',
        content: ogImageUrl ? '1200' : '',
      },
      {
        property: 'og:image:height',
        content: ogImageUrl
          ? Math.floor(
              1200 /
                (siteOptions?.seo?.ogImage?.metadata?.dimensions?.aspectRatio ??
                  1.5)
            )
          : '',
      },
      {
        property: 'og:image:type',
        content: siteOptions?.seo?.ogImage?.asset?.mimeType ?? '',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: siteOptions?.name,
      },
      {
        name: 'twitter:description',
        content: siteOptions?.seo?.metaDescription,
      },
      {
        name: 'twitter:image',
        content: ogImageUrl,
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: appleTouchIcon,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: favicon32,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: favicon16,
      },
    ],
  })
</script>
<template>
  <div>
    <a class="sr-only" href="#main">Skip to content</a>
    <div class="grid-wrap">
      <TodayAvailability />
      <AppHeader />
      <NuxtPage />
    </div>
  </div>
</template>
