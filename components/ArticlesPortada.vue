<script setup>
  const props = defineProps({
    items: {
      type: Object,
    },
  })
</script>
<template>
  <div class="articlesportada">
    <div class="titleblock">otras cosas ...</div>
    <div class="portada_wrapper">
      <div v-for="item in items" :key="item.id">
        <ArticleTeaser
          :article="item.article"
          :heading="item.article.title"
          class="portada"
        >
          <template #default>
            <ElementsMediaImageItem
              :src="item.article.mainImage.asset._ref"
              :alt="item.article.mainImage.alt"
              :modifiers="{
                crop: item.article.mainImage.crop,
                hotspot: item.article.mainImage.hotspot,
                q: 80,
              }"
              sizes="xs:100px"
              height="100"
              fit="cover"
              format="webp"
            />
          </template>

          <template #categories>
            <ArticleCategories
              :tags="item.article.categories"
              title="Categorias"
              v-if="item.article.categories"
            />
          </template>
        </ArticleTeaser>
      </div>
    </div>
  </div>
</template>
