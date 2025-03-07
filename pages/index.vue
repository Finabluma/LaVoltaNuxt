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
    food = ref(),
    showModal = ref(true),
    banner = ref()

  onMounted(() => {
    ctx = gsap.context((self) => {
      banner.value.banner(), food.value.masterToFood()
      intro.value.intro()
    }, main.value)
  })

  onUnmounted(() => {
    ctx.revert()
  })
</script>
<template>
  <div class="page" ref="main">
    <div v-if="home.bannerUrgent !== null">
      <AppModal
        :budskap="home"
        v-show="showModal"
        @close-modal="showModal = false"
        ref="banner"
      />
    </div>
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
              <h1 class="title_tracked">
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
    min-h-dvh
    flex
    flex-col
    justify-evenly
    md:py-10;

    .artHomeContent {
      @apply flex
      flex-col
      items-center
      justify-evenly;

      .title_tracked {
        @apply text-lg;
      }
    }
  }
</style>
