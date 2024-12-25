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
      .timeline({
        scrollTrigger: {
          trigger: '.intro',
          start: 'top top',
          pin: true,
          scrub: true,
          pinSpacing: false,
        },
      })
      .to(q('h2'), { y: '+=80', autoAlpha: 0 })
      .to(q('p'), { autoAlpha: 0, y: '+=60' }, '-=0.5')

    return tl
  }

  defineExpose({
    intro,
  })
</script>
<template>
  <div class="intro">
    <div class="intro_inner">
      <h2>
        {{ subtitle }}
      </h2>

      <div class="inner__items">
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .intro {
    @apply relative
    w-screen
    bg-slate-50
    dark:bg-slate-600;

    .intro_inner {
      @apply w-full
      p-8
      mx-auto
      sm:text-center
      sm:p-8
      md:py-10
      lg:w-8/12
      lg:py-14;

      h2 {
        @apply leading-none
        mb-6
        capitalize
        font-mono
        text-6xl
        lg:text-5xl
        xl:text-6xl;
      }

      .inner__items {
        @apply text-balance
        content-after
        content-before;
        p {
          @apply text-xl lg:text-xl;
        }

        &::after,
        &::before {
          @apply block
          w-1/12
          h-2;
        }

        &::after {
          @apply mt-6 mb-4;
        }

        &::before {
          @apply mt-6 mb-4 bg-slate-400;
        }
      }
    }
  }
</style>
