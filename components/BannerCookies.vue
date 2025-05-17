<script setup>
  import { ref, onMounted } from 'vue'
  import { useCookie } from '#app'

  const consent = useCookie('banner-dismissed', {
    default: () => null, // null si no hay cookie (primera visita)
    maxAge: 60 * 60 * 24 * 30,
  })
  const GA_ID = useRuntimeConfig().public.GA_ID
  const consentGiven = ref(false)
  const showBanner = ref(false)

  function accept() {
    consent.value = true
    consentGiven.value = true
    showBanner.value = false
    loadAnalytics()
    showToastMessage('Has aceptado las cookies 🍪')
  }

  function reject() {
    consent.value = false
    consentGiven.value = true
    showBanner.value = false
    showToastMessage('Has rechazado las cookies ❌')
  }

  function loadAnalytics() {
    if (!GA_ID) return
    if (window.gtag) return

    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.async = true
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', GA_ID, {
      cookie_flags: 'SameSite=Lax;Secure',
      allow_ad_personalization_signals: false,
    })
  }

  const toastMessage = ref('')
  const showToast = ref(false)

  function showToastMessage(msg) {
    toastMessage.value = msg
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  }

  function toggleBanner() {
    showBanner.value = true
    consentGiven.value = false // oculta toggle mientras el banner esté visible
  }

  onMounted(() => {
    // Si cookie es true o false -> consentimiento dado
    consentGiven.value = consent.value === true || consent.value === false

    // Mostrar banner solo si NO hay cookie (usuario nuevo)
    if (consent.value !== true && consent.value !== false) {
      showBanner.value = true
    } else if (consent.value === true) {
      loadAnalytics()
    }
  })
</script>

<template>
  <div v-if="showBanner" class="cookies-banner">
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

  <!-- Toggle solo si ya hubo consentimiento -->
  <button
    v-if="consentGiven"
    @click="toggleBanner"
    class="fixed bottom-4 right-4 z-50 bg-white dark:bg-secondark text-xl p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    title="Cambiar preferencias de cookies"
  >
    🍪
  </button>

  <div
    v-if="showToast"
    class="fixed bottom-20 right-4 z-50 bg-black/90 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300"
  >
    {{ toastMessage }}
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

  .cookie-toggle {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 30;
  }

  .cookie-toggle button {
    @apply p-3;
  }
</style>
