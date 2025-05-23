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
  <figure class="mb-5 mt-10">
    <div class="mb-5 outline-2 outline-offset-2">
      <NuxtPicture :src="asset._ref" :alt="asset.alt" :modifiers="{ crop: crop, hotspot: hotspot, q: 80 }" fit="cover"
        sizes="xs:100vw" />
    </div>

    <figcaption class="text-center text-sm">{{ caption }}</figcaption>
  </figure>
</template>
