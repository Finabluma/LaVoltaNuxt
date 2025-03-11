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
    py-8
    px-6
    w-full
    min-[414px]:px-9
    sm:max-lg:px-16
    sm:max-lg:py-12
    lg:py-16
    lg:px-12;

    &::after {
      @apply content-['']
        block
        mx-auto
        w-1
        h-20
        mt-6
        bg-current;
    }

    .intro_inner {
      @apply text-center
      mx-auto
      w-full
      sm:max-lg:w-10/12
      lg:w-8/12;

      h1 {
        @apply font-light
        leading-none
        flex
        justify-center
        items-center
        lg:text-6xl
        lg:mb-5;

        &:after {
          @apply content-[''];
        }

        &::before {
          @apply content-[''];
        }

        &:after,
        &:before {
          @apply block      
          w-1/12
          h-1
          mt-0
          mx-3
          bg-current;
        }
      }

      .inner__items {
        @apply font-bold
        max-w-screen-md
        mx-auto
        py-3
        lg:px-10;
      }
    }
  }
</style>
