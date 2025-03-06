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
        .set(q('.content'), { visibility: 'visible' })
        .set(q('.item'), { y: '+=100' })
        .set(q('svg'), { visibility: 'visible', rotation: 180 })
        .set(q('.circle'), { strokeOpacity: 0, fillOpacity: 0, strokeWidth: 1 })
        .set(q('.object'), {
          fillOpacity: 0,
          strokeWidth: 5,
        })
        .add('svg')
        .to(
          q('svg'),
          {
            rotate: 0,
          },
          'svg'
        )
        .from(
          q('.circle'),
          {
            strokeOpacity: 0,
            drawSVG: 0,
          },
          'svg'
        )
        .to(
          q('.circle'),
          {
            fillOpacity: '100%',
          },
          'svg+=0.5'
        )
        .to(
          q('.object'),
          {
            strokeOpacity: 0,
            drawSVG: 0,
          },
          'svg+=0.8'
        )
        .to(
          q('.object'),
          {
            fillOpacity: 1,
          },
          'svg'
        )
        .to(
          q('.item'),
          {
            autoAlpha: 1,
            stagger: {
              y: 0,
              each: 0.1,
            },
          },
          'svg'
        )

      ScrollTrigger.create({
        trigger: panel,
        start: 'clamp(top center+=20%)',
        end: 'clamp(bottom bottom-=30%)',
        scrub: true,
        animation: tl,
      })
    })
  }
  function masterToFood() {
    entryToFood()
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
        <div v-if="index == 1" class="svg item"><SVGMenuCircle /></div>
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
                <h2 class="item">{{ item.heading }}</h2>
                <p class="item">{{ item.tagline }}</p>
              </NuxtLink>
            </div>
            <div v-if="index == 1" class="heading">
              <NuxtLink
                to="el-menu"
                :title="item.link.linkTarget.title"
                class="enlace"
              >
                <h2 class="item">{{ item.heading }}</h2>
                <p class="item">{{ item.tagline }}</p>
              </NuxtLink>
            </div>
            <div class="inner_content item">
              <p>{{ item.excerpt }}</p>
            </div>
            <button class="cta item">
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
    lg:py-10
    bg-white
    dark:bg-[#4A647D];
    .foodCard {
      @apply relative
        mx-auto
        py-5
        lg:w-10/12
        xl:w-9/12;
      .media {
        @apply relative
          z-20
          mx-auto
          lg:w-6/12;
        .svg {
          @apply w-28
            h-28
            md:w-36
            md:h-36
            mx-auto
            flex
            items-center
            justify-center;
        }
      }
      .content {
        @apply invisible
          relative
          py-2
          mx-auto
          text-center
          text-balance;
        .inner {
          @apply py-3
          mb-6;
          .inner-wrapper {
            @apply p-3;
            .item {
              @apply opacity-0;
            }
            .enlace {
              @apply block;

              h2 {
                @apply text-4xl/tight;
              }

              p {
                @apply font-semibold
                  uppercase
                  lg:px-0;
              }
            }

            .inner_content {
              @apply font-semibold
              text-balance
              mb-8
              px-6
              py-5
              lg:px-0;
            }
          }
        }
      }
    }

    .foodCard.carta .svg,
    .foodCard.menudia .svg {
      svg {
        @apply invisible;
      }
    }
  }
</style>
