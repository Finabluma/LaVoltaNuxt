<script setup>
  const props = defineProps({
    platos: {
      type: Array,
    },
  })
</script>
<template>
  <ul>
    <li v-for="(plato, index) in platos" :key="index">
      {{ plato.title }}
    </li>
  </ul>
</template>
<style lang="postcss" scoped>
  ul {
    @apply pt-3;
    li {
      @apply font-sans pb-2;
    }
  }
</style>
