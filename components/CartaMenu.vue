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
    let panels = gsap.utils.toArray('article')

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom',
        pin: true,
        scrub: true,
        pinSpacing: false,
        preventOverlaps: true,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      })

      const isMedia = panel.classList.contains('media')

      if (isMedia) {
        const svg = inner.querySelector('svg')
        const rect = svg.querySelector('.rect')
        const circle = svg.querySelector('.circle')
        const object = svg.querySelector('.object')

        const tlMedia = gsap
          .timeline({
            scrollTrigger: {
              trigger: panel,
              start: 'center center',
              end: 'bottom bottom',
              pin: true,
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
      <div class="inner">
        <div class="media">
          <div v-if="index == 0" class="svg">
            <SVGCartaCircle />
          </div>
          <div v-if="index == 1" class="svg"><SVGMenuCircle /></div>
        </div>
        <div class="content">
          <div class="component component--text">
            <div class="inner-component mb-clus3lev">
              <h2 class="title-block">{{ item.heading }}</h2>
              <div>
                <p class="lead">{{ item.tagline }}</p>
                <p>{{ item.excerpt }}</p>
              </div>
            </div>

            <div v-if="index == 0" class="mt-10">
              <NuxtLink
                to="la-carta"
                :title="item.link.linkTarget.title"
                class="cta"
              >
                {{ item.link.title || item.link.linkTarget.title }}
              </NuxtLink>
            </div>
            <div v-if="index == 1" class="mt-10">
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
    <!-- <div class="bg"></div> -->
  </div>
</template>
<style lang="postcss" scoped>
  #container {
    @apply relative
    l-box
    l-box--no-border
    py-0
    lg:grid
    lg:grid-cols-2
    lg:gap-5;
  }

  article {
    @apply relative
    z-20
    mx-auto
    mb-clus3lev;

    .inner {
      @apply relative
      l-box
      bg-black
      dark:bg-firstdark;

      &:before {
        @apply content-['']
        absolute
        top-0
        left-0
        w-full
        h-full
        bg-azulejos
        bg-cover
        mix-blend-overlay
        dark:mix-blend-color-dodge;
      }
    }

    .media {
      @apply relative
      z-30
      w-full
      mb-clus3lev;

      .svg {
        @apply w-4/12
        md:w-2/12;
      }
    }

    .content {
      @apply relative
      z-20
      w-full
      mx-auto
       
      lg:px-2;

      .inner-component {
        @apply p-2
        text-white
      dark:text-secondark
      bg-black
      dark:bg-firstdark;
      }

      .title-block {
        @apply text-2xl;
      }

      .lead {
        @apply mb-clus3lev;
      }
    }
  }
</style>
