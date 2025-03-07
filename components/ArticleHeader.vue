<script setup>
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
        <small class="font-coordinates">{{ data.subtitle }}</small>
      </div>
    </div>
    <div class="inner_hero">
      <div v-if="data.mainImage" class="image">
        <ElementsMediaImageItem
          :src="data.mainImage.asset._ref"
          :alt="data.mainImage.alt"
          height="800"
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
    h-[18vh]
    max-sm:landscape:h-[40vh]
    sm:max-md:h-[40vh]
    md:max-lg:landscape:h-[30vh]
    md:max-lg:portrait:h-[30vh]
    lg:max-xl:portrait:h-[40vh]
    lg:max-xl:landscape:h-[40vh]
    xl:landscape:h-[45vh]
    overflow-y-hidden;

    .content {
      @apply absolute  
      w-full 
      h-full 
      flex 
      justify-center 
      items-end;

      .inner {
        @apply font-bold 
        text-primary
        dark:text-[#A8B2BB]
        pb-3 
        w-11/12 
        mx-auto 
        sm:w-9/12 
        md:w-9/12 
        md:pb-10 
        lg:w-8/12;
      }
    }

    .inner_hero {
      @apply relative
      w-full 
      h-full;
    }
  }
</style>
