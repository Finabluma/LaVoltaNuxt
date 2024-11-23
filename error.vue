<script setup>
  const props = defineProps({
    error: Object,
  })
</script>

<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <NuxtLink to="/">Vuelta a Inicio</NuxtLink>
  </div>
</template>
