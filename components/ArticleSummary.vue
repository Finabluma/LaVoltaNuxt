<script setup>
  const props = defineProps({
    summary: {
      type: String,
    },
  })
</script>
<template>
  <blockquote class="component component--quote">
    {{ summary }}
  </blockquote>
</template>
