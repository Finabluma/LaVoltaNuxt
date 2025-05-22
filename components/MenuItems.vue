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
