<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps({
  items: {
    type: Array,
  },
})
//GSAP
const { gsap, ScrollTrigger } = useGsap()

const cartamenu = ref(null)
let ctx, mm

onMounted(() => {
  ctx = gsap.context(() => {
    mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: '(min-width: 1024px)',
        isMobile: '(max-width: 1023px)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions
        const panels = gsap.utils.toArray('.panel')

        panels.forEach((panel) => {
          ScrollTrigger.create({
            trigger: panel,
            start:
              panel.offsetHeight < window.innerHeight
                ? 'top top+=10'
                : 'bottom bottom',
            pin: isDesktop, // aquí controlamos el pin según el dispositivo
            pinSpacing: false,
            scrub: true,
            fastScrollEnd: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          })

          // Animación SVG si .media
          if (panel.classList.contains('media')) {
            const inner = panel.querySelector('.inner')
            if (!inner) return

            const svg = inner.querySelector('svg')
            if (!svg) return

            const rect = svg.querySelector('.rect')
            const circle = svg.querySelector('.circle')
            if (!rect || !circle) return

            gsap.timeline({
              scrollTrigger: {
                trigger: panel,
                start: 'top center',
                scrub: true,
                fastScrollEnd: true,
              },
            })
              .to(circle, {
                morphSVG: { shape: rect, map: 'position' },
              })
          }

          // Animación de entrada suave solo en móvil para panel.content
          if (isMobile && panel.classList.contains('content')) {
            gsap.fromTo(
              panel,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: panel,
                  start: 'top 90%',
                  toggleActions: 'play reverse play reverse',
                },
              }
            )
          }
        })
      }
    )
  }, cartamenu.value)

})

onUnmounted(() => {
  if (mm) mm.revert()
  if (ctx) ctx.revert()
})
</script>
<template>
  <div id="container" ref="cartamenu">
    <article v-for="(item, index) in items" :key="item._key">
      <div class="panel media">
        <div class="inner">
          <div v-if="index == 0" class="svg">
            <SVGCartaCircle />
          </div>
          <div v-if="index == 1" class="svg">
            <SVGMenuCircle />
          </div>
        </div>
      </div>
      <div class="panel content">
        <div class="inner">
          <div class="component component--text">
            <h2 class="title-block">{{ item.heading }}</h2>
            <p class="lead">{{ item.tagline }}</p>
            <p>{{ item.excerpt }}</p>

            <div v-if="index == 0">
              <NuxtLink to="la-carta" :title="item.link.linkTarget.title" class="cta" aria-label="Carta">
                {{ item.link.title || item.link.linkTarget.title }}
              </NuxtLink>
            </div>
            <div v-if="index == 1">
              <NuxtLink to="el-menu" :title="item.link.linkTarget.title" class="cta" aria-label="Menu">
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
  @apply relative w-full;

  article {
    @apply l-center lg:flex lg:items-center;
  }

  .panel {
    @apply relative w-full bg-white dark:bg-secondark will-change-transform;

    .inner {
      @apply flex justify-center;
    }
  }

  .media {
    .inner {
      .svg {
        @apply relative z-20 w-7/12 py-10 sm:w-5/12 md:w-4/12 md:py-2 lg:w-8/12 lg:py-8;
      }
    }
  }

  .content {
    @apply relative bg-white dark:bg-secondark;

    .inner {
      @apply bg-white dark:bg-secondark w-auto py-5 sm:py-10 lg:py-20;

      .component.component--text {
        @apply text-center lg:px-0 lg:text-left lg:mx-0;

        >* {
          @apply mb-clus2lev mx-auto;
        }

        .title-block {
          @apply mb-5 text-xl uppercase;

          &:after {
            @apply mx-auto lg:ml-0;
          }
        }

        .cta {
          @apply mt-5;
        }
      }
    }
  }
}
</style>
