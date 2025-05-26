<script setup>
import { useSkewOnScroll } from '@/composables/useSkewOnScroll'
import { useStickyPanels } from '@/composables/useStickyPanels'
const { menu } = usePagesStore()
const { menuDia } = useMenuStore()

function formatPrice(num) {
  return parseFloat(num).toFixed(2)
}

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
    <div v-if="menu.bannerUrgent !== null">
      <AppModal :budskap="menu" v-show="showModal" @close-modal="showModal = false" />
    </div>
    <main>
      <HeroSection>
        <h1>{{ menuDia.title }}</h1>
        <SanityContent :blocks="menu.menuConditions" />
      </HeroSection>
      <div class="main-content" ref="main">
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
