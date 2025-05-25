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
    <div class="panel-header w-full transition-all duration-300 px-0 py-2 md:py-3 cursor-pointer"
      @click="toggleAccordion">
      <slot name="header"></slot>
    </div>
    <div class="panel-body overflow-hidden h-auto px-0 lg:px-5">
      <slot></slot>
    </div>
  </div>
</template>
