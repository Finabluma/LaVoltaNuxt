<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['toggle'])

function onClick() {
  emit('toggle')
}
</script>

<template>
  <button @click="onClick"
    class="fixed bottom-3 right-3 bg-white/80 dark:bg-secondark/80 text-xl p-2 rounded-full drop-shadow-md"
    title="Cambiar preferencias de cookies">
    <SVGCookie />
  </button>
</template>
