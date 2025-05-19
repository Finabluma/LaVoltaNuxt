<script setup>
  import { computed } from 'vue'
  const { revista } = usePagesStore()

  const isFeatured = computed(() => {
    return revista.portada.cover.filter((item) => item.featured !== false)
  })

  const notFeatured = computed(() => {
    return revista.portada.cover.filter((item) => item.featured === false)
  })

  // meta
  usePageHead({
    title: revista.title,
    seo: revista.seo,
  })
</script>
<template>
  <div class="page">
    <div v-if="revista.bannerUrgent !== null">
      <AppModal
        :budskap="revista"
        v-show="showModal"
        @close-modal="showModal = false"
      />
    </div>
    <main>
      <HeroSection>
        <h1 class="title-page">{{ revista.title }}</h1>
      </HeroSection>
      <div class="main-content">
        <section class="revista">
          <div v-if="isFeatured.length > 0" class="isDestacado">
            <ArticleDestacado
              :item="isFeatured"
              :title="revista.portada.title"
            />
          </div>
          <div v-if="notFeatured.length > 0" class="isPortada">
            <ArticlesPortada>
              <MasonryWall
                :items="notFeatured"
                :ssr-columns="1"
                :column-width="200"
                :gap="15"
                :min-columns="1"
                :maxColumns="2"
              >
                <template #default="{ item }">
                  <ArticleTeaser
                    :article="item.article"
                    :heading="item.article.title"
                  >
                    <template #default>
                      <div class="image">
                        <ElementsMediaImageItem
                          :src="item.article.mainImage.asset._ref"
                          :alt="item.article.mainImage.alt"
                          :modifiers="{
                            crop: item.article.mainImage.crop,
                            hotspot: item.article.mainImage.hotspot,
                            q: 80,
                          }"
                          sizes="xs:100vw"
                          height="200"
                          fit="cover"
                          format="webp"
                        />
                      </div>
                    </template>
                    <template #categories>
                      <ArticleCategories
                        :tags="item.article.categories"
                        v-if="item.article.categories"
                      />
                    </template>
                  </ArticleTeaser>
                </template>
              </MasonryWall>
            </ArticlesPortada>
          </div>
        </section>
      </div>
    </main>
    <aside v-if="revista.optionalContent !== null">
      <OptionalContent :page="revista" />
    </aside>
    <!-- <AppFooter /> -->
  </div>
</template>
<style lang="postcss" scoped>
  .revista {
    @apply l-center
    l-box
    l-box--no-border
    lg:px-[10vw];
  }
</style>
