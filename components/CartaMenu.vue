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
        .set(q('.circle'), { strokeOpacity: 0, fillOpacity: 0, strokeWidth: 4 })
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
  <div class="carta-menu">
    <article
      v-for="(item, index) in items"
      :key="item._key"
      class="carta-menu__inner"
      :class="index == 0 ? 'carta' : 'menudia'"
    >
      <div class="media">
        <div v-if="index == 0" class="svg">
          <SVGCartaCircle />
        </div>
        <div v-if="index == 1" class="svg item"><SVGMenuCircle /></div>
      </div>
      <div class="content">
        <hgroup>
          <h2>{{ item.heading }}</h2>
          <h3>{{ item.tagline }}</h3>
        </hgroup>
        <div class="inner_content">
          <p>{{ item.excerpt }}</p>
        </div>
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
    </article>
  </div>
</template>
<style lang="postcss" scoped>
  .carta-menu {
    @apply relative 
    px-2    
    mx-auto
    md:bg-white
    md:dark:bg-white/10;

    .carta-menu__inner {
      @apply mx-auto
      max-w-6xl
      text-center
      md:text-left
      px-6
      py-5     
      first:mb-5
      
      md:py-20
      md:first:mb-0
      md:grid
      md:grid-cols-2
      md:items-center;

      p {
        @apply font-semibold;
      }

      .media {
        @apply flex-shrink-0
        w-24
        mx-auto
        mb-5
        sm:w-20
        md:w-4/12
        lg:w-5/12;
      }

      .content {
        @apply lg:pr-10;

        hgroup {
          @apply mb-3;

          h2 {
            @apply text-xl;
          }

          h3 {
            @apply uppercase;
          }
        }

        .inner_content {
          @apply mb-10;
        }
      }
    }
  }
</style>
