<script setup>
const props = defineProps({
  summary: {
    type: String,
  },
})
</script>
<template>
  <blockquote class="leading-tight text-2xl me-0 py-5 max-w-4xl after:block after:w-10 after:h-1 after:bg-current after:mt-5 ">
    {{ summary }}
  </blockquote>
</template>
