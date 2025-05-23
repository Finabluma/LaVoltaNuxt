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
  <div class="mb-5 md:mb-10">
    <h1 v-if="title" class="page-title--extra">{{ title }}</h1>
    <article class="relative group">
      <ElementsTextLink link-type="internalLinkType" route="revista-slug" :slug="item[0].article?.slug"
        :aria-label="`Articulo Destacado - ${item[0].article?.title}`">
        <div v-if="item[0].article?.mainImage" class="outline-2">
          <ElementsMediaImageItem :src="item[0].article?.mainImage.asset._ref" :alt="item[0].article?.mainImage.alt"
            :modifiers="{
              crop: item[0].article?.mainImage.crop,
              hotspot: item[0].article?.mainImage.hotspot,
              q: 80,
            }" sizes="xs:100vw sm:100vw" height="400" fit="cover" format="webp" />
        </div>
        <div class="l-box l-box--no-border absolute top-0 w-full h-full flex justify-center items-end">
          <div class="w-11/12 mx-auto bg-white/95 dark:bg-firstdark/95 drop-shadow-sm dark:text-secondark p-2 outline -outline-offset-4 text-center md:w-9/12 lg:p-4 group-hover:opacity-90 
          group-hover:transition-opacity">
            <h2 class="text-xl/tight font-bold">
              {{ item[0].article?.title }}
            </h2>
            <div v-if="item[0].article?.subtitle">
              <p class="lead">{{ item[0].article?.subtitle }}</p>
            </div>
            <ArticleCategories :tags="item[0].article?.categories" title="Categorias" v-if="item[0].article?.categories"
              class="mt-3 justify-center" />
          </div>
        </div>
      </ElementsTextLink>
    </article>
  </div>
</template>
