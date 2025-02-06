<script setup>
  import { ScrollSmoother } from 'gsap/ScrollSmoother'
  const props = defineProps({
    settings: {
      type: String,
      required: false,
    },
  })

  let gsapSettings = props.settings

  /* GSAP */
  const { gsap, ScrollTrigger } = useGsap()

  let ctx = null
  let smoother = null

  onMounted(() => {
    ctx = gsap.context(() => {
      smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.2,
        effects: true,
        smoothTouch: 0,
        normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
        ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
        preventDefault: true, // prevents the default behavior of the browser when scrolling
      })
    })

    smoother.paused(true)
    smoother.scrollTo(0, false)

    function meineFunktion() {
      smoother.paused(false)
    }
    setTimeout(meineFunktion, 220)
  })

  // Clean up when the layout is onBeforeUnmount
  // onBeforeRouteLeave(() => {
  //   ScrollTrigger.killAll()
  //   smoother.paused(true)
  //   smoother.scrollTo(0, false)
  //   smoother.kill()
  //   ctx.revert()
  // })
</script>

<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .gsapinfo {
    background-color: red;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 2.5px;
    line-height: 9px;
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
    left: 0;
  }

  /* Boost GSAP Performance */
  #smooth-content {
    will-change: transform;
  }
</style>
