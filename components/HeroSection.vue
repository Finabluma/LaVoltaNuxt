<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  const props = defineProps({
    items: {
      type: Object,
    },
  })
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
        <div>
          {{ items.title }}
        </div>
      </div>
    </div>
    <div class="inner_hero">
      <div v-if="items.mainImage">
        <ElementsMediaImageItem
          :src="items.mainImage.asset._ref"
          :alt="items.mainImage.alt"
          height="450"
          sizes="xs:100vw sm:100vw md:100vw lg:100vw"
          :modifiers="{
            crop: items.mainImage.crop,
            hotspot: items.mainImage.hotspot,
            q: 80,
          }"
          fit="cover"
          format="webp"
        />
      </div>
      <div v-else class="noImg" />
    </div>
  </div>
</template>
<style lang="postcss">
  .hero {
    @apply relative
    h-[20vh]
    sm:h-[35vh]
    md:h-[28dvh]
    md:landscape:h-[33dvh]
    lg:landscape:h-[30dvh]
    lg:portrait:h-[20dvh]
    xl:landscape:h-[35dvh]
    2xl:landscape:h-[40dvh]
    overflow-y-hidden;

    .content {
      @apply absolute z-10 w-full h-full flex justify-center items-end;

      .inner {
        @apply text-lg 
        font-coordinates
        font-semibold 
        uppercase
        text-slate-300
        dark:text-slate-300/80
        py-[5%] 
        w-9/12 
        mx-auto 
        sm:w-6/12 
        md:w-7/12 
        lg:w-6/12;
      }
    }

    .inner_hero {
      @apply relative
      w-full h-full content-before;

      &:before {
        @apply content-['']
        w-full
        h-full
        absolute
        top-0
        left-0
        bg-gradient-to-b
        from-slate-600/30
        to-slate-700
        dark:from-slate-600/30
        dark:to-slate-800;
      }

      .noImg {
        @apply w-full
        h-full
        bg-azulejos
        bg-cover
        content-before;

        &:before {
          @apply w-full
          h-[50vh]
          absolute
          top-0
          left-0
          bg-gradient-to-b
          from-slate-200/20
          to-slate-200
          dark:from-slate-200/10
          dark:to-slate-200/90;
        }
      }
    }
  }
</style>
