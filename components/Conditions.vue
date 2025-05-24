<script setup>
const props = defineProps({
  conditions: {
    type: Object,
  },
})
</script>
<template>
  <div v-for="(condition, index) in conditions" :key="index" class="conditions ">
    <article class="skew bg-white dark:bg-secondark after:w-1/12 after:h-0.5 after:block after:ml-0 after:bg-current">
      <div class="component component--text l-box l-box--no-border ">
        <h3>
          {{ condition.title }}
        </h3>
        <SanityContent :blocks="condition.terms" />
      </div>
    </article>
  </div>
</template>
