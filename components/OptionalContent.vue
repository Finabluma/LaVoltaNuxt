<script setup>
  const props = defineProps({
    page: {
      type: Object,
    },
  })
</script>
<template>
  <div v-if="page.optionalContent !== null" class="banner">
    <div class="banner_wrapper">
      <div
        v-for="(anuncio, index) in page.optionalContent.bannerBody"
        :key="anuncio.id"
        :class="index == 0 ? 'destacado' : 'dos'"
      >
        <LazyBanner :anuncio="anuncio" />
      </div>
    </div>
  </div>
</template>
