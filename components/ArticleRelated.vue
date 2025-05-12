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
    <div class="l-sidebar related">
      <div v-for="item in related" :key="item.id" class="sidebar">
        <ArticleTeaser :article="item">
          <template #default>
            <div class="image">
              <ElementsMediaImageItem
                :src="item.mainImage.asset._ref"
                :alt="item.mainImage.alt"
                :modifiers="{
                  crop: item.mainImage.crop,
                  hotspot: item.mainImage.hotspot,
                  q: 80,
                }"
                sizes="xs:100vw"
                height="150"
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
<style lang="postcss">
  .related {
    @apply grid
    md:grid-cols-2
    md:gap-4;

    .card {
      @apply outline
        outline-firstlight
        dark:outline-firstdark
        /* bg-firstlight */
        outline-2
        dark:bg-white/20;

      .image {
        @apply border
          mb-clus2lev;
      }

      .card__text {
        @apply leading-snug
          text-center;

        .lead {
          @apply mb-clus2lev;
        }

        .categories {
          .clean-list {
            @apply flex
              justify-center
              flex-wrap;

            .tag {
              @apply p-0;
            }
          }
        }
      }
    }
  }
</style>
