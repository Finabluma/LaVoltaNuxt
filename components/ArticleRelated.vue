<script setup>
const props = defineProps({
  related: {
    type: Object,
  },
})
</script>
<template>
  <div class="l-stack p-2 lg:p-10">
    <h2 class="block-title--after mb-0 px-4">Continúa leyendo</h2>
    <div class="mb-5 md:grid md:grid-cols-2 md:mb-0 md:gap-4">
      <div v-for="item in related" :key="item.id">
        <article class="relative group overflow-hidden mb-4 bg-slate-200 dark:bg-firstdark drop-shadow-sm">
          <ElementsTextLink link-type="internalLinkType" route="revista-slug" :slug="item.slug" :title="item?.subtitle"
            :aria-label="`Articulo - ${item?.title}`" class="flex items-center dark:outline-firstdark drop-shadow-xs
            ">
            <div v-if="item?.mainImage" class="w-28 md:w-20 lg:w-auto">
              <ElementsMediaImageItem :src="item?.mainImage?.asset._ref" :alt="item?.mainImage.alt" :modifiers="{
                crop: item?.mainImage.crop,
                hotspot: item?.mainImage.hotspot,
                q: 80,
              }" sizes="xs:120px" height="120px" fit="cover" format="webp" />
            </div>
            <div class="w-10/12 text-firstlight dark:text-secondark p-1">
              <h2 class="text-lg/tight font-bold">
                {{ item?.title }}
              </h2>
              <div v-if="item?.subtitle">
                <p class="lead">{{ item?.subtitle }}</p>
              </div>
              <ArticleCategories :tags="item?.categories" v-if="item?.categories" class="mt-3" />
            </div>
          </ElementsTextLink>
        </article>
      </div>
    </div>
  </div>
</template>
