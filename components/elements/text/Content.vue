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
      @apply mb-3;

      strong {
        @apply font-bold;
      }
    }

    ol,
    ul {
      @apply my-3;
      li {
        @apply italic mb-1;
      }
    }
    blockquote {
      @apply ml-3
      my-3
      pl-3
      italic
      border-l-4 
    }
    /* a {
      @apply cursor-pointer underline text-pink-500 dark:text-yellow-300;
    } */
  }
</style>
