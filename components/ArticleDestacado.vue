<script setup>
const props = defineProps({
  item: {
    type: Object,
  },
  title: {
    type: String,
  },
})
</script>
<template>
  <div class="destacado">
    <h1 v-if="title" class="title-Xtra text-center">{{ title }}</h1>
    <ArticleTeaser :article="item[0].article">
      <template #default>
        <ElementsMediaImageItem :src="item[0].article.mainImage.asset._ref" :alt="item[0].article.mainImage.alt"
          :modifiers="{
            crop: item[0].article.mainImage.crop,
            hotspot: item[0].article.mainImage.hotspot,
            q: 80,
          }" sizes="xs:100vw sm:100vw" height="400" fit="cover" format="webp" class="image" />
      </template>
      <template #categories>
        <ArticleCategories :tags="item[0].article.categories" title="Categorias" v-if="item[0].article.categories" />
      </template>
    </ArticleTeaser>
  </div>
</template>
<style lang="postcss">
.destacado {
  @apply mb-clus3lev;

  .card {
    @apply l-stack md:l-box md:l-box--no-border;

    .image {
      @apply border block;
    }

    .card__text {
      @apply p-2 text-center l-center lg:p-4;

      .card__heading {
        @apply uppercase text-lg/snug mb-clus3lev lg:text-2xl;
      }

      .lead {
        @apply mb-clus3lev;
      }
    }

    .categories {
      ul {
        @apply flex justify-center flex-wrap;
      }
    }
  }
}
</style>
