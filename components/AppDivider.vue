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
      w-full
      left-0
      z-20;
    .is-divider {
      @apply w-full
      fill-white
      dark:fill-secondark
      drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)]
      dark:drop-shadow-[0_20px_35px_rgba(255,255,255,0.5)];
    }

    &.down,
    &.top {
      @apply -bottom-1;
    }
  }
</style>
