<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  const { menu } = usePagesStore()
  const { menuDia } = useMenuStore()

  // meta
  usePageHead({
    title: menuDia.title,
    seo: menu.seo,
  })

  //GSAP
  const { gsap, ScrollTrigger } = useGsap()
  let main = ref(),
    menuSVG = ref(),
    ctx = ref()

  function smPlatos() {
    let panels = gsap.utils.toArray('article')

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom',
        pin: true,
        pinSpacing: false,
      })
    })
  }
  function skewOnScroll() {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter('.skew', 'skewY', 'deg'), // fast
      clamp = gsap.utils.clamp(-5, 5)

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300)
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          })
        }
      },
    })
    gsap.set('.skew', { transformOrigin: 'right center', force3D: true })
  }
  onMounted(() => {
    ctx = gsap.context((self) => {
      smPlatos()
      skewOnScroll()
      // menuSVG.value.tlDrawSVG()
    }, main.value)
  })
  onUnmounted(() => {
    ctx.revert()
  })
</script>
<template>
  <div class="page">
    <HeroSection>
      <template #content>
        {{ menuDia.title }}
      </template>
      <template #default>
        <div v-if="menu.mainImage">
          <ElementsMediaImageItem
            :src="menu.mainImage.asset._ref"
            :alt="menu.mainImage.alt"
            height="450"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw"
            :modifiers="{
              crop: menu.mainImage.crop,
              hotspot: menu.mainImage.hotspot,
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
        <div class="menu_content">
          <section>
            <h1 class="sr-only">{{ menuDia.title }}</h1>
            <div class="obs">
              <small>{{ menuDia.menuConditions }}</small>
            </div>
            <div class="card">
              <div>
                <article class="skew">
                  <div class="content">
                    <h2 class="content_title">{{ menuDia.primeros.title }}</h2>
                    <MenuItems
                      :platos="menuDia.primeros.platos"
                      class="menu-items"
                    />
                  </div>
                </article>
                <article class="skew">
                  <div class="content">
                    <h2 class="content_title">{{ menuDia.segundos.title }}</h2>
                    <MenuItems
                      :platos="menuDia.segundos.platos"
                      class="menu-items"
                    />
                  </div>
                </article>
                <article class="skew">
                  <div class="content">
                    <h2 class="content_title">{{ menuDia.postres.title }}</h2>
                    <MenuItems
                      :platos="menuDia.postres.platos"
                      class="menu-items"
                    />
                  </div>
                </article>
              </div>
            </div>
            <div class="precio">
              <div class="inner_precio">
                {{ menuDia.price }}€
                <p class="font-typewriter">*El precio incluye IVA.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
    <aside v-if="menu.optionalContent !== null">
      <div v-if="menu.optionalContent.gallery !== null">
        <LazySlideShow
          :title="menu.optionalContent.gallery.description"
          :images="menu.optionalContent.gallery.gallery.images"
        />
      </div>
      <div v-if="menu.optionalContent.bannerBody !== null" class="banner">
        <div class="banner_wrapper">
          <div v-if="menu.optionalContent.bannerBody.image" class="image">
            <ElementsMediaImageItem
              :src="menu.optionalContent.bannerBody.image.asset._ref"
              :alt="menu.optionalContent.bannerBody.image.alt"
              height="150"
              sizes="xs:150px"
              :modifiers="{
                crop: menu.optionalContent.bannerBody.image.crop,
                hotspot: menu.optionalContent.bannerBody.image.hotspot,
                q: 80,
              }"
              fit="cover"
              format="webp"
            />
          </div>
          <div class="banner_content">
            <h2>{{ menu.optionalContent.bannerBody.title }}</h2>
            <div
              v-if="menu.optionalContent.bannerBody.banner"
              class="inner-content"
            >
              {{ menu.optionalContent.bannerBody.banner }}
            </div>
            <div v-if="menu.optionalContent.bannerBody.enlace" class="enlace">
              <div
                v-if="menu.optionalContent.bannerBody.enlace.linkTarget.slug"
              >
                <NuxtLink
                  :to="`revista/${menu.optionalContent.bannerBody.enlace.linkTarget.slug}`"
                  :title="
                    menu.optionalContent.bannerBody.enlace.linkTarget.title
                  "
                  >{{
                    menu.optionalContent.bannerBody.enlace.title !== null
                      ? menu.optionalContent.bannerBody.enlace.title
                      : menu.optionalContent.bannerBody.enlace.linkTarget.title
                  }}</NuxtLink
                >
              </div>
              <div v-else>
                <OptionalLink :link="menu.optionalContent.bannerBody.enlace" />
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
  .main_content {
    @apply w-screen;
  }
  .menu_content {
    @apply relative pb-[calc(2%)];
    .obs {
      @apply mb-4;
    }
    section {
      @apply relative;
      .card {
        @apply relative 
        w-11/12
        mx-auto
        md:w-8/12;
      }
      .precio {
        @apply relative
        z-10
        w-full
        bg-slate-50
        dark:bg-slate-600
        pt-[8%]
        pb-[5%]
        sm:pt-[3%]
        sm:pb-[1%]
        flex
        justify-center;
        .inner_precio {
          @apply max-w-screen-md mx-auto 
          text-8xl;

          p {
            @apply pb-2 content-before text-sm;

            &:before {
              @apply block w-1/12 h-1 mb-2 bg-slate-300 dark:bg-slate-600;
            }
          }
        }
      }
    }
  }
</style>
