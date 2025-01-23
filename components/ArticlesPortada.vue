<script setup>
  const props = defineProps({
    items: {
      type: Object,
    },
  })
</script>
<template>
  <div class="portada">
    <div class="titleblock">otras cosas ...</div>
    <div v-for="item in items" :key="item.slug">
      <ArticleTeaser :heading="item.article.title">
        <template #media>
          <ElementsMediaImageItem
            :src="item.article.mainImage.asset._ref"
            :alt="item.article.mainImage.alt"
            :modifiers="{
              crop: item.article.mainImage.crop,
              hotspot: item.article.mainImage.hotspot,
              q: 80,
            }"
            sizes="xs:200px"
            height="200"
            fit="cover"
            format="webp"
          />
        </template>
        <template #default>
          <div class="enlace">
            <ElementsTextLink
              link-type="internalLinkType"
              route="revista-slug"
              :slug="item.article.slug"
              >{{ item.article.title }}
            </ElementsTextLink>
          </div>
          <div v-if="item.article.subtitle" class="subtitle">
            {{ item.article.subtitle }}
          </div>
          <div v-if="item.article.categories" class="categories catPortada">
            <ArticleCategories
              :tags="item.article.categories"
              title="Categorias"
            />
          </div>
        </template>
      </ArticleTeaser>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .portada {
    @apply relative
    mx-auto
    pb-10
    mb-5
    pt-2
    w-full
    md:w-10/12
    lg:w-10/12
    xl:w-8/12;

    .titleblock {
      @apply mb-4
      pt-1
      font-sans
      text-xl
      tracking-widest
      dark:text-slate-400
      content-after
      md:mt-4
      lg:mt-8
      xl:mt-10
      hidden;

      &:after {
        @apply block
        w-1/12
        h-1
        mt-2
        bg-slate-300/75
        dark:bg-slate-300/75;
      }
    }

    article {
      .enlace {
        @apply mb-0.5
            text-xl/tight
            md:text-xl;
        & h2 {
          @apply font-sans;
        }
      }
      .subtitle {
        @apply text-base/snug xl:text-lg;
      }

      .categories {
        @apply max-sm:hidden
        mt-2;
      }
    }
  }
</style>
