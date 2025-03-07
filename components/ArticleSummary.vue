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
    @apply w-10/12
    mx-auto;

    blockquote {
      @apply my-3
      font-coordinates
      text-base;

      &:after {
        @apply content-['']
        block
        h-0.5
        w-10
        mt-2
        bg-primary;
      }
    }
  }
</style>
