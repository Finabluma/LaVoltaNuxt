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
          <div>
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
      <div v-if="revista.optionalContent.gallery !== null">
        <LazySlideShow
          :title="revista.optionalContent.gallery.description"
          :images="revista.optionalContent.gallery.gallery.images"
        />
      </div>
      <div v-if="revista.optionalContent.bannerBody !== null" class="banner">
        <div class="banner_wrapper">
          <div v-if="revista.optionalContent.bannerBody.image" class="image">
            <ElementsMediaImageItem
              :src="revista.optionalContent.bannerBody.image.asset._ref"
              :alt="revista.optionalContent.bannerBody.image.alt"
              height="150"
              sizes="xs:150px"
              :modifiers="{
                crop: revista.optionalContent.bannerBody.image.crop,
                hotspot: revista.optionalContent.bannerBody.image.hotspot,
                q: 80,
              }"
              fit="cover"
              format="webp"
            />
          </div>
          <div class="banner_content">
            <h2>{{ revista.optionalContent.bannerBody.title }}</h2>
            <div
              v-if="revista.optionalContent.bannerBody.banner"
              class="inner-content"
            >
              {{ revista.optionalContent.bannerBody.banner }}
            </div>
            <div
              v-if="revista.optionalContent.bannerBody.enlace"
              class="enlace"
            >
              <div
                v-if="revista.optionalContent.bannerBody.enlace.linkTarget.slug"
              >
                <NuxtLink
                  :to="`revista/${revista.optionalContent.bannerBody.enlace.linkTarget.slug}`"
                  :title="
                    revista.optionalContent.bannerBody.enlace.linkTarget.title
                  "
                  >{{
                    revista.optionalContent.bannerBody.enlace.title !== null
                      ? revista.optionalContent.bannerBody.enlace.title
                      : revista.optionalContent.bannerBody.enlace.linkTarget
                          .title
                  }}</NuxtLink
                >
              </div>
              <div v-else>
                <OptionalLink
                  :link="revista.optionalContent.bannerBody.enlace"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
      @apply text-xl
        font-normal
        lowercase
        tracking-[1.5rem]
        pl-[1.5rem]
        py-8
        sm:pb-0
        text-slate-400
      dark:text-slate-400
        sm:text-2xl;
    }

    .destacado {
      @apply lg:w-11/12;
    }
  }
</style>
