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
    const panels = document.querySelectorAll('#container .panel')

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom',
        anticipatePin: 1,
        pin: true,
        scrub: true,
        pinSpacing: false, // Sin espacio adicional al fijar el panel
        preventOverlaps: true, // Previene superposiciones entre animaciones de ScrollTrigger
        fastScrollEnd: true,
        // snap: 1 / 2,
      })

      // // Animación de "pin" suave
      // pinTimeline.to(panel, {
      //   y: 0, // Sin desplazamiento adicional, pero con animación suave
      //   ease: 'power2.out',
      //   duration: 1, // Duración de la animación de "pin"
      // })

      const isMedia = panel.classList.contains('media')
      const isContent = panel.classList.contains('content')
      const inner = panel.querySelector('.inner')

      // if (isMedia) {
      //   const svg = inner.querySelector('svg')
      //   const rect = svg.querySelector('.rect')
      //   const circle = svg.querySelector('.circle')
      //   const object = svg.querySelector('.object')
      //   let tl = gsap
      //     .timeline({
      //       scrollTrigger: {
      //         trigger: svg,
      //         start: 'center center',
      //         scrub: true,
      //         fastScrollEnd: true,
      //         preventOverlaps: true, // Previene superposiciones entre animaciones de ScrollTrigger
      //       },
      //     })
      //     .set(object, { fillOpacity: '100%', strokeOpacity: '100%' })
      //     .to(rect, {
      //       morphSVG: {
      //         shape: circle,
      //         map: 'position',
      //       },
      //     })
      //     .fromTo(object, { drawSVG: '50% 50%' }, { drawSVG: '100%' }, '-=0.2')
      //     .to(object, { fillOpacity: '80%' }, '-=0.4')
      //     .to(object, { strokeOpacity: '0' }, '-=0.4')
      //     .to(svg, { yPercent: -10 }, '-=0.2')

      //   return tl
      // }

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
    <article
      v-for="(item, index) in items"
      :key="item._key"
      :class="index == 0 ? 'carta' : 'menudia'"
    >
      <div class="panel media">
        <div class="bg"></div>
        <div class="inner">
          <div v-if="index == 0" class="svg">
            <SVGCartaCircle />
          </div>
          <div v-if="index == 1" class="svg"><SVGMenuCircle /></div>
        </div>
      </div>
      <div class="panel content">
        <div class="inner">
          <div class="component component--text">
            <h2 class="title-block">{{ item.heading }}</h2>
            <div class="mb-clus3lev">
              <p class="lead">{{ item.tagline }}</p>
              <p>{{ item.excerpt }}</p>
            </div>
            <div v-if="index == 0" class="mt-10">
              <NuxtLink
                to="la-carta"
                :title="item.link.linkTarget.title"
                class="cta-invert"
              >
                {{ item.link.title || item.link.linkTarget.title }}
              </NuxtLink>
            </div>
            <div v-if="index == 1" class="mt-10">
              <NuxtLink
                to="el-menu"
                :title="item.link.linkTarget.title"
                class="cta-invert"
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
    min-h-dvh;

    article {
      @apply h-[200%];
    }

    .panel {
      @apply w-full
        flex
        justify-center
        items-center
        will-change-transform;

      .inner {
        @apply w-full
        h-dvh      
        flex
        justify-center
        items-center;
      }

      &.media {
        @apply relative
        h-dvh
        z-10;
      }

      &.content {
        @apply relative
        h-dvh
        z-10;
      }
    }

    .panel.media {
      @apply relative;
      .bg {
        @apply absolute
        w-full
        h-dvh
        z-20
        bg-azulejos
        bg-cover
        bg-center
        dark:mix-blend-darken;

        &:before {
          @apply content-['']
          w-full
          h-full
          z-30
          absolute
          bg-[#27272a]/50
          mix-blend-difference
          dark:bg-secondark
          dark:mix-blend-darken;
        }
      }
      .svg {
        @apply relative
        z-20
        w-9/12
        landscape:max-lg:w-3/12
        md:w-5/12
        lg:w-4/12
        xl:w-4/12
        m-auto;
      }
    }

    .panel.content {
      @apply bg-white
      dark:bg-secondark;
      .inner {
        @apply bg-white
      dark:bg-secondark
        w-full
        h-dvh
        relative;
        .component {
          @apply l-box 
          px-4
          mx-clus3lev
          border-4
          bg-firstlight
          text-white
          dark:bg-firstdark
          dark:text-secondark;

          > * {
            @apply mb-clus3lev;
          }
        }
      }
    }
  }
</style>
