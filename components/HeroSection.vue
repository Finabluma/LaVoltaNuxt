<script setup>
  const props = defineProps({
    items: {
      type: Object,
    },
  })
</script>
<template>
  <div class="hero">
    <!-- <div
      v-if="items.mainImage"
      class="img overflow-hidden absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
    >
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
    </div> -->

    <div
      class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true"
    >
      <div class="aspect-1097/845 w-[68.5625rem]"></div>
    </div>
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true"
    >
      <div
        class="aspect-1097/845 w-[68.5625rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>

    <div class="hero-inner">
      <div class="inner-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .hero {
    @apply relative 
    mx-auto 
    max-w-4xl
    pb-7
    px-2
    lg:pb-20;
    
    &:after {
      @apply content-['']
        w-2
        h-2
        rounded-full
        block
        mx-auto
        mt-7
        bg-current;
    }

    .hero-inner {
      @apply relative
      text-center
      px-2
      md:py-8
      lg:py-20;
    }

    .inner-content {
      @apply mx-auto
      py-5 
      sm:px-7
      lg:mx-0;
    }
  }
</style>
