<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const { carta } = usePagesStore()
const { tintos, blancos, rosados, cavas, title } = useBebidaStore()
const { mar, postre, tierra, carpaccio } = usePlatoStore()

// meta
usePageHead({
  title: carta.title,
  seo: carta.seo,
})
// GSAP
const { gsap, ScrollTrigger } = useGsap()
let main = ref(),
  ctx = ref()
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
  }, main.value)
})
onUnmounted(() => {
  ctx.revert()
})
</script>
<template>
  <div id="carta">
    <div v-if="carta.bannerUrgent !== null">
      <AppModal :budskap="carta" v-show="showModal" @close-modal="showModal = false" />
    </div>
    <main>
      <HeroSection>
        <h1>{{ carta.title }}</h1>
        <SanityContent :blocks="carta.warning" />
      </HeroSection>
      <div class="main-content">
        <article class="max-w-5xl mx-auto py-5 md:py-10 skew">
          <section class="mb-10">
            <h2 class="text-fluid-2xl mx-5 mb-5">Platos</h2>
            <CartaItems :items="mar">
              <DelMar />{{ mar.tipo.title }}
            </CartaItems>
            <CartaItems :items="tierra">
              <DeLaTierra />{{ tierra.tipo.title }}
            </CartaItems>
            <CartaItems :items="carpaccio">
              <Carpaccio />{{
                carpaccio.tipo.title
              }}
            </CartaItems>
            <CartaItems :items="postre">
              <Postre />{{ postre.tipo.title }}
            </CartaItems>
          </section>
          <section>
            <h2 class="text-fluid-2xl mx-5 mb-5">
              {{ title.title }}
            </h2>
            <CartaItems :items="tintos">
              <Tinto />{{ tintos.tipo.title }}
            </CartaItems>
            <CartaItems :items="rosados">
              <Rosado />{{ rosados.tipo.title }}
            </CartaItems>
            <CartaItems :items="blancos">
              <Blanco />{{ blancos.tipo.title }}
            </CartaItems>
            <CartaItems :items="cavas">
              <Cava />{{ cavas.tipo.title }}
            </CartaItems>
          </section>
        </article>
      </div>
    </main>
    <aside>
      <GalleryReference :page="carta" />
      <OptionalContent :page="carta" />
    </aside>
    <AppFooter />
  </div>
</template>
