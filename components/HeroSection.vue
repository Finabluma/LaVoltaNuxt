<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  const props = defineProps({
    items: {
      type: Object,
    },
  })
  //GSAP
  const { gsap, ScrollTrigger } = useGsap()
  let slug = ref()
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
  <div class="hero" ref="main" :class="{ slug: slug }">
    <div class="content">
      <div class="inner">
        <div class="title">
          {{ items.title }}
        </div>
      </div>
    </div>
    <div class="inner_hero">
      <div v-if="items.mainImage" class="image">
        <ElementsMediaImageItem
          :src="items.mainImage.asset._ref"
          :alt="items.mainImage.alt"
          height="700"
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
    w-full
    h-[18vh]
    max-sm:landscape:h-[40vh]
    sm:max-md:h-[40vh]
    md:max-lg:landscape:h-[30vh]
    md:max-lg:portrait:h-[30vh]
    lg:max-xl:portrait:h-[40vh]
    lg:max-xl:landscape:h-[40vh]
    xl:landscape:h-[35vh]
    overflow-hidden;

    .content {
      @apply absolute
      z-10
      w-full
      h-full
      flex
      justify-center
      items-end
      p-5
      md:p-10;

      .inner {
        @apply w-9/12
        mx-auto
        flex
        md:w-7/12;

        .title {
          @apply font-cameo
          leading-snug;
        }
      }
    }

    .inner_hero {
      @apply relative
      w-full
      h-full;

      .image {
        @apply relative
          w-full
          h-full;
      }
      .noImg {
        @apply w-full
        h-full
        bg-white
        dark:bg-[#4A647D];
      }
    }
  }
</style>
