<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  const { home } = usePagesStore()

  const isFeatured = computed(() => {
    return home.portada.portada.cover.filter((item) => item.featured !== false)
  })

  const destacado = computed(() => {
    return isFeatured.value[0].article
  })

  //GSAP
  const { gsap, ScrollTrigger } = useGsap()

  let main = ref(),
    ctx = ref(),
    intro = ref(),
    food = ref()

  function smDestacadoIn() {
    let q = gsap.utils.selector('.destacado')
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.articleHome',
        start: 'top top',
        end: 'bottom bottom-=10%',
        scrub: true,
        snap: 1,
      },
    })
    return tl
  }

  function smDestacadoOut() {
    let q = gsap.utils.selector('.artHomeContent')
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.articleHome',
          start: 'top top',
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      })
      .to(q('h1'), { yPercent: -20, autoAlpha: 0 })
      .to(q('.destacado'), { yPercent: -40, autoAlpha: 0 }, '0')
    return tl
  }

  function smDestacadoMaster() {
    let mm = gsap.matchMedia()
    mm.add('(min-width: 320px) and (orientation:portrait)', () => {
      let tl = gsap.timeline().add(smDestacadoIn()).add(smDestacadoOut())
    }).add('(min-width:1024px)', () => {
      let tl1 = gsap.timeline().add(smDestacadoIn()).add(smDestacadoOut())
    })
    return mm
  }

  onMounted(() => {
    ctx = gsap.context((self) => {
      food.value.masterToFood(), intro.value.intro(), smDestacadoMaster()
    }, main.value)
  })

  onUnmounted(() => {
    ctx.revert()
  })
</script>
<template>
  <div class="page" ref="main">
    <HeroSection>
      <template #content>
        {{ home.title }}
      </template>
      <template #default>
        <div v-if="home.mainImage">
          <ElementsMediaImageItem
            :src="home.mainImage.asset._ref"
            :alt="home.mainImage.alt"
            height="450"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
            :modifiers="{
              crop: home.mainImage.crop,
              hotspot: home.mainImage.hotspot,
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
      <div class="home_content">
        <section>
          <IntroHome
            :subtitle="home.subtitle"
            :content="home.content"
            ref="intro"
          />
          <CartaMenu :items="home.cartamenu" ref="food" />
          <div v-if="isFeatured" class="articleHome">
            <div class="artHomeContent">
              <h1 class="text-center leading-1">
                {{ home.portada.portada.title }}
              </h1>
              <div class="destacado w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
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
            </div>
          </div>
        </section>
      </div>
    </main>
    <aside v-if="home.optionalContent !== null">
      <div v-if="home.optionalContent.gallery !== null">
        <LazySlideShow
          :title="home.optionalContent.gallery.description"
          :images="home.optionalContent.gallery.gallery.images"
        />
      </div>
      <div v-if="home.optionalContent.bannerBody !== null" class="banner">
        <div class="banner_wrapper">
          <div v-if="home.optionalContent.bannerBody.image" class="image">
            <ElementsMediaImageItem
              :src="home.optionalContent.bannerBody.image.asset._ref"
              :alt="home.optionalContent.bannerBody.image.alt"
              height="150"
              sizes="xs:150px"
              :modifiers="{
                crop: home.optionalContent.bannerBody.image.crop,
                hotspot: home.optionalContent.bannerBody.image.hotspot,
                q: 80,
              }"
              fit="cover"
              format="webp"
            />
          </div>
          <div class="banner_content">
            <h2>{{ home.optionalContent.bannerBody.title }}</h2>
            <div
              v-if="home.optionalContent.bannerBody.banner"
              class="inner-content"
            >
              {{ home.optionalContent.bannerBody.banner }}
            </div>
            <div v-if="home.optionalContent.bannerBody.enlace" class="enlace">
              <div
                v-if="home.optionalContent.bannerBody.enlace.linkTarget.slug"
              >
                <NuxtLink
                  :to="`revista/${home.optionalContent.bannerBody.enlace.linkTarget.slug}`"
                  :title="
                    home.optionalContent.bannerBody.enlace.linkTarget.title
                  "
                  >{{
                    home.optionalContent.bannerBody.enlace.title !== null
                      ? home.optionalContent.bannerBody.enlace.title
                      : home.optionalContent.bannerBody.enlace.linkTarget.title
                  }}</NuxtLink
                >
              </div>
              <div v-else>
                <OptionalLink :link="home.optionalContent.bannerBody.enlace" />
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
  .articleHome {
    @apply relative 
    min-h-dvh
    bg-slate-50
    dark:bg-slate-600
    border-t-2
    border-t-slate-200
    dark:border-t-slate-700
    flex
    flex-col
    justify-evenly
    py-6
    sm:pb-12
    md:portrait:min-h-full
    md:portrait:h-[70dvh];

    .artHomeContent {
      @apply flex
      flex-col
      justify-evenly;
    }
  }
</style>
