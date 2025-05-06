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
    <h1 class="title-page--cameo">{{ title }}</h1>
  </div>
</template>
