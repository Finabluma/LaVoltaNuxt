<script setup>
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
  <article class="card">
    <slot></slot>
    <div class="card__text">
      <h2 class="card__heading">
        <ElementsTextLink
          link-type="internalLinkType"
          route="revista-slug"
          :slug="article.slug"
          class="l-box l-box--no-padding l-box--no-border hover:opacity-80"
        >
          {{ article.title }}
        </ElementsTextLink>
      </h2>
      <div v-if="article.subtitle">
        <p class="lead">{{ article.subtitle }}</p>
      </div>
      <slot name="categories"></slot>
    </div>
  </article>
</template>
