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

  const related = computed(() => {
    return data.value.relatedContent
  })

  const banner = computed(() => {
    return data.value.optionalContent
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
        <div v-if="data.summary" class="mb-5">
          <ArticleSummary :summary="data.summary" />
        </div>
        <div v-if="data.maincontent" class="mb-10">
          <ElementsTextContent :blocks="data?.maincontent" />
        </div>
        <div v-if="data.categories" class="mb-5">
          <ArticleCategories
            title="Categorias"
            :tags="data.categories"
            class="categories"
          />
        </div>
      </div>
      <div class="inner_bottom">
        <div v-if="related" class="related">
          <h2>Continúa leyendo</h2>
          <div class="sm:flex">
            <div
              v-for="item in related.articleRelated"
              :key="item._id"
              class="mb-3 sm:w-6/12 sm:p-2 sm:mb-0"
            >
              <ArticleTeaser class="portada">
                <template #media>
                  <ElementsMediaImageItem
                    :src="item.mainImage.asset._ref"
                    :alt="item.mainImage.alt"
                    :modifiers="{
                      crop: item.mainImage.crop,
                      hotspot: item.mainImage.hotspot,
                      q: 80,
                    }"
                    sizes="xs:100px"
                    height="100"
                    fit="cover"
                    format="webp"
                  />
                </template>
                <template #default>
                  <ElementsTextLink
                    link-type="internalLinkType"
                    route="revista-slug"
                    :slug="item.slug"
                    class="enlace"
                    >{{ item.title }}
                  </ElementsTextLink>
                  <div v-if="item.categories">
                    <ArticleCategories
                      :tags="item.categories"
                      title="Categorias"
                      class="catDestacado"
                    />
                  </div>
                </template>
              </ArticleTeaser>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- <aside v-if="banner !== null">
      <div v-for="item in banner" :key="item._id">
        <pre>{{ item }}</pre>
      </div>
    </aside> -->
    <AppFooter />
  </div>
  <div v-else>hola</div>
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

      .inner_bottom {
        @apply w-11/12
        mx-auto
        my-10
        py-3
        sm:w-11/12
        md:w-10/12
        lg:w-8/12;

        .related {
          h2 {
            @apply mb-5 
            font-cameo
            text-xl
            text-center
            dark:text-slate-400
            sm:pl-[5%]
            sm:text-left;
          }

          article {
            .enlace {
              @apply font-sans
              text-lg/tight
              text-slate-500
              dark:text-slate-300
              xl:text-xl;
            }

            .categories {
              @apply w-auto 
              mt-2;
            }
          }
        }

        .portada {
          @apply p-1
          bg-slate-400/30
          dark:bg-slate-500
          lg:p-3;
        }
      }
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
