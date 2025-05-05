<script setup>
  const props = defineProps({
    subtitle: {
      type: String,
    },
    content: {
      type: String,
    },
  })
  //GSAP
  const { gsap, ScrollTrigger } = useGsap()

  function intro() {
    let q = gsap.utils.selector('.intro_inner')
    let tl = gsap
      .timeline()
      .to(q('h1'), { y: '+=10', autoAlpha: 0 })
      .to(q('p'), { autoAlpha: 0, y: '+=60' }, '-=0.5')
    ScrollTrigger.create({
      trigger: '.intro_wrapper',
      start: 'top top',
      pin: true,
      pinSpacing: false,
      scrub: true,
      animation: tl,
    })

    return tl
  }

  defineExpose({
    intro,
  })
</script>
<template>
  <div class="intro">
    <div class="intro_wrapper">
      <div class="intro_inner">
        <h1>
          {{ subtitle }}
        </h1>

        <div class="inner__items">
          <p>{{ content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .intro {
    @apply relative
    w-full
    py-8
    mx-auto;

    .intro_inner {
      @apply mx-auto
      w-full
      sm:max-lg:w-10/12
      lg:w-8/12;
    }
  }
</style>
