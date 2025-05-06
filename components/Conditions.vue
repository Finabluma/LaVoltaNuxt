<script setup>
  const props = defineProps({
    conditions: {
      type: Object,
    },
  })
</script>
<template>
  <div v-for="(condition, index) in conditions" :key="index">
    <article class="l-box l-box--no-border bg-white dark:bg-secondark skew">
      <div class="component component--text">
        <h3 class="title-block">
          {{ condition.title }}
        </h3>
        <ElementsTextContent :blocks="condition.terms" />
      </div>
    </article>
  </div>
</template>
