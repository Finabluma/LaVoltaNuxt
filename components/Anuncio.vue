<script setup>
  const props = defineProps({
    image: {
      type: Object,
    },
    title: {
      type: String,
    },
    banner: {
      type: String,
    },
  })
</script>
<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>
