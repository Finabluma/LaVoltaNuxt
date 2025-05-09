<script setup>
  const props = defineProps({
    items: {
      type: Object,
    },
  })
</script>
<template>
  <div class="u-full-width hero">
    <div class="l-center">
      <div class="l-sidebar">
        <div>
          <div class="not-sidebar">
            <div class="component component--text">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
