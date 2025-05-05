<script setup>
  import { ref } from 'vue'
  const props = defineProps({
    title: {
      type: String,
    },
    heading: {
      type: String,
    },
    article: {
      type: Object,
    },
  })
</script>
<template>
  <article class="flex">
    <h2 class="sr-only">{{ article.title }}</h2>
    <slot></slot>
    <div class="px-2 sm:px-0">
      <ElementsTextLink
        link-type="internalLinkType"
        route="revista-slug"
        :slug="article.slug"
        class="l-box l-box--no-padding l-box--no-border font-bold hover:opacity-80"
        >{{ article.title }}
      </ElementsTextLink>
      <div v-if="article.subtitle">
        {{ article.subtitle }}
      </div>
      <slot name="categories"></slot>
    </div>
  </article>
</template>

