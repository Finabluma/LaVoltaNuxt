<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
  })
</script>
<template>
  <div class="l-box l-box--no-border mb-clus3lev intro-conditions">
    <p class="title-page--cameo">{{ title }}</p>
  </div>
</template>
