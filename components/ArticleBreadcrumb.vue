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
  <nav id="breadcrumb" aria-label="Breadcrumb">
    <div class="l-center">
      <div class="l-cluster">
        <ol class="breadcrumbs clean-list" role="list">
          <slot></slot>
        </ol>
      </div>
    </div>
  </nav>
</template>