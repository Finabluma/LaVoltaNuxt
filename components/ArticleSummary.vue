<script setup>
  const props = defineProps({
    summary: {
      type: String,
    },
  })
</script>
<template>
  <blockquote class="component component--quote max-w-prose mx-auto">
    {{ summary }}
  </blockquote>
</template>
