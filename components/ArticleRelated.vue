<script setup>
  const props = defineProps({
    related: {
      type: Object,
    },
  })
</script>
<template>
  <div class="relatedContent">
    <h2>Continúa leyendo</h2>
    <div class="inner-content">
      <div v-for="item in related" :key="item.id" class="article-wrap">
        <ArticleTeaser :article="item" class="related">
          <template #default>
            <ElementsMediaImageItem
              :src="item.mainImage.asset._ref"
              :alt="item.mainImage.alt"
              :modifiers="{
                crop: item.mainImage.crop,
                hotspot: item.mainImage.hotspot,
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
              :tags="item.categories"
              title="Categorias"
              v-if="item.categories"
              class="catrelated"
            />
          </template>
        </ArticleTeaser>
      </div>
    </div>
  </div>
</template>
