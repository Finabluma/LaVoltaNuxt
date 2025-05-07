<script setup>
  const props = defineProps({
    related: {
      type: Object,
    },
  })
</script>
<template>
  <div class="l-stack">
    <h2 class="title-block l-box l-box--no-border">Continúa leyendo</h2>
    <div class="l-sidebar">
      <div v-for="item in related" :key="item.id" class="sidebar">
        <ArticleTeaser :article="item">
          <template #default>
            <div class="image-rounded">
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
            </div>
          </template>
          <template #categories>
            <ArticleCategories
              :tags="item.categories"
              title="Categorias"
              v-if="item.categories"
            />
          </template>
        </ArticleTeaser>
      </div>
    </div>
  </div>
</template>
