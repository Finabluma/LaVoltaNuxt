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
  ctx = ref(),
  mm

function smPlatos() {
  let panels = gsap.utils.toArray('article')

  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: () =>
        panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom',
      pin: true,
      pinSpacing: false,
      fastScrollEnd: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
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
    skewOnScroll()
    // mm = gsap.matchMedia()
    // mm.add("(min-width: 1024px)", () => {

    // })
    smPlatos()
  }, main.value)
})
onUnmounted(() => {
  ctx.revert()
})
</script>
<template>
  <div id="menu">
    <div v-if="menu.bannerUrgent !== null">
      <AppModal :budskap="menu" v-show="showModal" @close-modal="showModal = false" />
    </div>
    <main>
      <HeroSection>
        <h1>{{ menuDia.title }}</h1>
        <SanityContent :blocks="menu.menuConditions" />
      </HeroSection>
      <div class="main-content">
        <section class="max-w-6xl mx-auto px-[2vw] py-5 md:py-10 xl:px-0">
          <article class="card skew">
            <div>
              <h2>
                {{ menuDia.primeros.title }}
              </h2>
              <MenuItems :platos="menuDia.primeros.platos" />
            </div>
          </article>
          <article class="card skew ">
            <div>
              <h2>
                {{ menuDia.segundos.title }}
              </h2>
              <MenuItems :platos="menuDia.segundos.platos" />
            </div>
          </article>
          <article class="card skew">
            <div>
              <h2>
                {{ menuDia.postres.title }}
              </h2>
              <MenuItems :platos="menuDia.postres.platos" />
            </div>
          </article>
          <div class="relative bg-white dark:bg-secondark py-10">
            <div class="l-box l-box--no-border">
              <span class="text-fluid-hero capitalize">{{ formatPrice(menu.price) }}€</span>
              <p class="font-mono text-fluid-base">
                * El precio no incluye bebida.
              </p>
            </div>
            <div class="l-box l-box--no-border text-fluid-body-lg font-semibold">
              <div class="mb-3">
                Medio menú
                <span>{{ formatPrice(menu.pricehalf) }}€</span>
              </div>
              <div>
                Menú compartido
                <span>{{ formatPrice(menu.priceshare) }}€</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <aside>
      <GalleryReference :page="menu" />
      <OptionalContent :page="menu" />
    </aside>
    <AppFooter />
  </div>
</template>
