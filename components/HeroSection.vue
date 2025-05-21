<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
const props = defineProps({
  items: Object,
})

const { gsap, ScrollTrigger } = useGsap()
let main = ref()
let ctx = null
let tl = null
let mm

function pinHero(){
  tl = gsap.timeline().to('.not-sidebar > *',{
    yPercent:10,
    autoAlpha:0
  })
  ScrollTrigger.create({
    id:'pin-hero-st',
    trigger:'.hero-content',
    start:'top top',
    pin:'.hero-content',
    pinSpacing:false,
    scrub:true,
    animation:tl
  })
}

onMounted(() => {
  ctx = gsap.context(() => {    
    mm = gsap.matchMedia()
    mm.add("(min-width: 1024px)", () => {
      pinHero()
    })
  }, main.value)
})

onUnmounted(() => {
  ctx.revert()
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
