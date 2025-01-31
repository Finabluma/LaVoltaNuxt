<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    page: {
      type: Object,
    },
  })
  const estilos = computed(() => {
    return props.page.optionalContent.bannerBody.length == 1
      ? 'single'
      : 'compound'
  })

  const optional = computed(() => {
    const banner = props.page.optionalContent.bannerBody
    const article = props.page.optionalContent.article
    return banner.concat(article)
  })
</script>
<template>
  <div v-if="page.optionalContent !== null" :class="estilos">
    <div class="content_wrapper">
      <div
        v-for="(item, index) in optional"
        :key="item.id"
        :class="index == 0 ? 'first' : 'second'"
      >
        <LazyBannerBottom :optional="item" />
      </div>
    </div>
  </div>
</template>
