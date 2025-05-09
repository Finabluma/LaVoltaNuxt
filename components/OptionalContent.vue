<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    page: {
      type: Object,
    },
  })
  const estilos = computed(() => {
    return props.page.optionalContent.optionalContent.length == 1
      ? 'single'
      : 'compound'
  })

  const optional = computed(() => {
    return props.page.optionalContent.optionalContent
  })
</script>
<template>
  <div v-if="page.optionalContent" :class="estilos">
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
