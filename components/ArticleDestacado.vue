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
  <div class="l-box l-box--no-padding sm:l-box sm:border-4 bg-white/50">
    <p v-if="title" class="title-Xtra text-center">{{ title }}</p>
    <ArticleTeaser :article="item[0].article" class="flex flex-col">
      <template #default>
        <ElementsMediaImageItem
          :src="item[0].article.mainImage.asset._ref"
          :alt="item[0].article.mainImage.alt"
          :modifiers="{
            crop: item[0].article.mainImage.crop,
            hotspot: item[0].article.mainImage.hotspot,
            q: 80,
          }"
          sizes="xs:100vw sm:100vw"
          height="400"
          fit="cover"
          format="webp"
          class="mb-clus2lev"
        />
      </template>
      <template #categories>
        <ArticleCategories
          :tags="item[0].article.categories"
          title="Categorias"
          v-if="item[0].article.categories"
        />
      </template>
    </ArticleTeaser>
  </div>
</template>
