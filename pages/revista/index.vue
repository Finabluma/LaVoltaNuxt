<script setup>
import { ref, computed } from 'vue'
const { revista } = usePagesStore()

const isFeatured = computed(() => {
  return revista.portada.cover.filter((item) => item.featured !== false)
})

const notFeatured = computed(() => {
  return revista.portada.cover.filter((item) => item.featured === false)
})

// MODAL
let showModal = ref(true)

// meta
usePageHead({
  title: revista.title,
  seo: revista.seo,
})
</script>
<template>
  <div id="revista">
    <div v-if="revista.bannerUrgent !== null">
      <AppModal :budskap="revista" v-show="showModal" @close-modal="showModal = false" />
    </div>
    <main>
      <HeroSection>
        <h1>{{ revista.title }}</h1>
      </HeroSection>
      <div class="main-content">
        <section class="max-w-6xl mx-auto px-[1vw] py-5 md:py-10 xl:px-0">
          <div v-if="isFeatured.length > 0" class="px-[2vw]">
            <ArticleDestacado :item="isFeatured" :title="revista.portada.title" />
          </div>
          <div v-if="notFeatured.length > 0"
            class="before:w-2 before:h-2 before:bg-current before:block before:mx-auto before:rounded-full">
            <h1
              class="text-fluid-h2 capitalize font-coordinates font-black p-7 flex flex-col justify-center items-center ">
              Otras Lecturas</h1>
            <MasonryWall :items="notFeatured" :ssr-columns="1" :column-width="200" :gap="15" :min-columns="1"
              :maxColumns="2" class="l-box l-box--no-border py-0 lg:px-[5vw]">
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
