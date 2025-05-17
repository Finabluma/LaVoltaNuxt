<script setup>
  import { ref, onMounted } from 'vue'
  const consent = useCookie('banner-dismissed', {
    default: () => false,
    maxAge: 60 * 60 * 24 * 30, // ← Caducidad de 30 días
  })

  const consentGiven = ref(consent.value === true)
  const { public: config } = useRuntimeConfig()
  const GA_ID = config.GA_ID

  function accept() {
    consent.value = true
    consentGiven.value = true
    loadAnalytics()
  }

  function reject() {
    consent.value = false
    consentGiven.value = true
  }
  function loadAnalytics() {
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.async = true
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())

    gtag('config', GA_ID, {
      cookie_flags: 'SameSite=Lax;Secure',
      allow_ad_personalization_signals: false,
    })
  }

  onMounted(() => {
    // Si ya aceptó antes, cargar analytics automáticamente
    if (consent.value === true) {
      loadAnalytics()
    }
  })
</script>

<template>
  <div v-if="!consentGiven" class="cookies">
    <div class="inner">
      <p>
        Usamos <b>Google Analytics</b> para analizar el uso de nuestro sitio.
        <b>¿Aceptas el uso de cookies para estos fines?</b>
      </p>
      <div class="buttons">
        <button @click="accept">Aceptar</button>
        <button @click="reject">Rechazar</button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .cookies {
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
