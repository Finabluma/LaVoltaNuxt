<script setup>
  const props = defineProps({
    items: {
      type: Object,
    },
  })
</script>
<template>
  <ArticleTeaser title="destacamos" :heading="items.title" class="destacado">
    <template #media>
      <ElementsMediaImageItem
        :src="items.mainImage.asset._ref"
        :alt="items.mainImage.alt"
        :modifiers="{
          crop: items.mainImage.crop,
          hotspot: items.mainImage.hotspot,
          q: 80,
        }"
        sizes="xs:100vw"
        height="200"
        fit="cover"
        format="webp"
      />
    </template>
    <template #default>
      <ElementsTextLink
        link-type="internalLinkType"
        route="revista-slug"
        :slug="items.slug"
        class="enlace"
        >{{ items.title }}
      </ElementsTextLink>

      <div v-if="items.subtitle" class="subtitle">
        {{ items.subtitle }}
      </div>
      <div v-if="items.categories" class="categories">
        <ArticleCategories :tags="items.categories" title="Categorias" />
      </div>
    </template>
  </ArticleTeaser>
</template>
<style lang="postcss" scoped>
  .destacado {
    @apply relative
    mb-10
    w-11/12
    md:w-10/12
    lg:w-9/12
    xl:w-8/12
    mx-auto;

    article {
      @apply relative;
      .content {
        .content-wrapper {
          .enlace {
            @apply text-slate-300
              text-xl/tight
              sm:pr-[2%]
              sm:text-2xl
              lg:text-5xl/none;
          }
          .subtitle {
            @apply text-balance
            font-mono
            leading-none text-sm my-2
            lg:text-base;
          }

          .categories {
            @apply max-sm:hidden
            mt-1;

            & > div {
              @apply justify-start;
            }
          }
        }
      }
    }
  }
</style>
