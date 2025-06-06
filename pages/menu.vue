<script setup>
import { ref } from 'vue'
import { useSkewOnScroll } from '@/composables/useSkewOnScroll'
import { useStickyPanels } from '@/composables/useStickyPanels'
const { menu } = usePagesStore()
const { menuDia } = useMenuStore()

function formatPrice(num) {
  return parseFloat(num).toFixed(2)
}

// MODAL
let showModal = ref(true)
// SkewScroll
useSkewOnScroll()
// StickyPanels
useStickyPanels()

// meta
usePageHead({
  title: menuDia.title,
  seo: menu.seo,
})
</script>
<template>
  <div id="menu">

    <main>
      <HeroSection>
        <h1>{{ menuDia.title }}</h1>
        <SanityContent :blocks="menu.menuConditions" />
      </HeroSection>
      <div class="main-content" ref="main">
        <div v-if="menu.bannerUrgent !== null" class="skew">
          <LazyAppModal :budskap="menu" v-show="showModal" @close-modal="showModal = false" />
        </div>
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
      <LazyGalleryReference :page="menu" />
      <LazyOptionalContent :page="menu" />
    </aside>
    <AppFooter />
  </div>
</template>
