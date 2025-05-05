<script setup>
  import { ref } from 'vue'
  const revistaPortada = ref(false)
  const homeDestacado = ref(false)
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
  <div
    :class="{ revistaPortada: revistaPortada, homeDestacado: homeDestacado }"
  >
    <p v-if="title" class="title_tracked">{{ title }}</p>
    <ArticleTeaser :article="item[0].article" class="destacado">
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
<style lang="postcss" scoped>
  .revistaPortada {
    @apply mb-5
    md:mb-10;
  }
</style>
