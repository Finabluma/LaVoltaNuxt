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
  <article class="relative group overflow-hidden">
    <ElementsTextLink link-type="internalLinkType" route="revista-slug" :slug="article.slug" :title="article?.subtitle"
      :aria-label="`Articulo - ${article?.title}`">
      <div v-if="article?.mainImage" class="outline-2 -outline-offset-2 dark:outline-firstdark lg:group-hover:invert-25">
        <ElementsMediaImageItem :src="article?.mainImage?.asset._ref" :alt="article?.mainImage.alt" :modifiers="{
          crop: article?.mainImage.crop,
          hotspot: article?.mainImage.hotspot,
          q: 80,
        }" sizes="xs:100vw" height="200" fit="cover" format="webp" />
      </div>
      <div
        class="absolute w-full bottom-0 p-0.5 lg:translate-y-full lg:group-hover:translate-0 lg:group-hover:transition-transform">
        <div class="bg-white/90 dark:bg-firstdark/90 dark:text-secondark
        outline -outline-offset-4 p-3">
          <h2 class="text-lg/tight font-bold">
            {{ article?.title }}
          </h2>
          <div v-if="article?.subtitle">
            <p class="lead">{{ article?.subtitle }}</p>
          </div>
          <ArticleCategories :tags="article?.categories" v-if="article?.categories" class="mt-3" />
        </div>
      </div>
    </ElementsTextLink>
  </article>
</template>
