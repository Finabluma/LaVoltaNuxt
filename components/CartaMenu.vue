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
          panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom',
        pin: true,
        scrub: true,
        pinSpacing: false,
        preventOverlaps: true,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        // snap: 1 / 2,
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
              start: 'center center',
              scrub: true,
              fastScrollEnd: true,
            },
          })
          .to(rect, {
            morphSVG: {
              shape: circle,
              map: 'position',
            },
          })
          .to(svg, {
            rotation: 360 * 5,
            transformOrigin: 'center',
            duration: 1,
          })

        return tlMedia
      }

      // if (isMedia) {
      //   const svg = gsap.utils.selector('.svg')

      //   return tlMedia
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
    h-full
    bg-transparent
    overflow-y-hidden;

    .panel {
      @apply relative
      w-full
      h-[100vh]
      flex
      justify-center
      items-center
      will-change-transform;
    }

    .panel.media {
      @apply relative
      w-full
      h-[100vh];

      .bg {
        @apply absolute
        top-0
        w-full
        h-full
        z-10
        bg-azulejos
        bg-[20vw]
        dark:mix-blend-darken;

        &:before {
          @apply content-['']
          w-full
          h-full
          absolute
          bg-[#27272a]/50
          mix-blend-difference
          dark:bg-secondark
          dark:mix-blend-darken;
        }
      }

      .inner {
        @apply relative
        w-10/12
        sm:w-4/12
        lg:w-6/12
        xl:w-4/12
        bg-transparent;

        .svg {
          @apply relative
          z-20
          w-full
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
        w-auto;
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

    /* .panel {
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
    } */

    .panel.media {
      @apply relative;

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
  }
</style>
