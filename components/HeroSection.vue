<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
const props = defineProps({
  items: Object,
})
let main = ref()
let ctx = null

const { gsap, ScrollTrigger } = useGsap()
let tl = null
let bgPinTrigger = null
const triggerId = 'hero-scroll-trigger'
const bgTriggerId = 'bg-pin-trigger'

function initScrollAnimation() {
  // Mata trigger de animación de texto
  const existing = ScrollTrigger.getById(triggerId)
  if (existing) existing.kill()
  if (tl) tl.kill()

  const targets = main.value?.querySelectorAll('.not-sidebar > *')
  const pinTarget = main.value?.querySelector('.hero-content')

  if (!targets.length || !pinTarget) return

  tl = gsap.timeline().to(targets, {
    yPercent: 10,
    autoAlpha: 0,
  })

  ScrollTrigger.create({
    id: triggerId,
    trigger: pinTarget,
    start: 'top top',
    pin: pinTarget,
    scrub: true,
    pinSpacing: false,
    invalidateOnRefresh: true,
    animation: tl,
  })
}

function initBgPin() {
  const bg = main.value?.querySelector('.bg')
  if (!bg) return

  // Mata trigger anterior de fondo
  if (bgPinTrigger) {
    bgPinTrigger.kill()
    bgPinTrigger = null
  }

  // Sólo pin en desktop (1024px o más)
  if (window.innerWidth >= 1024) {
    bgPinTrigger = ScrollTrigger.create({
      id: bgTriggerId,
      trigger: main.value,
      start: 'top top',
      end: 'bottom bottom',
      pin: bg,
      pinSpacing: false,
      invalidateOnRefresh: true,
      onEnter: () => {
        bg.style.position = 'fixed'
        bg.style.top = '0'
        bg.style.left = '0'
        bg.style.width = '100%'
        bg.style.height = window.innerHeight + 'px'
      },
      onLeaveBack: () => {
        bg.style.position = 'absolute'
        bg.style.height = '100%'
      }
    })
  } else {
    // En móvil no pin, dejamos el bg con position absolute
    bg.style.position = 'absolute'
  }
}

function handleResize() {
  setTimeout(async () => {
    await nextTick()
    initScrollAnimation()
    initBgPin()
    ScrollTrigger.getById(triggerId)?.refresh()
    ScrollTrigger.getById(bgTriggerId)?.refresh()
  }, 300)
}

onMounted(async () => {
  await nextTick()
  ctx = gsap.context(() => {
    initScrollAnimation()
    initBgPin()
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
  }, main.value)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('orientationchange', handleResize)
  ScrollTrigger.getById(triggerId)?.kill()
  if (tl) tl.kill()
  if (bgPinTrigger) bgPinTrigger.kill()
})

onUnmounted(() => {
  if (ctx && ctx.revert) ctx.revert()
})
</script>


<template>
  <div ref="main" class="u-full-width hero">
    <div class="hero-content">
      <!-- <div class="bg" role="presentation"></div> -->
      <div class="l-center">
        <div class="l-sidebar">
          <div class="not-sidebar">
            <div class="component--text">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppDivider class="down" />
  </div>
</template>
<style lang="postcss">
.hero {
  @apply relative;

  .hero-content {
    @apply relative;
  }

  .bg {
    @apply absolute top-0 w-full h-full z-10 bg-azulejos2 dark:bg-azulejos bg-cover;

    &:before {
      @apply content-[''] absolute top-0 w-full h-full bg-gradient-to-b from-white/90 via-white/90 to-white mix-blend-color-dodge dark:bg-gradient-to-b dark:from-secondark dark:to-black dark:backdrop-brightness-90 dark:mix-blend-multiply;
    }
  }
}

.hero .hero-content .l-center {
  @apply relative z-20 lg:py-10;
}

.hero .l-sidebar>*,
.hero .l-sidebar>*>* {
  @apply m-0;
}

.hero .l-sidebar .sidebar {
  @apply basis-96;
}

.hero .l-sidebar .not-sidebar {
  @apply dark:text-secondark pt-28 sm:pb-16 lg:pt-20 pb-12 mx-auto lg:max-w-5xl lg:px-10;
}

.hero .lead {
  @apply mb-6 mt-0 font-semibold;
}

.hero h1,
.hero h2 {
  @apply mb-clus3lev;
}

.hero+* {
  @apply pt-8 lg:pt-14;
}
</style>
