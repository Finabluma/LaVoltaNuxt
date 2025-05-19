<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
const props = defineProps({
  items: Object,
})
let main = ref()
let ctx = ref()

const { gsap, ScrollTrigger } = useGsap()
let tl = null
const triggerId = 'hero-scroll-trigger'

function initScrollAnimation() {
  // Mata solo el trigger con ese ID
  const existing = ScrollTrigger.getById(triggerId)
  if (existing) existing.kill()
  if (tl) tl.kill()

  // 🛡️ Limitar la selección al componente actual
  const targets = main.value?.querySelectorAll('.not-sidebar > *')
  const pinTarget = main.value?.querySelector('.hero-content')

  if (!targets.length || !pinTarget) {
    console.warn('⚠️ Elementos no encontrados. Cancelando animación.')
    return
  }

  tl = gsap.timeline().to(targets, {
    yPercent: 10,
    autoAlpha: 0,
  })

  ScrollTrigger.create({
    id: triggerId, // ID único
    trigger: pinTarget,
    start: 'top top',
    pin: pinTarget,
    scrub: true,
    pinSpacing: false,
    invalidateOnRefresh: true,
    animation: tl,
  })
}

function handleResize() {
  setTimeout(async () => {
    await nextTick()
    initScrollAnimation()
    ScrollTrigger.getById(triggerId)?.refresh()
  }, 400)
}

onMounted(async () => {
  await nextTick()
  ctx = gsap.context(() => {
    initScrollAnimation()
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
  }, main.value)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('orientationchange', handleResize)
  ScrollTrigger.getById(triggerId)?.kill()
  if (tl) tl.kill()
})

onUnmounted(() => {
  if (ctx && ctx.revert) ctx.revert()
})
</script>

<template>
  <div ref="main" class="u-full-width hero">
    <div class="hero-content">
      <div class="bg" role="presentation"></div>
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
    .hero-content {
      @apply relative;
    }

    .bg {
      @apply absolute
      w-full
      h-full
      z-10
      bg-azulejos2
      dark:bg-azulejos
      bg-cover;

      &:before {
        @apply content-['']
        absolute
        top-0
        w-full
        h-full
        bg-gradient-to-b
        from-white/90
        via-white/90
        to-white
        mix-blend-color-dodge
        dark:bg-gradient-to-b
        dark:from-secondark
        dark:to-black
        dark:backdrop-brightness-90
        dark:mix-blend-multiply;
      }
    }
  }

  .hero .hero-content .l-center {
    @apply relative
    z-20
    lg:py-10;
  }

  .hero .l-sidebar > *,
  .hero .l-sidebar > * > * {
    @apply m-0;
  }

  .hero .l-sidebar .sidebar {
    @apply basis-96;
  }

  .hero .l-sidebar .not-sidebar {
    @apply dark:text-secondark
    pt-20
    pb-16
    mx-auto
    lg:max-w-5xl
    lg:px-10;
  }

  .hero .lead {
    @apply mb-6
    mt-0
    font-semibold;
  }

  .hero h1,
  .hero h2 {
    @apply mb-clus3lev;
  }

  .hero + * {
    @apply pt-8
    lg:pt-14;
  }
</style>
