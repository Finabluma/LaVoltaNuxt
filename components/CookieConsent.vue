<script setup>
  import { ref, onMounted } from 'vue'
  import { useCookie } from '#app'

  const consent = useCookie('banner-dismissed', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 30,
  })

  const showBanner = ref(false)
  const showToggle = ref(false)
  const toastMessage = ref('')
  const showToast = ref(false)

  const { public: config } = useRuntimeConfig()
  const GA_ID = config.GA_ID

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

  function showToastMessage(message) {
    toastMessage.value = message
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  }

  function accept() {
    consent.value = true
    showBanner.value = false
    showToggle.value = true
    loadAnalytics()
    showToastMessage('Has aceptado las cookies 🍪')
  }

  function reject() {
    consent.value = false
    showBanner.value = false
    showToggle.value = true
    showToastMessage('Has rechazado las cookies')
  }

  function toggleBanner() {
    showBanner.value = !showBanner.value
    showToggle.value = !showToggle.value
  }

  onMounted(() => {
    if (consent.value === null) {
      showBanner.value = true
      showToggle.value = false
    } else {
      showBanner.value = false
      showToggle.value = true
      if (consent.value === true) loadAnalytics()
    }
  })
</script>

<template>
  <CookieBanner v-if="showBanner" @accept="accept" @reject="reject" />
  <CookieToggle v-if="showToggle" @toggle="toggleBanner" />
  <ToastMessage :message="toastMessage" :visible="showToast" />
</template>
