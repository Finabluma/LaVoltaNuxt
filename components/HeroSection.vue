<script setup>
  const props = defineProps({
    items: {
      type: Object,
    },
  })
</script>
<template>
  <div class="l-center--full hero">
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

    <div class="l-cluster">
      <div class="col">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
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
</style>
