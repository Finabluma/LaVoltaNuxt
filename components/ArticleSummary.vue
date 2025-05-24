<script setup>
const props = defineProps({
  summary: {
    type: String,
  },
})
</script>
<template>
  <blockquote
    class="text-fluid-2xl me-0 pt-2.5 pb-5 pl-[4vw] max-w-3xl after:block after:w-10 after:h-1 after:bg-current after:mt-5 after:-ml-[4vw]">
    {{ summary }}
  </blockquote>
</template>
