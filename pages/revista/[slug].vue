<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { articleQuery } from '~/queries'
  const { siteNav } = useMainStore()

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

  //GSAP
  const { gsap, ScrollTrigger } = useGsap()

  function smTitle() {
    let tl = gsap.timeline().to('.content .inner', {
      yPercent: 25,
      autoAlpha: 0,
    })
    ScrollTrigger.create({
      trigger: '.inner_hero',
      start: 'top top',
      pin: true,
      scrub: true,
      pinSpacing: false,
      animation: tl,
    })
    ScrollTrigger.create({
      trigger: '.content',
      start: 'top top',
      pin: true,
      pinSpacing: false,
      scrub: true,
      animation: tl,
    })
  }

  let ctx = ref(),
    main = ref()

  onMounted(() => {
    ctx = gsap.context((self) => {
      smTitle()
    }, main.value)
  })
  onUnmounted(() => {
    ctx.revert()
  })

  // meta
  usePageHead({
    title: data.title,
    seo: data.seoPage,
  })
</script>
<template>
  <div v-if="data" class="pageArticle">
    <ArticleHeader :data="data" />
    <main class="relative z-20 bg-neutral-content dark:bg-neutral">
      <h1 class="sr-only">{{ data.title }}</h1>
      <div class="inner_main">
        <ArticleBreadcrumb :data="data" class="lg:mt-5 sm:w-11/12 mx-auto">
          <li>
            <ElementsTextLink link-type="internalLinkType" route="revista"
              >Revista</ElementsTextLink
            >
          </li>
          <li>{{ data.title }}</li>
        </ArticleBreadcrumb>
        <!-- <ArticleDate :data="data" class="mb-5 sm:w-11/12 mx-auto" /> -->
        <div v-if="data.summary" class="mb-5">
          <ArticleSummary :summary="data.summary" />
        </div>
        <div v-if="data.maincontent" class="mb-10">
          <ElementsTextContent :blocks="data?.maincontent" />
        </div>
        <div v-if="data.categories" class="mb-5">
          <ArticleCategories title="Categorias" :tags="data.categories" />
        </div>
      </div>
    </main>
    <!-- <aside v-if="data.optionalContent !== null">
      <div v-for="item in data.optionalContent" :key="item._key" class="banner">
        <div class="banner_wrapper">
          <div v-if="item.image" class="image">
            <ElementsMediaImageItem
              :src="item.image.asset._ref"
              :alt="item.image.alt"
              height="150"
              sizes="xs:150px"
              :modifiers="{
                crop: item.image.crop,
                hotspot: item.image.hotspot,
                q: 80,
              }"
              fit="cover"
              format="webp"
            />
          </div>
          <div class="banner_content">
            <h2>{{ item.title }}</h2>
            <div v-if="item.banner" class="inner-content">
              {{ item.banner }}
            </div>
            <div v-if="item.enlace" class="enlace">
              <ElementsTextLink>
                {{ item.enlace.linkTarget._type }}
              </ElementsTextLink>
            </div>
          </div>
        </div>
      </div>
    </aside> -->
    <LazyAppFooter />
  </div>
  <div v-else>
    <h1>Hola</h1>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
<style lang="postcss" scoped>
  .pageArticle {
    @apply w-screen
    min-h-dvh
    flex
    flex-col;

    main {
      @apply relative
      z-30
      bg-slate-200
      dark:bg-slate-600;
    }

    #footer {
      @apply mt-auto
      bg-slate-200 
      dark:bg-slate-600;
    }
  }
  .inner_main {
    @apply w-screen
    mx-auto
    px-2
    max-w-screen-lg
    sm:w-11/12
    lg:w-full;
  }
</style>
