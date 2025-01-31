<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  const { home } = usePagesStore()

  const isFeatured = computed(() => {
    return home.portada.portada.cover.filter((item) => item.featured !== false)
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
      .to(q('.homeDestacado'), { yPercent: -20, autoAlpha: 0 }, '0')
    return tl
  }

  function smDestacadoMaster() {
    gsap.timeline().add(smDestacadoIn()).add(smDestacadoOut())
  }

  onMounted(() => {
    ctx = gsap.context((self) => {
      food.value.masterToFood(), intro.value.intro(), smDestacadoMaster()
    }, main.value)
  })

  onUnmounted(() => {
    ctx.revert()
  })
</script>
<template>
  <div class="page" ref="main">
    <HeroSection :items="home" />
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
              <ArticleDestacado :item="isFeatured" class="homeDestacado" />
            </div>
          </div>
        </section>
      </div>
    </main>
    <aside>
      <LazyGalleryReference :page="home" />
      <LazyOptionalContent :page="home" />
    </aside>
    <AppFooter />
  </div>
</template>
<style lang="postcss" scoped>
  .articleHome {
    @apply relative 
    h-dvh
    bg-slate-500
    dark:bg-slate-600
    border-t-2
    border-t-slate-500
    dark:border-t-slate-700
    flex
    flex-col
    justify-evenly
    py-6
    sm:pt-0
    md:h-[75dvh]
    xl:h-[95dvh]
    xl:mb-52;

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
        mb-2
        ml-[1rem]        
        text-slate-400
        dark:text-slate-400;
      }
    }
  }
</style>
