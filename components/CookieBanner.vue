<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['accept', 'reject'])

function onAccept() {
  emit('accept')
}

function onReject() {
  emit('reject')
}
</script>

<template>
  <div
    class="fixed w-full bottom-0 z-30 bg-white dark:bg-secondark flex justify-center items-center drop-shadow-cookies">
    <div
      class="max-w-6xl mx-auto flex flex-col items-center p-2 md:flex-row md:justify-between md:items-center md:py-4">
      <p class="text-fluid-base text-center md:text-left">
        Usamos <b>Google Analytics</b> para analizar el uso de nuestro sitio.
        <b>¿Aceptas el uso de cookies para estos fines?</b>
      </p>
      <div class="flex items-center p-2 md:p-0 md:ml-4">
        <button @click="onAccept" class="cookies-buttons">Aceptar</button>
        <button @click="onReject" class="cookies-buttons">Rechazar</button>
      </div>
    </div>
  </div>
</template>
