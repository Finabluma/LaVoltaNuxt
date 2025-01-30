<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  const { menu } = usePagesStore()
  const { menuDia } = useMenuStore()

  function formatPrice(num) {
    return parseFloat(num).toFixed(2)
  }

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
    <HeroSection :items="menu" />
    <main>
      <div class="main_content">
        <div class="menu_content">
          <section>
            <h1 class="sr-only">{{ menuDia.title }}</h1>
            <div class="obs text-pretty">
              <ElementsTextContent
                :blocks="menu.menuConditions"
                class="text-balance"
              />
            </div>
            <div class="card">
              <div>
                <article class="skew">
                  <div class="content">
                    <h2 class="content_title font-bold">
                      {{ menuDia.primeros.title }}
                    </h2>
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
              <div>
                <div class="inner_precio">
                  {{ formatPrice(menu.price) }}€
                  <p class="font-typewriter text-xs">
                    * El precio no incluye bebida.
                  </p>
                </div>
                <div class="excepciones">
                  <div>
                    Medio menu
                    <span>{{ formatPrice(menu.pricehalf) }}€</span>
                  </div>
                  <div>
                    Menú compartido
                    <span>{{ formatPrice(menu.priceshare) }}€</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
    <aside>
      <GalleryReference :page="menu" />
      <OptionalContent :page="menu" />
    </aside>
    <AppFooter />
  </div>
</template>
<style lang="postcss" scoped>
  .main_content {
    @apply w-screen;
  }
  .menu_content {
    @apply relative;
    .obs {
      @apply mb-4;
    }

    section {
      @apply relative;
      .card {
        @apply relative 
        w-11/12
        mx-auto;
      }
      .precio {
        @apply relative
        z-10
        bg-slate-50
        dark:bg-slate-600
        pt-[8%]
        pb-[5%]
        sm:pt-[3%]
        sm:pb-[5%]
        w-screen
        flex
        justify-center
        items-center;
        .inner_precio {
          @apply max-w-sm mx-auto 
          text-8xl;

          p {
            @apply pb-5 content-before text-sm;

            &:before {
              @apply block w-1/12 h-1 mb-2 bg-slate-300 dark:bg-slate-600;
            }
          }
        }
        .excepciones {
          @apply max-w-sm
          mx-auto
          font-mono;

          span {
            @apply font-bold;
          }
        }
      }
    }
  }
</style>
