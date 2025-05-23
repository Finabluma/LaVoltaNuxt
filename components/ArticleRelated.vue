<script setup>
const props = defineProps({
  related: {
    type: Object,
  },
})
</script>
<template>
  <div class="l-stack p-4">
    <h2 class="block-title--after mb-0 px-4">Continúa leyendo</h2>
    <div class="grid sm:grid-cols-2 gap-4">
      <div v-for="item in related" :key="item.id">
        <ArticleTeaser :article="item" />
      </div>
    </div>
  </div>
</template>
