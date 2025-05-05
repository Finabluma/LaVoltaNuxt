<script setup>
  const props = defineProps({
    platos: {
      type: Array,
    },
  })
</script>
<template>
  <ul class="l-box l-box--no-padding l-box--no-border">
    <li v-for="(plato, index) in platos" :key="index">
      {{ plato.title }}
    </li>
  </ul>
</template>
