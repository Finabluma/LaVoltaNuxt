<script setup>
const props = defineProps({
  conditions: {
    type: Object,
  },
})
</script>
<template>
  <div v-for="(condition, index) in conditions" :key="index" class="conditions ">
    <article class="skew card">
      <div class="py-2">
        <h3>
          {{ condition.title }}
        </h3>
        <SanityContent :blocks="condition.terms" />
      </div>
    </article>
  </div>
</template>
