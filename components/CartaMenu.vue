<script setup>
  const props = defineProps({
    items: {
      type: Array,
    },
  })

  //GSAP
  const { gsap, ScrollTrigger, DrawSVGPlugin } = useGsap()
  function entryToFood() {
    const panels = gsap.utils.toArray('.foodCard')
    panels.forEach((panel) => {
      let q = gsap.utils.selector(panel)
      const tl = gsap
        .timeline()
        .set(q('.content'), { visibility: 'visible', autoAlpha: 0 })
        .set(q('svg'), { visibility: 'visible' })
        .set(q('.object'), {
          visibility: 'visible',
          fill: 'none',
          strokeOpacity: 0,
          strokeWidth: 0
        })
        .add('svg')
        .from(
          q('.object'),
          {
            strokeOpacity: 1,
            strokeWidth: 5,
            drawSVG: 0,
            rotate: -5,
          },
          'svg'
        )
        .to(
          q('.content'),
          {
            autoAlpha: 1,
          },
          'svg'
        )
        .from(
          q('.inner'),
          {
            yPercent: 20,
          },
          'svg'
        )
      ScrollTrigger.create({
        trigger: panel,
        start: 'top+=10% center+=20%',
        end: 'bottom bottom-=10%',
        scrub: true,
        animation: tl,
      })
    })
  }
  function exitToFood() {
    const panels = gsap.utils.toArray('.foodCard')
    panels.forEach((panel) => {
      let q = gsap.utils.selector(panel)
      const tl = gsap
        .timeline()
        .add('svg')
        .from(
          q('.object'),
          {
            drawSVG: '100%',
          },
          'svg'
        )
        .to(q('.svg'), { scale: 0.8, rotate: 10 }, 'svg')
        .to(
          q('.inner-wrapper'),
          {
            yPercent: -60,
            autoAlpha: 0,
          },
          'svg+=0.1'
        )
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        scrub: true,
        pin: panel,
        pinSpacing: false,
        animation: tl,
        snap: 1,
      })
    })
  }
  function masterToFood() {
    const tl = gsap.timeline().add(entryToFood()).add(exitToFood())
    return tl
  }
  defineExpose({
    masterToFood,
  })
</script>
<template>
  <div class="wrapper">
    <article
      v-for="(item, index) in items"
      :key="item._key"
      class="foodCard"
      :class="index == 0 ? 'carta' : 'menudia'"
    >
      <div class="media">
        <div v-if="index == 0" class="svg">
          <SVGCartaCircle />
        </div>
        <div v-if="index == 1" class="svg"><SVGMenuCircle /></div>
      </div>
      <div class="content">
        <div class="inner">
          <div class="inner-wrapper">
            <div v-if="index == 0" class="heading">
              <NuxtLink
                to="la-carta"
                :title="item.link.linkTarget.title"
                class="enlace"
              >
                <h2>{{ item.heading }}</h2>
              </NuxtLink>
            </div>
            <div v-if="index == 1" class="heading">
              <NuxtLink
                to="el-menu"
                :title="item.link.linkTarget.title"
                class="enlace"
              >
                <h2>{{ item.heading }}</h2>
              </NuxtLink>
            </div>
            <div class="inner_content">
              <p>{{ item.tagline }}</p>
              <p>{{ item.excerpt }}</p>
            </div>
            <button class="cta">
              <div v-if="index == 0">
                <NuxtLink to="la-carta" :title="item.link.linkTarget.title">
                  {{ item.link.title || item.link.linkTarget.title }}
                </NuxtLink>
              </div>
              <div v-if="index == 1">
                <NuxtLink to="el-menu" :title="item.link.linkTarget.title">
                  {{ item.link.title || item.link.linkTarget.title }}
                </NuxtLink>
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<style lang="postcss" scoped>
  .wrapper {
    @apply relative
    bg-slate-400
    dark:bg-slate-500;

    .foodCard {
      @apply relative
        mx-auto
        pt-8
        pb-12        
        md:px-10
        lg:flex
        lg:items-center
        lg:py-12;
      .media {
        @apply relative
          z-20
          mb-3
          mx-auto
          content-before
          lg:w-6/12;
        .svg {
          @apply w-28
            h-28
            md:w-40
            md:h-40
            lg:w-60
            lg:h-60
            rounded-xl
            shadow-lg
            mx-auto
            flex
            items-center
            justify-center
            fill-transparent;

          svg {
            @apply w-full
              stroke-[2px];
          }
        }
      }
      .content {
        @apply invisible
          relative
          py-5
          px-2
          mx-auto
          opacity-40
          text-center
          text-balance
          lg:text-left
          lg:w-6/12;
        .inner {
          .inner-wrapper {
            .enlace {
              @apply block;

              h2 {
                @apply text-6xl/tight font-coordinates;
              }
            }

            .inner_content {
              @apply text-balance
                px-1
                mb-8
                md:mb-12;

              p {
                @apply font-sans;
              }

              p:first-of-type {
                @apply px-2
                  uppercase
                  mb-2
                  content-after
                  lg:px-0
                  lg:mb-5;

                &:after {
                  @apply block
                    w-1/12
                    h-1
                    mt-3
                    bg-slate-600
                    dark:bg-slate-400;
                }
              }
            }
          }
        }
      }
    }

    .foodCard.carta .svg,
    .foodCard.menudia .svg {
      @apply bg-slate-400/75
        dark:bg-slate-600;
      svg {
        @apply invisible;
      }
    }

    .foodCard.carta {
      @apply relative;

      .content .inner .inner-wrapper .cta a {
        @apply bg-slate-600/80 border-slate-700
        text-slate-50/50;

        &:hover {
          @apply bg-slate-700 text-slate-300;
        }
      }
    }
    .foodCard.menudia {
      @apply bg-slate-100/50 dark:bg-slate-600/40;

      .content .inner .inner-wrapper .cta a {
        @apply bg-slate-600 border-slate-500/80
        text-slate-400/90;

        &:hover {
          @apply bg-slate-700 text-slate-300;
        }
      }
    }
  }
</style>
