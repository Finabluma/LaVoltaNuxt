<script setup>
  import { ref, computed } from 'vue'
  const visible = ref(false)
  const accordion = computed(() => {
    return visible.value ? 'is-open' : 'is-closed'
  })

  function toggleAccordion() {
    visible.value = !visible.value
  }
</script>
<template>
  <div class="accordion-wrapper" :class="accordion">
    <div class="panel-header cursor-pointer" @click="toggleAccordion">
      <slot name="header"></slot>
    </div>
    <div class="panel-body">
      <div class="panel-items">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .accordion-wrapper {
    .panel-header {
      @apply w-full 
      transition-all
      duration-300
      p-1;
    }

    .panel-body {
      @apply overflow-hidden
      h-auto
      px-1;
    }

    &.is-closed {
      .panel-body {
        @apply px-10 max-h-0;
      }
    }

    &:last-child .panel-header {
      @apply border-none;
    }
  }
</style>
