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

