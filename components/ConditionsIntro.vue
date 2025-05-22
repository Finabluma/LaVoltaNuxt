<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="l-box l-box--no-border">
    <h1
      class="font-semibold uppercase text-3xl text-shadow-2xs text-center lg:text-left">
      {{ title }}</h1>
  </div>
</template>
