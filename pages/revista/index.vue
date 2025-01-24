<script setup>
  import { computed } from 'vue'
  const { revista } = usePagesStore()

  const isFeatured = computed(() => {
    return revista.portada.cover.filter((item) => item.featured !== false)
  })

  const destacado = computed(() => {
    return isFeatured.value[0].article
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
    <HeroSection>
      <template #content>
        {{ revista.title }}
      </template>
      <template #default>
        <div v-if="revista.mainImage">
          <ElementsMediaImageItem
            :src="revista.mainImage.asset._ref"
            :alt="revista.mainImage.alt"
            height="550"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
            :modifiers="{
              crop: revista.mainImage.crop,
              hotspot: revista.mainImage.hotspot,
              q: 80,
            }"
            fit="cover"
            format="webp"
          />
        </div>
        <div v-else class="noImg" />
      </template>
    </HeroSection>
    <main>
      <div class="main_content">
        <section>
          <h1 class="sr-only">{{ revista.title }}</h1>
          <div class="destacado-wrapper">
            <div class="flex justify-center">
              <h1>{{ revista.portada.title }}</h1>
            </div>
            <div v-if="isFeatured.length > 0">
              <ArticleDestacado :items="destacado" />
            </div>
            <div v-if="notFeatured.length > 0">
              <ArticlesPortada :items="notFeatured" />
            </div>
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
<style lang="postcss" scoped>
  .main_content section {
    @apply mx-auto 
    lg:w-11/12
    xl:w-11/12;

    h1 {
      @apply text-lg
        font-coordinates
        lowercase
        tracking-[1rem]
        pt-14
        mb-10
        ml-[1rem]        
        text-slate-400
        dark:text-slate-400;
    }

    .destacado {
      @apply lg:w-10/12
      xl:w-8/12;
    }
  }
</style>
