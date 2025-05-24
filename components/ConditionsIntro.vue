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
      class="font-semibold text-fluid-2xl text-shadow-2xs text-slate-300 dark:text-firstdark text-center lg:text-left">
      {{ title }}</h1>
  </div>
</template>
