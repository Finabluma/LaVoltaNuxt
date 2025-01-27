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
      <div v-if="items.categories" class="cat">
        <ArticleCategories
          :tags="items.categories"
          title="Categorias"
          class="catdestacado"
        />
      </div>
    </template>
  </ArticleTeaser>
</template>
<style lang="postcss" scoped>
  .destacado {
    @apply relative
    mb-10
    w-full
    sm:w-8/12
    md:w-10/12
    lg:w-8/12
    xl:w-7/12
    mx-auto;

    article {
      @apply relative;
      .content {
        .content-wrapper {
          .enlace {
            @apply text-slate-200
              text-xl/tight
              font-sans
              font-thin
              sm:pr-[2%]
              sm:text-2xl
              lg:text-5xl/none;
          }
          .subtitle {
            @apply text-balance
            font-coordinates
            my-2
            content-before;

            &:before {
              @apply block
              bg-slate-200/80
              dark:bg-slate-300/80
              h-1
              w-10
              my-2;
            }
          }
        }
      }
    }
  }
</style>
