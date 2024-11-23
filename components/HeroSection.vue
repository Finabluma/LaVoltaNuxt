<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  //GSAP
  const { gsap, ScrollTrigger } = useGsap()
  let main = ref(),
    ctx = ref(null)

  function smTitle() {
    let tl = gsap.timeline().to('.content .inner', {
      yPercent: 25,
      autoAlpha: 0,
    })
    ScrollTrigger.create({
      trigger: '.inner_hero',
      start: 'top top',
      pin: true,
      scrub: true,
      pinSpacing: false,
      animation: tl,
    })
    ScrollTrigger.create({
      trigger: '.content',
      start: 'top top',
      pin: true,
      pinSpacing: false,
      scrub: true,
      animation: tl,
    })
  }

  onMounted(() => {
    ctx = gsap.context((self) => {
      smTitle()
    }, main.value)
  })
  onUnmounted(() => {
    ctx.revert()
  })
</script>
<template>
  <div class="hero" ref="main">
    <div class="content">
      <div class="inner">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="inner_hero">
      <slot />
    </div>
  </div>
</template>
<style lang="postcss">
  .hero {
    @apply relative
    h-[18dvh]
    sm:h-[35vh]
    md:h-[28dvh]
    md:landscape:h-[33dvh]
    lg:landscape:h-[30dvh]
    lg:portrait:h-[20dvh]
    xl:landscape:h-[35dvh]
    2xl:landscape:h-[40dvh]
    overflow-y-hidden;

    .content {
      @apply absolute z-10 w-full h-full flex justify-center items-center;

      .inner {
        @apply text-lg font-sans text-slate-300 pt-[10%] w-9/12 mx-auto sm:w-6/12 md:w-7/12 lg:w-6/12;
      }
    }

    .inner_hero {
      @apply relative
      w-full h-full content-before;

      &:before {
        @apply w-full
        h-full
        absolute
        top-0
        left-0
        bg-gradient-to-b
        from-slate-600/20
        to-slate-600/80
        dark:from-slate-600/30
        dark:to-slate-600/70;
      }
    }
  }
</style>
