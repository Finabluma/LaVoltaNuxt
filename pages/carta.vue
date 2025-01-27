<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  const { carta } = usePagesStore()
  const { tintos, blancos, rosados, cavas, title } = useBebidaStore()
  const { mar, obs, postre, tierra, carpaccio } = usePlatoStore()

  // meta
  usePageHead({
    title: carta.title,
    seo: carta.seo,
  })

  // GSAP
  const { gsap, ScrollTrigger } = useGsap()
  let main = ref(),
    ctx = ref()

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
      skewOnScroll()
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
        <div>
          {{ carta.title }}
        </div>
      </template>
      <template #default>
        <div v-if="carta.mainImage">
          <ElementsMediaImageItem
            :src="carta.mainImage.asset._ref"
            :alt="carta.mainImage.alt"
            height="450"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw"
            :modifiers="{
              crop: carta.mainImage.crop,
              hotspot: carta.mainImage.hotspot,
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
        <div class="carta_content" ref="main">
          <article>
            <h1 class="sr-only">{{ carta.title }}</h1>
            <section class="platos">
              <div class="obs text-pretty skew">
                <ElementsTextContent
                  :blocks="carta.warning"
                  class="text-balance"
                />
              </div>
              <h2 class="skew">Platos</h2>

              <CartaItems :items="mar"
                ><NuxtIcon name="PhFishSimpleFill" class="icon" />{{
                  mar.tipo.title
                }}</CartaItems
              >
              <CartaItems :items="tierra"
                ><NuxtIcon name="PhCowBold" class="icon" />{{
                  tierra.tipo.title
                }}</CartaItems
              >
              <CartaItems :items="carpaccio"
                ><NuxtIcon name="IcOutlinePanoramaFishEye" class="icon" />{{
                  carpaccio.tipo.title
                }}</CartaItems
              >
              <CartaItems :items="postre"
                ><NuxtIcon name="EpDessert" class="icon" />{{
                  postre.tipo.title
                }}</CartaItems
              >
            </section>
            <section class="bebida">
              <h2 class="skew">{{ title.title }}</h2>
              <CartaItems :items="tintos">
                <NuxtIcon name="PhWineFill" class="icon" />{{
                  tintos.tipo.title
                }}
              </CartaItems>
              <CartaItems :items="rosados">
                <NuxtIcon name="PhWineDuotone" class="icon" />{{
                  rosados.tipo.title
                }}
              </CartaItems>
              <CartaItems :items="blancos">
                <NuxtIcon name="PhWine" class="icon" />{{ blancos.tipo.title }}
              </CartaItems>
              <CartaItems :items="cavas">
                <NuxtIcon name="GameIconsChampagneCork" class="icon" />{{
                  cavas.tipo.title
                }}
              </CartaItems>
            </section>
          </article>
        </div>
      </div>
    </main>
    <aside>
      <GalleryReference :page="carta" />
      <OptionalContent :page="carta" />
    </aside>
    <AppFooter />
  </div>
</template>
<style lang="postcss" scoped>
  .main_content {
    @apply w-screen
    my-0
    lg:mb-10;

    .obs {
      @apply max-w-screen-md;
    }
  }
  #footer {
    @apply w-screen;
  }
  .carta_content {
    @apply mx-auto pb-8;
    h2 {
      @apply font-cameo
      /* text-pink-400 */
        dark:text-slate-500
        px-[5%]
        mb-5;
      /* content-after; */

      &:after {
        @apply block h-1 w-10 mt-6 bg-pink-400 dark:bg-slate-400;
      }
    }

    .icon {
      @apply mr-2;
    }

    .platos {
      @apply pb-10;
    }

    .bebida h2 {
      @apply mb-5;
    }
  }
</style>
