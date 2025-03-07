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
    h1 {
      @apply text-5xl/none;
    }
    h2 {
      @apply text-4xl/tight;
    }
    h3 {
      @apply text-2xl/tight;
    }
    h4 {
      @apply text-lg/tight font-bold;
    }
    h1,
    h2,
    h3,
    h4,
    ul,
    ol,
    p {
      @apply mb-5;

      strong {
        @apply font-bold;
      }
    }

    p{
      @apply leading-normal
    }

    ol,
    ul {
      @apply my-3;
      li {
        @apply mb-1;
      }
    }
    blockquote {
      @apply ml-2
      my-3
      pl-2
      font-coordinates;
    }
  }
</style>
