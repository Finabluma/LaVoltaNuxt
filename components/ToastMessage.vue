<script setup>
  import { ref, watchEffect } from 'vue'

  const props = defineProps({
    message: String,
    visible: Boolean,
  })

  const show = ref(props.visible)

  watchEffect(() => {
    show.value = props.visible
  })
</script>

<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed bottom-20 right-4 z-50 bg-firstlight/90 dark:bg-firstdark/90 text-white dark:text-secondark px-4 py-2 rounded-lg shadow-md"
    >
      {{ message }}
    </div>
  </transition>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
