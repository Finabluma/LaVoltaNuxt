<script setup>
  const props = defineProps({
    image: {
      type: Object,
    },
    title: {
      type: String,
    },
    banner: {
      type: String,
    },
  })
</script>
<template>
  <div>
    <h2>{{ title }}</h2>
    <!-- <div v-if="image">
      <ElementsMediaImageItem
        :src="image.asset._ref"
        :alt="image.alt"
        height="100"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
        :modifiers="{
          crop: image.crop,
          hotspot: image.hotspot,
          q: 80,
        }"
        fit="cover"
        format="webp"
      />
    </div>
    <div v-if="banner">
      <p>{{ banner }}</p>
    </div>
    <slot></slot> -->
  </div>
</template>
