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
<style lang="postcss" scoped>
  .excerpt {
    @apply w-11/12 content-before;

    blockquote {
      @apply ml-3
      my-3
      pl-3
      font-mono
      italic
      border-l-4 
      border-l-current;
    }
  }
</style>
