<script setup>
import { ref } from 'vue'

import { useSkewOnScroll } from '@/composables/useSkewOnScroll'
const { carta } = usePagesStore()
const { tintos, blancos, rosados, cavas, title } = useBebidaStore()
const { mar, postre, tierra, carpaccio } = usePlatoStore()

// MODAL
let showModal = ref(true)

// meta
usePageHead({
  title: carta.title,
  seo: carta.seo,
})

// SkewScroll
useSkewOnScroll()

</script>
<template>
  <div id="carta">
    <main>
      <HeroSection>
        <h1>{{ carta.title }}</h1>
        <SanityContent :blocks="carta.warning" />
      </HeroSection>
      <div class="main-content">
        <div v-if="carta.bannerUrgent !== null" class="skew">
          <AppModal :budskap="carta" v-show="showModal" @close-modal="showModal = false" />
        </div>
        <article class="max-w-6xl mx-auto px-[1vw] py-5 md:py-10 xl:px-0 skew">
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
      <LazyGalleryReference :page="carta" />
      <LazyOptionalContent :page="carta" />
    </aside>
    <AppFooter />
  </div>
</template>
