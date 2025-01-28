<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  const { revista } = usePagesStore()

  const isFeatured = computed(() => {
    return revista.portada.cover.filter((item) => item.featured !== false)
  })

  const destacado = computed(() => {
    return isFeatured.value[0].article
  })

  const notFeatured = computed(() => {
    return revista.portada.cover.filter((item) => item.featured === false)
  })

  // meta
  usePageHead({
    title: revista.title,
    seo: revista.seo,
  })

  //GSAP
  // const { gsap, ScrollTrigger } = useGsap()

  // let main = ref(),
  //   ctx = ref()

  // onMounted(() => {
  //   ctx = gsap.context((self) => {
  //     let q = gsap.utils.selector('.highlight-block')
  //     let tl = gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: '.highlight-block',
  //           start: 'top top',
  //           pin: true,
  //           pinSpacing: false,
  //           scrub: true,
  //         },
  //       })
  //       .to(q('h1'), { autoAlpha: 0, y: '10' })
  //       .to(q('.destacado'), { autoAlpha: 0, yPercent: '10' }, '0')
  //   }, main.value)
  // })

  // onUnmounted(() => {
  //   ctx.revert()
  // })
</script>
<template>
  <div class="page">
    <HeroSection>
      <template #content>
        {{ revista.title }}
      </template>
      <template #default>
        <div v-if="revista.mainImage">
          <ElementsMediaImageItem
            :src="revista.mainImage.asset._ref"
            :alt="revista.mainImage.alt"
            height="550"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
            :modifiers="{
              crop: revista.mainImage.crop,
              hotspot: revista.mainImage.hotspot,
              q: 80,
            }"
            fit="cover"
            format="webp"
          />
        </div>
        <div v-else class="noImg" />
      </template>
    </HeroSection>
    <main>
      <div class="main_content">
        <section>
          <h1 class="sr-only">{{ revista.title }}</h1>
          <div class="destacado-wrapper">
            <div class="highlight-block">
              <h1>{{ revista.portada.title }}</h1>
              <div v-if="isFeatured.length > 0">
                <ArticleDestacado :items="destacado" />
              </div>
            </div>

            <div v-if="notFeatured.length > 0">
              <ArticlesPortada :items="notFeatured" />
            </div>
          </div>
        </section>
      </div>
    </main>
    <aside v-if="revista.optionalContent !== null">
      <OptionalContent :page="revista" />
    </aside>
    <AppFooter />
  </div>
</template>
<style lang="postcss" scoped>
  .main_content section {
    @apply mx-auto 
    lg:w-11/12
    xl:w-11/12;

    .highlight-block {
      @apply flex 
      flex-col 
      justify-center 
      items-center;
    }

    h1 {
      @apply text-lg
        font-coordinates
        lowercase
        tracking-[1rem]
        pt-8
        mb-5
        ml-[1rem]        
        text-slate-400
        dark:text-slate-400
        lg:pt-12
        lg:mb-10;
    }
  }
</style>
