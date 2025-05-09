<script setup>
  import { computed } from 'vue'
  const { revista } = usePagesStore()

  const isFeatured = computed(() => {
    return revista.portada.cover.filter((item) => item.featured !== false)
  })

  const notFeatured = computed(() => {
    return revista.portada.cover.filter((item) => item.featured === false)
  })

  // meta
  usePageHead({
    title: revista.title,
    seo: revista.seo,
  })
</script>
<template>
  <div class="page">
    <div v-if="revista.bannerUrgent !== null">
      <AppModal
        :budskap="revista"
        v-show="showModal"
        @close-modal="showModal = false"
      />
    </div>
    <main>
      <HeroSection>
        <h1 class="title-page">{{ revista.title }}</h1>
      </HeroSection>
      <section class="revista">
        <div v-if="isFeatured.length > 0" class="isDestacado">
          <ArticleDestacado :item="isFeatured" :title="revista.portada.title" />
        </div>
        <div v-if="notFeatured.length > 0" class="isPortada">
          <ArticlesPortada :items="notFeatured" />
        </div>
      </section>
    </main>
    <aside v-if="revista.optionalContent !== null">
      <OptionalContent :page="revista" />
    </aside>
    <AppFooter />
  </div>
</template>
