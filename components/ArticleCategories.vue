<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  tags: {
    type: Object,
  },
})
</script>
<template>
  <ul class="flex flex-wrap  *:mr-1">
    <li v-for="item in tags" :key="item.id" class="flex text-fluid-base">
      <LazyTags class="w-4 grow" />
      <span>{{ item.title }}</span>
    </li>
  </ul>
</template>
