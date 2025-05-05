<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  const { carta } = usePagesStore()
  const { tintos, blancos, rosados, cavas, title } = useBebidaStore()
  const { mar, postre, tierra, carpaccio } = usePlatoStore()

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
    <div v-if="carta.bannerUrgent !== null">
      <AppModal
        :budskap="carta"
        v-show="showModal"
        @close-modal="showModal = false"
      />
    </div>
    <!-- <HeroSection :items="carta" /> -->
    <main>
      <div class="content">
        <HeroSection>
          <h2>{{ carta.title }}</h2>
          <ElementsTextContent :blocks="carta.warning" />
        </HeroSection>
        <div class="carta_content" ref="main">
          <article>
            <h1 class="sr-only">{{ carta.title }}</h1>
            <section class="platos">
              <h2 class="skew">Platos</h2>

              <CartaItems :items="mar"
                ><NuxtIcon name="DelMar" class="icon" />{{
                  mar.tipo.title
                }}</CartaItems
              >
              <CartaItems :items="tierra"
                ><NuxtIcon name="DeLaTierra" class="icon" />{{
                  tierra.tipo.title
                }}</CartaItems
              >
              <CartaItems :items="carpaccio"
                ><NuxtIcon name="Carpaccio" class="icon" />{{
                  carpaccio.tipo.title
                }}</CartaItems
              >
              <CartaItems :items="postre"
                ><NuxtIcon name="Postre" class="icon" />{{
                  postre.tipo.title
                }}</CartaItems
              >
            </section>
            <section class="bebida">
              <h2 class="skew">{{ title.title }}</h2>
              <CartaItems :items="tintos">
                <NuxtIcon name="Tinto" class="icon" />{{ tintos.tipo.title }}
              </CartaItems>
              <CartaItems :items="rosados">
                <NuxtIcon name="Rosado" class="icon" />{{ rosados.tipo.title }}
              </CartaItems>
              <CartaItems :items="blancos">
                <NuxtIcon name="Blanco" class="icon" />{{ blancos.tipo.title }}
              </CartaItems>
              <CartaItems :items="cavas">
                <NuxtIcon name="Cava" class="icon" />{{ cavas.tipo.title }}
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
<!-- <style lang="postcss" scoped>
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
    @apply max-w-screen-xl 
    mx-auto 
    pb-10;

    h2 {
      @apply font-cameo
        px-[5%]
        mb-5;

      &:after {
        @apply content-['']
        block 
        h-1 
        w-10 
        mt-2 
        bg-primary
        dark:bg-[#A8B2BB];
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
</style> -->
