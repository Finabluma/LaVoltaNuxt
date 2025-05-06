<script setup>
  const props = defineProps({
    items: {
      type: Object,
    },
  })
</script>
<template>
  <div class="u-full-width hero">
    <div class="l-center">
      <div class="l-sidebar">
        <div>
          <div class="not-sidebar">
            <div class="component component--text">
              <slot></slot>
            </div>
          </div>
          <!-- <div v-if="items.mainImage" class="sidebar">
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
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <style lang="postcss" scoped>
  .hero {
    &:after {
      @apply content-['']
        w-2
        h-2
        rounded-full
        block
        mx-auto
        my-10
        bg-current;
    }
  }
</style> -->
