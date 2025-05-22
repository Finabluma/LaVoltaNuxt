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

function pinHero() {
  tl = gsap.timeline().to('.component--text', {
    yPercent: 10,
    autoAlpha: 0
  })
  ScrollTrigger.create({
    id: 'pin-hero-st',
    trigger: '.hero-content',
    start: 'top top',
    pin: '.hero-content',
    pinSpacing: false,
    scrub: true,
    animation: tl
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
  <div ref="main" class="w-screen relative">
    <div class="hero-content w-full h-full">
      <div class="bg-hero">
      </div>
      <div class="container pt-24 pb-10 lg:py-24 relative z-20">
        <div class="l-box l-box--no-border">
          <div class="component--text dark:text-secondark">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <AppDivider />
  </div>
</template>
