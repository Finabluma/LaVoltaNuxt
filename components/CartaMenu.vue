<script setup>
  import { onMounted, onUnmounted } from 'vue'
  const props = defineProps({
    items: {
      type: Array,
    },
  })
  let main = ref(),
    ctx = ref()
  //GSAP
  const { gsap, ScrollTrigger } = useGsap()

  function tlCartaMenu() {
    let panels = gsap.utils.toArray('.panel')
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          panel.offsetHeight < window.innerHeight
            ? 'top top+=10'
            : 'bottom bottom',
        pin: true,
        scrub: true,
        pinSpacing: false,
        preventOverlaps: true,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        markers: true,
      })

      const isMedia = panel.classList.contains('media')
      const isContent = panel.classList.contains('content')
      const inner = panel.querySelector('.inner')

      if (isMedia) {
        const svg = inner.querySelector('svg')
        const rect = svg.querySelector('.rect')
        const circle = svg.querySelector('.circle')
        const object = svg.querySelector('.object')

        const tlMedia = gsap
          .timeline({
            scrollTrigger: {
              trigger: svg,
              start: 'top center',
              scrub: true,
              fastScrollEnd: true,
            },
          })
          .set(svg, { fillOpacity: 1, strokeOpacity: 1 })
          .add('svg')
          .to(rect, {
            morphSVG: {
              shape: circle,
              map: 'position',
            },
          })
          .fromTo(
            object,
            { drawSVG: '50% 50%' },
            { drawSVG: '100%' },
            'svg-=0.2'
          )
          .to(object, { fillOpacity: 0.8 }, 'svg-=0.2')
          .to(object, { strokeOpacity: 0 }, 'svg-=0.2')

        return tlMedia
      }

      // if (isContent) {
      //   gsap.fromTo(
      //     inner,
      //     { y: 100, opacity: 0 },
      //     {
      //       y: 0,
      //       opacity: 1,
      //       ease: 'power2.out',
      //       delay: 0.2, // Retraso para evitar que todas las animaciones se inicien a la vez
      //       stagger: 0.1, // Stagger para suavizar la animación
      //       scrollTrigger: {
      //         trigger: panel,
      //         start: 'top center',
      //         scrub: true,
      //         preventOverlaps: true, // Previene superposiciones entre animaciones de ScrollTrigger
      //         fastScrollEnd: true,
      //       },
      //     }
      //   )
      // }
    })
  }

  onMounted(() => {
    ctx = gsap.context((self) => {
      tlCartaMenu()
    }, main.value)
  })

  onUnmounted(() => {
    ctx.revert()
  })
</script>
<template>
  <div id="container">
    <article v-for="(item, index) in items" :key="item._key">
      <div class="panel media">
        <div class="inner">
          <div v-if="index == 0" class="svg">
            <SVGCartaCircle />
          </div>
          <div v-if="index == 1" class="svg"><SVGMenuCircle /></div>
        </div>
        <div class="bg"></div>
      </div>
      <div class="panel content">
        <div class="inner">
          <div class="component component--text">
            <h2 class="title-block">{{ item.heading }}</h2>
            <p class="lead">{{ item.tagline }}</p>
            <p>{{ item.excerpt }}</p>

            <div v-if="index == 0">
              <NuxtLink
                to="la-carta"
                :title="item.link.linkTarget.title"
                class="cta"
              >
                {{ item.link.title || item.link.linkTarget.title }}
              </NuxtLink>
            </div>
            <div v-if="index == 1">
              <NuxtLink
                to="el-menu"
                :title="item.link.linkTarget.title"
                class="cta"
              >
                {{ item.link.title || item.link.linkTarget.title }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<style lang="postcss" scoped>
  #container {
    @apply relative
    w-full
    h-full
    overflow-y-hidden;

    article {
      @apply sm:py-8
      lg:flex
      lg:max-w-4xl
      lg:mx-auto
      lg:py-10;
    }

    .panel {
      @apply relative
      w-full
      flex
      justify-center
      items-center
      will-change-transform;
    }

    .panel.media {
      @apply relative
      w-full;

      .inner {
        @apply relative
        w-full
        bg-white
        dark:bg-secondark
        pb-4
        md:mb-0;

        .svg {
          @apply relative
          z-20
          w-4/12
          sm:w-3/12
          md:w-2/12
          lg:w-5/12
          xl:w-5/12
          m-auto;
        }
      }
    }

    .panel.content {
      @apply relative
        bg-white
        dark:bg-secondark;

      .inner {
        @apply bg-white
        dark:bg-secondark
        w-auto
        py-6
        pb-12
        sm:py-10
        md:py-6;
        .component.component--text {
          @apply px-4
          mx-clus3lev
          text-center
          lg:px-0;

          > * {
            @apply mb-clus2lev
            mx-auto;
          }

          h2:after {
            @apply mx-auto;
          }

          .cta {
            @apply mt-5;
          }
        }
      }
    }
  }
</style>
