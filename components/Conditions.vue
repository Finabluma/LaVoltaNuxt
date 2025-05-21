<script setup>
  const props = defineProps({
    conditions: {
      type: Object,
    },
  })
</script>
<template>
  <div v-for="(condition, index) in conditions" :key="index" class="conditions">
    <article class=" bg-white dark:bg-secondark skew">
      <div class="component component--text">
        <h3 class="title-block">
          {{ condition.title }}
        </h3>
        <SanityContent :blocks="condition.terms" />
      </div>
    </article>
  </div>
</template>
<style lang="postcss" scoped>
  .conditions article{
    @apply px-2
    py-3
    md:py-5;
  }
</style>
