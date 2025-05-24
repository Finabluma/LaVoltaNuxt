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

// onMounted(() => {
//   ctx = gsap.context(() => {
//     mm = gsap.matchMedia()

//     mm.add(
//       {
//         isDesktop: '(min-width: 1024px)',
//         isMobile: '(max-width: 1023px)',
//       },
//       (context) => {
//         const { isDesktop, isMobile } = context.conditions
//         const panels = gsap.utils.toArray('.panel')

//         panels.forEach((panel) => {
//           ScrollTrigger.create({
//             trigger: panel,
//             start:
//               panel.offsetHeight < window.innerHeight
//                 ? 'top top+=10'
//                 : 'bottom bottom',
//             pin: isDesktop, // aquí controlamos el pin según el dispositivo
//             pinSpacing: false,
//             scrub: true,
//             fastScrollEnd: true,
//             anticipatePin: 1,
//             invalidateOnRefresh: true,
//           })

//           // Animación SVG si .media
//           if (panel.classList.contains('media')) {
//             const inner = panel.querySelector('.inner')
//             if (!inner) return

//             const svg = inner.querySelector('svg')
//             if (!svg) return

//             const rect = svg.querySelector('.rectSVG')
//             const circle = svg.querySelector('.circleSVG')
//             if (!rect || !circle) return

//             gsap.timeline({
//               scrollTrigger: {
//                 trigger: panel,
//                 start: 'top center',
//                 scrub: true,
//                 fastScrollEnd: true,
//               },
//             })
//               .to(circle, {
//                 morphSVG: { shape: rect, map: 'position' },
//               })
//           }

//           // Animación de entrada suave solo en móvil para panel.content
//           if (isMobile && panel.classList.contains('content')) {
//             gsap.fromTo(
//               panel,
//               { opacity: 0, y: 30 },
//               {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.8,
//                 ease: 'power2.out',
//                 scrollTrigger: {
//                   trigger: panel,
//                   start: 'top 90%',
//                   toggleActions: 'play reverse play reverse',
//                 },
//               }
//             )
//           }
//         })
//       }
//     )
//   }, cartamenu.value)

// })

// onUnmounted(() => {
//   if (mm) mm.revert()
//   if (ctx) ctx.revert()
// })
</script>
<template>
  <div class="relative max-w-5xl mx-auto px-[2vw] mt-10 " ref="cartamenu">
    <article v-for="(item, index) in items" :key="item._key"
      class="l-box first:mb-10 bg-slate-200 dark:bg-[#97b4cf] md:flex md:items-center">
      <div class="panel bg-slate-200 dark:bg-[#97b4cf] md:w-4/12 
      md:shrink-0 will-change-transform">
        <div class="relative z-20 w-6/12 sm:w-3/12 mx-auto mb-2 md:w-full md:ml-0 ">
          <div v-if="index == 0">
            <SVGCartaCircle />
          </div>
          <div v-if="index == 1">
            <SVGMenuCircle />
          </div>
        </div>
      </div>
      <div class="panel bg-slate-200 dark:bg-[#97b4cf] will-change-transform">
        <div class="text-center md:text-left">
          <div class="component--text md:px-5 lg:px-7">
            <div class=" mb-5 px-2 md:px-0">
              <h2 class="block-title">{{ item.heading }}</h2>
              <p class="lead">{{ item.tagline }}</p>
            </div>
            <p class="mx-2">{{ item.excerpt }}</p>
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
