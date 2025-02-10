<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    data: {
      type: Object,
    },
  })
</script>
<template>
  <div class="hero">
    <div class="content">
      <div class="inner">
        <div class="text-lg/snug">
          {{ data.title }}
        </div>
        <small class="font-sans">{{ data.subtitle }}</small>
      </div>
    </div>
    <div class="inner_hero">
      <div v-if="data.mainImage" class="img border-t border-t-slate-300">
        <ElementsMediaImageItem
          :src="data.mainImage.asset._ref"
          :alt="data.mainImage.alt"
          height="450"
          sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
          :modifiers="{
            crop: data.mainImage.crop,
            hotspot: data.mainImage.hotspot,
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
<style lang="postcss" scoped>
  .hero {
    @apply relative
    w-screen
    h-[22dvh]
    sm:h-[45vh]
    md:h-[28dvh]
    md:landscape:h-[30dvh]
    lg:landscape:h-[35dvh]
    lg:portrait:h-[20dvh]
    xl:landscape:h-[35dvh]
    2xl:landscape:h-[40dvh]
    overflow-y-hidden
    bg-black;

    .content {
      @apply absolute z-10 w-full h-full flex justify-center items-end;

      .inner {
        @apply text-lg font-cameo text-slate-300 pb-3 w-11/12 mx-auto sm:w-9/12 md:w-9/12 md:pb-10 lg:w-8/12;
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
        from-slate-600/20
        to-slate-600/80
        dark:from-slate-600/30
        dark:to-slate-600/70;
      }
    }
  }
</style>
