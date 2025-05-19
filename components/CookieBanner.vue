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
  <div class="cookies-banner">
    <div class="inner">
      <p>
        Usamos <b>Google Analytics</b> para analizar el uso de nuestro sitio.
        <b>¿Aceptas el uso de cookies para estos fines?</b>
      </p>
      <div class="buttons">
        <button @click="onAccept" ar>Aceptar</button>
        <button @click="onReject">Rechazar</button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .cookies-banner {
    @apply w-full
    fixed
    bottom-0
    z-40
    bg-white
    dark:bg-secondark
    flex
    justify-center
    items-center
    drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)];

    .inner {
      @apply l-center
      flex
      flex-col
      py-2
      items-center
      md:flex-row
      md:justify-between
      md:items-center
      md:py-4;

      p {
        @apply text-sm
        text-center
        md:text-left;
      }

      .buttons {
        @apply flex
        items-center
        p-2
        md:p-0
        md:ml-4;

        button {
          @apply first:mr-2
            inline-flex
            font-semibold
            py-2
            px-4
            rounded-lg
            outline
            outline-2
            -outline-offset-1
            outline-firstlight
            dark:outline-firstdark
            bg-firstlight
            text-white
            dark:bg-firstdark    
            dark:text-secondark
            hover:bg-white
            hover:text-firstlight
            dark:hover:bg-secondark    
            dark:hover:text-firstdark;
        }
      }
    }
  }
</style>
