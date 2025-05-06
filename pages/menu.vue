<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  const { menu } = usePagesStore()
  const { menuDia } = useMenuStore()

  function formatPrice(num) {
    return parseFloat(num).toFixed(2)
  }

  // meta
  usePageHead({
    title: menuDia.title,
    seo: menu.seo,
  })

  //GSAP
  const { gsap, ScrollTrigger } = useGsap()
  let main = ref(),
    menuSVG = ref(),
    ctx = ref()

  function smPlatos() {
    let panels = gsap.utils.toArray('article')

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom',
        pin: true,
        pinSpacing: false,
      })
    })
  }
  function skewOnScroll() {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter('.skew', 'skewY', 'deg'), // fast
      clamp = gsap.utils.clamp(-5, 5)

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300)
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          })
        }
      },
    })
    gsap.set('.skew', { transformOrigin: 'right center', force3D: true })
  }
  onMounted(() => {
    ctx = gsap.context((self) => {
      smPlatos()
      skewOnScroll()
    }, main.value)
  })
  onUnmounted(() => {
    ctx.revert()
  })
</script>
<template>
  <div class="page">
    <div v-if="menu.bannerUrgent !== null">
      <AppModal
        :budskap="menu"
        v-show="showModal"
        @close-modal="showModal = false"
      />
    </div>
    <main>
      <HeroSection class="hero--after">
        <div class="components components--text">
          <h2 class="title-page">{{ menu.title }}</h2>
          <ElementsTextContent :blocks="menu.menuConditions" />
        </div>
      </HeroSection>
      <section class="l-center mb-clus3lev">
        <h1 class="sr-only">{{ menuDia.title }}</h1>
        <article class="skew l-box l-box--no-border">
          <h2 class="title-block mb-clus3lev">
            {{ menuDia.primeros.title }}
          </h2>
          <MenuItems :platos="menuDia.primeros.platos" />
        </article>
        <article class="skew l-box l-box--no-border">
          <h2 class="title-block mb-clus3lev">
            {{ menuDia.segundos.title }}
          </h2>
          <MenuItems :platos="menuDia.segundos.platos" />
        </article>
        <article class="skew l-box l-box--no-border">
          <h2 class="title-block mb-clus3lev">
            {{ menuDia.postres.title }}
          </h2>
          <MenuItems :platos="menuDia.postres.platos" />
        </article>

        <div class="relative l-cluster bg-white dark:bg-secondark">
          <div class="l-stack l-box l-box--no-padding">
            <span class="title-Xtra">{{ formatPrice(menu.price) }}€</span>
            <p class="font-typewriter text-xs">
              * El precio no incluye bebida.
            </p>
          </div>
          <div class="l-box l-box--no-border">
            <div class="font-semibold">
              Medio menu
              <span>{{ formatPrice(menu.pricehalf) }}€</span>
            </div>
            <div class="font-semibold">
              Menú compartido
              <span>{{ formatPrice(menu.priceshare) }}€</span>
            </div>
          </div>
        </div>
      </section>
    </main>
    <aside>
      <GalleryReference :page="menu" />
      <OptionalContent :page="menu" />
    </aside>
    <AppFooter />
  </div>
</template>
<style lang="postcss" scoped>
  article {
    @apply bg-white dark:bg-secondark;
  }
</style>
