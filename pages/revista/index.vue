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
  <div class="page ">
    <div v-if="revista.bannerUrgent !== null">
      <AppModal :budskap="revista" v-show="showModal" @close-modal="showModal = false" />
    </div>
    <main>
      <HeroSection>
        <h1 class="page-title">{{ revista.title }}</h1>
      </HeroSection>
      <div class="main-content">
        <section class="max-w-6xl mx-auto l-box l-box--no-border lg:px-[6vw] *:mb-10">
          <div v-if="isFeatured.length > 0" class="sm:px-7 lg:px-[8vw]">
            <ArticleDestacado :item="isFeatured" :title="revista.portada.title" />
          </div>
          <div v-if="notFeatured.length > 0"
            class="before:w-2 before:h-2 before:bg-current before:block before:mx-auto before:rounded-full">
            <h1 class="text-3xl lowercase p-7 flex flex-col justify-center items-center ">Otras Lecturas</h1>
            <MasonryWall :items="notFeatured" :ssr-columns="1" :column-width="200" :gap="15" :min-columns="1"
              :maxColumns="2" class="l-box l-box--no-border py-0">
              <template #default="{ item }">
                <ArticleTeaser :article="item.article" :heading="item.article.title" />
              </template>
            </MasonryWall>
          </div>
        </section>
      </div>
    </main>
    <aside v-if="revista.optionalContent !== null">
      <OptionalContent :page="revista" />
    </aside>
    <AppFooter />
  </div>
</template>
