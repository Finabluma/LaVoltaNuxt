<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  const { home } = usePagesStore()

  const isFeatured = computed(() => {
    return home.portada.portada.cover.filter((item) => item.featured !== false)
  })

  const destacado = computed(() => {
    return isFeatured.value[0].article
  })

  //GSAP
  const { gsap, ScrollTrigger } = useGsap()

  let main = ref(),
    ctx = ref(),
    intro = ref(),
    food = ref()

  function smDestacadoIn() {
    let q = gsap.utils.selector('.destacado')
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.articleHome',
        start: 'top top',
        end: 'bottom bottom-=10%',
        scrub: true,
        snap: 1,
      },
    })
    return tl
  }

  function smDestacadoOut() {
    let q = gsap.utils.selector('.artHomeContent')
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.articleHome',
          start: 'top top',
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      })
      .to(q('h1'), { yPercent: -20, autoAlpha: 0 })
      .to(q('.destacado'), { yPercent: -40, autoAlpha: 0 }, '0')
    return tl
  }

  function smDestacadoMaster() {
    let mm = gsap.matchMedia()
    mm.add('(min-width: 320px) and (orientation:portrait)', () => {
      let tl = gsap.timeline().add(smDestacadoIn()).add(smDestacadoOut())
    }).add('(min-width:1024px)', () => {
      let tl1 = gsap.timeline().add(smDestacadoIn()).add(smDestacadoOut())
    })
    return mm
  }

  onMounted(() => {
    ctx = gsap.context((self) => {
      food.value.masterToFood(), intro.value.intro(), smDestacadoMaster()
    }, main.value)
  })

  onUnmounted(() => {
    ctx.revert()
  })

  console.log(home.galleryRef)
</script>
<template>
  <div class="page" ref="main">
    <HeroSection>
      <template #content>
        {{ home.title }}
      </template>
      <template #default>
        <div v-if="home.mainImage">
          <ElementsMediaImageItem
            :src="home.mainImage.asset._ref"
            :alt="home.mainImage.alt"
            height="450"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
            :modifiers="{
              crop: home.mainImage.crop,
              hotspot: home.mainImage.hotspot,
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
      <div class="home_content">
        <section>
          <IntroHome
            :subtitle="home.subtitle"
            :content="home.content"
            ref="intro"
          />
          <CartaMenu :items="home.cartamenu" ref="food" />
          <div v-if="isFeatured.length > 0" class="articleHome">
            <div class="artHomeContent">
              <h1 class="text-center leading-1">
                {{ home.portada.portada.title }}
              </h1>
              <ArticleDestacado :items="destacado" />
            </div>
          </div>
        </section>
      </div>
    </main>
    <aside>
      <LazyOptionalContent :page="home" />
      <LazyGalleryReference :page="home" />
      <!-- <LazyUniverseCallBadge /> -->
    </aside>
    <AppFooter />
  </div>
</template>
<style lang="postcss" scoped>
  .articleHome {
    @apply relative 
    min-h-[85dvh]
    bg-slate-600
    dark:bg-slate-600
    border-t-2
    border-t-slate-500
    dark:border-t-slate-700
    flex
    flex-col
    justify-evenly
    py-6
    sm:py-12;

    .artHomeContent {
      @apply flex
      flex-col
      items-center
      justify-evenly;

      h1 {
        @apply text-lg
        font-coordinates
        lowercase
        tracking-[1rem]
        pt-10
        mb-10
        ml-[1rem]        
        text-slate-400
        dark:text-slate-400;
      }
    }
  }
</style>
