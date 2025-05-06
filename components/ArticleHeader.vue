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
        <div class="title">
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

