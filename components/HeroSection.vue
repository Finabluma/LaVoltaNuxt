<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  const props = defineProps({
    items: {
      type: Object,
    },
  })
  let main = ref(),
    ctx = ref()
  //GSAP
  const { gsap, ScrollTrigger } = useGsap()

  onMounted(() => {
    ctx = gsap.context((self) => {
      let tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            pin: '.hero-content',
            scrub: true,
            pinSpacing: false,
          },
        })
        .to('.not-sidebar > *', {
          yPercent: 10,
          autoAlpha: 0,
        })
      return tl
    }, main.value)
  })

  onUnmounted(() => {
    ctx.revert()
  })
</script>
<template>
  <div class="u-full-width hero">
    <div class="hero-content">
      <div class="bg" role="presentation"></div>
      <div class="l-center">
        <div class="l-sidebar">
          <div>
            <div class="not-sidebar">
              <div class="component component--text">
                <slot></slot>
              </div>
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
      bg-azulejos
      bg-cover;

      &:before {
        @apply content-['']
        absolute
        top-0
        w-full
        h-full
        backdrop-contrast-75
        bg-white/90
        mix-blend-hard-light
        dark:bg-gradient-to-b
        dark:from-firstdark/60
        dark:via-firstdark/90
        dark:to-firstdark
        dark:mix-blend-darken;
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
