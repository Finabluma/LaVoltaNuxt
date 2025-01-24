<script setup>
  const props = defineProps({
    page: {
      type: Object,
    },
  })
</script>
<template>
  <div v-if="page.galleryRef !== null">
    <LazySlideShow
      :title="page.galleryRef.description"
      :images="page.galleryRef.gallery.images"
    />
  </div>
</template>
<style></style>
