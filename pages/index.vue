<script setup>
import { ref } from 'vue'
const { home } = usePagesStore()

// const isFeatured = computed(() => {
//   return home.portada.portada.cover.filter((item) => item.featured !== false)
// })

// MODAL
let showModal = ref(true)

</script>
<template>
  <div id="home">
    <div v-if="home.bannerUrgent">
      <LazyAppModal :budskap="home" v-show="showModal" @close-modal="showModal = false" />
    </div>
    <main>
      <HeroSection>
        <h1>{{ home.title }}</h1>
        <p class="lead">{{ home.subtitle }}</p>
        <p>{{ home.content }}</p>
      </HeroSection>
      <div class="main-content">
        <CartaMenu :items="home.cartamenu" />
      </div>
    </main>
    <aside>
      <LazyGalleryReference :page="home" />
      <LazyOptionalContent :page="home" />
    </aside>
    <AppFooter />
  </div>
</template>
