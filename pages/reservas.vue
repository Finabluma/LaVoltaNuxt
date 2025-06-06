<script setup>
import { ref } from 'vue'
import { useSkewOnScroll } from '@/composables/useSkewOnScroll'
import { useStickyPanels } from '@/composables/useStickyPanels'
const { reservas } = usePagesStore()

// MODAL
let showModal = ref(true)

// SkewScroll
useSkewOnScroll()
// StickyPanels
useStickyPanels()

// meta
usePageHead({
  title: reservas.title,
  seo: reservas.seo,
})

</script>
<template>
  <div id="reservas">
    <main>
      <HeroSection>
        <h1>{{ reservas.title }}</h1>
        <SanityContent :blocks="reservas.introTerms" />
      </HeroSection>
      <div class="main-content">
        <div v-if="reservas.bannerUrgent !== null" class="skew">
          <AppModal :budskap="reservas" v-show="showModal" @close-modal="showModal = false" />
        </div>
        <section class="max-w-6xl mx-auto px-[2vw] py-5 md:py-10 xl:px-0">
          <h1 class="sr-only">{{ reservas.title }}</h1>
          <ReservasConditions>
            <template #header>
              <ConditionsIntro :title="reservas.reservasIntro.title" class="skew" />
            </template>
            <template #default>
              <Conditions :conditions="reservas.conditions.conditions" />
            </template>
          </ReservasConditions>
        </section>
      </div>
    </main>
    <aside>
      <LazyUniverseCallBadge />
    </aside>
    <AppFooter />
  </div>
</template>
