<script setup>
  const props = defineProps({
    data: {
      type: Object,
    },
    category: {
      type: Object,
    },
  })
</script>
<template>
  <nav aria-label="Breadcrumb">
    <ol role="list">
      <slot></slot>
    </ol>
  </nav>
</template>
