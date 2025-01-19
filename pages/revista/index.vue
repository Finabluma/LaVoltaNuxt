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
          <section>
            <h1 class="text-center">{{ revista.portada.title }}</h1>
            <div v-if="isFeatured" class="destacado">
              <ArticleTeaser title="Destacado" :heading="destacado.title">
                <template #media>
                  <ElementsMediaImageItem
                    :src="destacado.mainImage.asset._ref"
                    :alt="destacado.mainImage.alt"
                    :modifiers="{
                      crop: destacado.mainImage.crop,
                      hotspot: destacado.mainImage.hotspot,
                      q: 80,
                    }"
                    sizes="xs:100vw"
                    height="200"
                    fit="cover"
                    format="webp"
                  />
                </template>
                <template #default>
                  <div>
                    <ElementsTextLink
                      link-type="internalLinkType"
                      route="revista-slug"
                      :slug="destacado.slug"
                      >{{ destacado.title }}
                    </ElementsTextLink>

                    <div v-if="destacado.subtitle" class="subtitle">
                      {{ destacado.subtitle }}
                    </div>
                    <!-- <ArticleDate /> -->
                    <div v-if="destacado.categories" class="categories">
                      <ArticleCategories
                        :tags="destacado.categories"
                        title="Categorias"
                      />
                    </div>
                  </div>
                </template>
              </ArticleTeaser>
            </div>
            <div v-if="notFeatured" class="portada">
              <div class="titleblock">otras cosas ...</div>
              <div v-for="item in notFeatured" :key="item.slug">
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
                    <div>
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
                      <!-- <ArticleDate /> -->
                    </div>
                  </template>
                </ArticleTeaser>
              </div>
            </div>
          </section>
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
  }
</style>
