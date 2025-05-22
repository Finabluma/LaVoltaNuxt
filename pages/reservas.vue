<script setup>
const { reservas } = usePagesStore()
// meta
usePageHead({
  title: reservas.title,
  seo: reservas.seo,
})
//GSAP
const { gsap, ScrollTrigger } = useGsap()
let main = ref(),
  skew = ref(),
  ctx = ref(),
  mm

function skewOnScroll() {
  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter('.skew', 'skewY', 'deg'), // fast
    clamp = gsap.utils.clamp(-5, 5)

  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -300)
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew
        gsap.to(proxy, {
          skew: 0,
          duration: 0.8,
          ease: 'power3',
          overwrite: true,
          onUpdate: () => skewSetter(proxy.skew),
        })
      }
    },
  })
  gsap.set('.skew', { transformOrigin: 'right center', force3D: true })
}

function panels() {
  const panels = gsap.utils.toArray('article')
  gsap.set(panels[0], { autoAlpha: 1 })
  panels.forEach((panel) => {
    ScrollTrigger.create({
      trigger: panel,
      start: 'top top',
      pin: true,
      pinSpacing: false,
      start: () =>
        panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom',
      fastScrollEnd: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    })
  })
}

onMounted(() => {
  ctx = gsap.context((self) => {
    mm = gsap.matchMedia()
    mm.add("(min-width: 1024px)", () => {
      panels()
    })

    skewOnScroll()
  }, main.value)
})

onUnmounted(() => {
  ctx.revert()
  mm.revert()
})
</script>
<template>
  <div class="page">
    <div v-if="reservas.bannerUrgent !== null">
      <AppModal :budskap="reservas" v-show="showModal" @close-modal="showModal = false" />
    </div>
    <main>
      <HeroSection>
        <h2 class="page-title">{{ reservas.title }}</h2>
        <SanityContent :blocks="reservas.introTerms" />
      </HeroSection>
      <div class="main-content">
        <section class="max-w-7xl mx-auto px-[2vw] xl:px-0">
          <h1 class="sr-only">{{ reservas.title }}</h1>
          <ReservasConditions>
            <template #header>
              <ConditionsIntro :title="reservas.reservasIntro.title" class="skew" />
            </template>
            <template #default>
              <Conditions :conditions="reservas.conditions.conditions" />
            </template>
          </ReservasConditions>
        </section>
      </div>
    </main>
    <aside class="relative">
      <LazyUniverseCallBadge />
    </aside>
    <AppFooter />
  </div>
</template>
