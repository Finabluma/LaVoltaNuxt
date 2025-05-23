<script setup>
const props = defineProps({
  data: {
    type: Object,
  },
  category: {
    type: Object,
  },
})
</script>
<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="flex items-center flex-wrap" role="list">
      <slot></slot>
    </ol>
  </nav>
</template>
