<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    layout: {
      type: String,
    },
  })
  const bg = computed(() => {
    return {
      down: props.layout == 'down',
      top: props.layout == 'top',
    }
  })
</script>
<template>
  <div class="separator" :class="bg">
    <svg
      viewBox="0 0 1366 74.28"
      class="is-divider"
      preserveAspectRatio="xMidYMax meet"
    >
      <path d="M0 0v74.28h1366V0s-279.5 60-683 60S0 0 0 0Z" />
    </svg>
  </div>
</template>
<style lang="postcss" scoped>
  .separator {
    @apply absolute
      w-screen
      left-0
      z-20;
    .is-divider {
      @apply w-full
      fill-slate-50
      dark:fill-slate-600;
    }

    &.down,
    &.top {
      @apply -bottom-1;
    }
  }
</style>
