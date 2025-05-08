<script setup>
  import { articleQuery } from '~/queries'

  const props = defineProps({
    error: Object,
  })
  // get project
  const route = useRoute()
  const params = {
    slug: route.params.slug,
  }
  const data = await useSanityData({
    query: articleQuery,
    params: params,
  })

  // meta
  usePageHead({
    title: data.title,
    seo: data.seoPage,
  })

  const related = computed(() => {
    return data.value.relatedContent
  })

  const banner = computed(() => {
    return data.value.optionalContent
  })

  const estilos = computed(() => {
    return data.value.optionalContent.length == 1 ? 'single' : 'compound'
  })
</script>
<template>
  <div v-if="data">
    <HeroSection>
      <h1 class="title-page">{{ data.title }}</h1>
      <p class="font-coordinates">{{ data.subtitle }}</p>
    </HeroSection>
    <main class="l-center">
      <div class="mb-clus3lev mx-auto post">
        <ArticleBreadcrumb :data="data">
          <li>
            <ElementsTextLink link-type="internalLinkType" route="revista"
              >Revista</ElementsTextLink
            >
          </li>
          <li>{{ data.title }}</li>
        </ArticleBreadcrumb>
        <ArticleSummary v-if="data.summary" :summary="data.summary" />
        <div v-if="data.mainImage" class="img">
          <ElementsMediaImageItem
            :src="data.mainImage.asset._ref"
            :alt="data.mainImage.alt"
            height="800"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
            :modifiers="{
              crop: data.mainImage.crop,
              hotspot: data.mainImage.hotspot,
              q: 80,
            }"
            fit="cover"
            format="webp"
          />
        </div>
        <ElementsTextContent
          :blocks="data?.maincontent"
          v-if="data?.maincontent"
          class="mb-clus3lev"
        />
        <ArticleCategories
          v-if="data.categories"
          :tags="data.categories"
          class="l-box l-box--no-border"
        />
      </div>
      <div class="l-center md:l-box md:l-box--no-border max-w-5xl mx-auto">
        <ArticleRelated :related="related.articleRelated" v-if="related" />
      </div>
    </main>
    <aside v-if="banner !== null" :class="estilos">
      <div class="content_wrapper">
        <div
          v-for="(item, index) in banner"
          :key="item._id"
          :class="index == 0 ? 'first' : 'second'"
        >
          <LazyBannerBottom :optional="item" />
        </div>
      </div>
    </aside>
    <AppFooter />
  </div>
  <div v-else>NO HAY ARTICULO</div>
</template>
