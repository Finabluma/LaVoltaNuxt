<script setup>
  const props = defineProps({
    conditions: {
      type: Object,
    },
  })
</script>
<template>
  <div v-for="(condition, index) in conditions" :key="index">
    <article
      class="w-full l-box l-box--no-border bg-white dark:bg-secondark skew"
    >
      <h3 class="title-block mb-clus3lev capitalize">{{ condition.title }}</h3>
      <ElementsTextContent :blocks="condition.terms" />
    </article>
  </div>
</template>
