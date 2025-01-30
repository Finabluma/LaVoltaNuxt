<script setup>
  import { ref } from 'vue'
  const homePortada = ref(false)
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
  <div :class="{ homePortada: homePortada, homeDestacado: homeDestacado }">
    <p class="title_destacado">{{ title }}</p>
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
          sizes="xs:100vw"
          height="200"
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
  .homeDestacado {
    .title_destacado {
      @apply sr-only;
    }

    article {
      @apply mx-auto
      sm:w-6/12
      md:portrait:w-9/12
      lg:w-8/12;
    }
  }

  .homePortada {
    @apply mb-5
    md:mb-10;
    .title_destacado {
      @apply text-lg
      font-coordinates
      lowercase
      tracking-[1rem]
      text-center
      pt-8
      mb-5
      ml-[1rem]        
      text-slate-400
      dark:text-slate-400
      lg:pt-12
      lg:mb-10
      lg:text-xl;
    }

    article {
      @apply mx-auto
      sm:w-8/12
      md:portrait:w-9/12
      lg:w-8/12;
    }
  }
</style>
