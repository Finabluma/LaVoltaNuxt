<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
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

// function handleResize() {
//   setTimeout(() => {
//     ScrollTrigger?.getById('pin-hero-st').refresh()
//   }, 300)
// }

onMounted(() => {
  ctx = gsap.context(() => {
    pinHero()
  }, main.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>
<template>
  <div ref="main" class="hero-section">
    <div class="hero-content">
      <div>
      </div>
      <div>
        <div class="l-box l-box--no-border">
          <div class="component--text ">
            <div>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <AppDivider /> -->
  </div>
</template>
