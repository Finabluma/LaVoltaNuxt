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

function PanelsTl() {
  const panels = gsap.utils.toArray('.panel')
  panels.forEach((panel) => {
    ScrollTrigger.create({
      trigger: panel,
      start:
        panel.offsetHeight < window.innerHeight
          ? 'top top+=10'
          : 'bottom bottom',
      pin: true, // aquí controlamos el pin según el dispositivo
      pinSpacing: false,
      scrub: true,
      fastScrollEnd: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    })

    const media = panel.querySelector('.media')

    const content = panel.querySelector('.content')

    if (media) {
      const rect = media.querySelector('.rectSVG')
      const circle = media.querySelector('.circleSVG')
      const obj = media.querySelector('.objectSVG')

      let tl = gsap.timeline().to(circle, {
        morphSVG: { shape: rect, map: 'position' },
      })

      ScrollTrigger.create({
        trigger: panel,
        start: 'center center',
        scrub: true,
        animation: tl
      })
    }

    if (content) {
      const text = panel.querySelector('.component--text')
      let tl = gsap.timeline().to(text, {
        yPercent: 10,
      }).to(text, {
        autoAlpha: 0
      })
      ScrollTrigger.create({
        trigger: panel,
        start: 'center center',
        scrub: true,
        animation: tl,
      })

    }
  })
}


onMounted(() => {
  ctx = gsap.context(() => {
    PanelsTl()
  }, cartamenu.value)
})

onUnmounted(() => {
  ctx.revert()
})


</script>
<template>
  <div class="carta-menu" ref="cartamenu">
    <article v-for="(item, index) in items" :key="item._key">
      <div class="panel ">
        <div class="media">
          <div v-if="index == 0">
            <SVGCartaCircle />
          </div>
          <div v-if="index == 1">
            <SVGMenuCircle />
          </div>
        </div>
      </div>
      <div class="panel ">
        <div class="content w-auto text-center md:text-left">
          <div class="component--text py-5">
            <div>
              <h2>{{ item.heading }}</h2>
              <p class="lead">{{ item.tagline }}</p>
            </div>
            <p>{{ item.excerpt }}</p>
            <div v-if="index == 0">
              <NuxtLink to="la-carta" :title="item.link.linkTarget.title" class="custom-btn" aria-label="Carta">
                {{ item.link.title || item.link.linkTarget.title }}
              </NuxtLink>
            </div>
            <div v-if="index == 1">
              <NuxtLink to="el-menu" :title="item.link.linkTarget.title" class="custom-btn" aria-label="Menu">
                {{ item.link.title || item.link.linkTarget.title }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
