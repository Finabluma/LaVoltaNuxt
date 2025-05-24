<script setup>
  const props = defineProps({
    platos: {
      type: Array,
    },
  })
</script>
<template>
  <ul class="py-2">
    <li v-for="(plato, index) in platos" :key="index" class="text-fluid-body-lg ">
      {{ plato.title }}
    </li>
  </ul>
</template>
