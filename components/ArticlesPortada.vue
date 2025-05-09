<script setup>
  const props = defineProps({
    items: {
      type: Object,
    },
  })
</script>
<template>
  <div class="portada">
    <h1 class="title-block">Otras Lecturas</h1>

    <div class="articles">
      <div v-for="item in items" :key="item.id">
        <ArticleTeaser :article="item.article" :heading="item.article.title">
          <template #default>
            <div class="image-rounded">
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
            </div>
          </template>
          <template #categories>
            <ArticleCategories
              :tags="item.article.categories"
              v-if="item.article.categories"
            />
          </template>
        </ArticleTeaser>
      </div>
    </div>
  </div>
</template>
