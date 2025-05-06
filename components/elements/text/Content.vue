<script setup>
  import FigureCaption from '~/components/elements/media/FigureCaption.vue'
  import Link from '~/components/elements/text/Link.vue'
  import Element from '~/components/elements/text/Element.vue'
  import SwiperSlide from '~/components/elements/media/SwiperSlide.vue'

  const props = defineProps({
    blocks: {
      type: Array,
      default: () => [],
    },
  })
  const serializers = {
    marks: {
      link: Link,
      internalLink: Link,
      underline: 'u',
      'strike-through': 's',
    },
    styles: {
      normal: 'p',
      h1: Element,
      h2: Element,
      h3: Element,
      small: Element,
    },
    types: {
      pictureType: FigureCaption,
      galleriesType: SwiperSlide,
    },
  }
</script>
<template>
  <div class="blockContent">
    <SanityContent :blocks="props.blocks" :serializers="serializers" />
  </div>
</template>
<style lang="postcss">
  .blockContent {
    > * {
      @apply mb-5;
    }
  }
</style>
