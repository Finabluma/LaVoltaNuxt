<script setup>
  const props = defineProps({
    summary: {
      type: String,
    },
  })
</script>
<template>
  <div class="excerpt">
    <blockquote>
      {{ summary }}
    </blockquote>
  </div>
</template>
