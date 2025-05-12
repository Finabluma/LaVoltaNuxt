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
    <main>
      <div class="mb-clus3lev post">
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
        <ArticleCategories v-if="data.categories" :tags="data.categories" />
      </div>
      <div class="list-related">
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

<style lang="postcss">
  .hero .l-center {
    @apply lg:px-[10vw];
  }

  .post {
    @apply l-center
    lg:px-[12vw];
    .img {
      @apply mb-clus3lev;
      img {
        @apply p-1
        border;
      }
    }
    .categories {
      @apply md:p-[5vw];
      .tag {
        @apply text-base
        items-center;

        svg {
          @apply icon--larger;
        }
      }

      &::before {
        @apply content-['']
        w-1/12
        h-1
        bg-current
        block
        mb-clus3lev;
      }
    }
  }
  .list-related {
    @apply l-center
    l-box
    l-box--no-border
    max-w-4xl
    lg:px-[10vw];
  }
</style>
