<script setup>
  const props = defineProps({
    items: {
      type: Object,
    },
  })
</script>
<template>
  <div class="articlesportada">
    <div class="titleblock">otras cosas ...</div>
    <div class="portada_wrapper">
      <div v-for="item in items" :key="item.slug">
        <ArticleTeaser :heading="item.article.title" class="portada">
          <template #media>
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
            <div v-if="item.article.categories">
              <ArticleCategories
                :tags="item.article.categories"
                title="Categorias"
                class="catportada"
              />
            </div>
          </template>
        </ArticleTeaser>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .articlesportada {
    @apply relative
      z-50
    bg-slate-50 
    dark:bg-slate-600;
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

    .portada_wrapper {
      @apply pt-5
      mb-10
      mx-auto
      md:w-11/12
      lg:w-10/12
      xl:w-9/12;

      article {
        .enlace {
          @apply font-sans
          text-xl/tight
          text-slate-500
          dark:text-slate-300
          mb-2
          xl:text-2xl;
        }
        .subtitle {
          @apply text-sm 
          text-slate-500
          dark:text-slate-300
          sm:text-base
          xl:text-lg
          content-before;

          &:before {
            @apply block
            bg-slate-300
            dark:bg-slate-500
            h-1
            w-6
            mt-3;
          }
        }

        .categories {
          @apply max-sm:hidden
          mt-0;
        }
      }
    }
  }
</style>
