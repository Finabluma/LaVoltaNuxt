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
          snap: 1,
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
      pt-5
      pb-8
      px-5
      mx-auto
      sm:text-center
      sm:p-8
      md:py-10
      lg:w-9/12
      lg:pt-5
      lg:pb-10;

      h2 {
        @apply leading-none
        mb-6
        capitalize
        font-coordinates
        text-slate-500
        dark:text-slate-400      
        min-[375px]:text-6xl
        sm:text-6xl
        lg:text-6xl
        xl:text-7xl;
      }

      .inner__items {
        @apply text-balance
        content-after
        content-before
        text-slate-500
        dark:text-slate-400;
        p {
          @apply font-sans
          text-lg 
          lg:text-xl;
        }

        &::after,
        &::before {
          @apply content-['']
          block
          w-4
          h-4
          md:mx-auto
          bg-slate-800/20
          dark:bg-slate-400;
        }

        &::after {
          @apply mt-6 mb-4;
        }

        &::before {
          @apply mt-6 mb-4;
        }
      }
    }
  }
</style>
