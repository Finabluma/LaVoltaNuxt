<script setup>
  const props = defineProps({
    src: {
      type: String,
      default: '',
    },
    asset: {
      type: Object,
      default: null,
    },
    caption: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    sizes: {
      type: String,
      default: '',
    },
    attribution: {
      type: String,
      default: '',
    },
    crop: {
      type: Object,
      default: null,
    },
    fit: {
      default: 'max',
      type: String,
    },
    hotspot: {
      type: Object,
      default: null,
    },
    modifiers: {
      type: Object,
      default: null,
    },
  })
</script>
<template>
  <figure>
    <NuxtPicture
      :src="asset._ref"
      :alt="asset.alt"
      :modifiers="{ crop: crop, hotspot: hotspot, q: 80 }"
      fit="cover"
      sizes="xs:100vw"
    />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>
<style scoped lang="postcss">
  figure {
    @apply mb-4 
    mt-6
    mx-auto
    sm:mb-8
    sm:mt-10;

    picture {
      @apply l-box
      l-box--no-border;
    }

    figcaption {
      @apply text-sm
      italic
      sm:text-center;
    }
  }
  picture,
  picture:deep(img) {
    display: block;
  }
</style>
