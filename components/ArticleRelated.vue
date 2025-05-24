<script setup>
const props = defineProps({
  related: {
    type: Object,
  },
})
</script>
<template>
  <div class="l-stack p-2 lg:py-10">
    <h2 class="text-fluid-2xl mb-0 px-4">Continúa leyendo</h2>
    <div class="md:grid md:grid-cols-2 md:mb-0 md:gap-4">
      <div v-for="item in related" :key="item.id">
        <article class="relative group overflow-hidden bg-slate-200 dark:bg-firstdark/80 drop-shadow-sm first:mb-4">
          <ElementsTextLink link-type="internalLinkType" route="revista-slug" :slug="item.slug" :title="item?.subtitle"
            :aria-label="`Articulo - ${item?.title}`" class="flex items-center dark:outline-firstdark drop-shadow-xs
            ">
            <div v-if="item?.mainImage" class="w-32 md:w-36 lg:w-auto">
              <ElementsMediaImageItem :src="item?.mainImage?.asset._ref" :alt="item?.mainImage.alt" :modifiers="{
                crop: item?.mainImage.crop,
                hotspot: item?.mainImage.hotspot,
                q: 80,
              }" sizes="xs:120px" height="120px" fit="cover" format="webp" />
            </div>
            <div class="w-10/12 text-firstlight dark:text-secondark px-2">
              <h2 class="text-fluid-base font-bold">
                {{ item?.title }}
              </h2>
              <!-- <div v-if="item?.subtitle">
                <p class="">{{ item?.subtitle }}</p>
              </div> -->
              <ArticleCategories :tags="item?.categories" v-if="item?.categories" />
            </div>
          </ElementsTextLink>
        </article>
      </div>
    </div>
  </div>
</template>
