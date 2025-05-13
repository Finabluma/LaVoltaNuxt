<script setup>
  import { ref, computed } from 'vue'
  const { home } = usePagesStore()
  const isFeatured = computed(() => {
    return home.portada.portada.cover.filter((item) => item.featured !== false)
  })
  let showModal = ref(true)
</script>
<template>
  <div class="page">
    <div v-if="home.bannerUrgent">
      <AppModal
        :budskap="home"
        v-show="showModal"
        @close-modal="showModal = false"
      />
    </div>
    <main>
      <HeroSection>
        <h2 class="title-page">{{ home.title }}</h2>
        <p class="lead">{{ home.subtitle }}</p>
        <p>{{ home.content }}</p>
      </HeroSection>
      <CartaMenu :items="home.cartamenu" />
      <!--  <div v-if="isFeatured.length > 0" class="articleHome">
        <div class="head">
          <h1>
            {{ home.portada.portada.title }}
          </h1>
        </div>
        <ArticleDestacado :item="isFeatured" />
      </div> -->
    </main>
    <aside class="crosslinks relative z-20 bg-white dark:bg-secondark">
      <div class="crosslinks-inner">
        <LazyGalleryReference :page="home" />
        <LazyOptionalContent :page="home" />
      </div>
    </aside>
    <AppFooter />
  </div>
</template>

