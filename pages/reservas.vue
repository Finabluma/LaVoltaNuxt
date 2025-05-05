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
    ctx = ref()
  function intro() {
    let tl = gsap.timeline().to('.intro-conditions p', {
      yPercent: 10,
      autoAlpha: 0,
    })
    ScrollTrigger.create({
      trigger: '.intro-conditions',
      start: 'top top',
      pin: true,
      scrub: true,
      pinSpacing: false,
      animation: tl,
    })
  }
  function panels() {
    const panels = gsap.utils.toArray('.card')
    gsap.set(panels[0], { autoAlpha: 1 })
    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        start: () =>
          panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom',
      })
    })
  }

  function tlReservasConditions() {
    let tl = gsap.timeline().add(intro()).add(panels())
    return tl
  }

  // onMounted(() => {
  //   ctx = gsap.context((self) => {
  //     tlReservasConditions()
  //     skew.value.skewOnScroll()
  //   }, main.value)
  // })

  // onUnmounted(() => {
  //   ctx.revert()
  // })
</script>
<template>
  <div class="page">
    <div v-if="reservas.bannerUrgent !== null">
      <AppModal
        :budskap="reservas"
        v-show="showModal"
        @close-modal="showModal = false"
      />
    </div>
    <main>
      <HeroSection>
        <h2 class="title-page">{{ reservas.title }}</h2>
        <ElementsTextContent
          :v-if="reservas.introTerms"
          :blocks="reservas.introTerms"
        />
      </HeroSection>
      <section class="l-center mb-clus3lev">
        <h1 class="sr-only">{{ reservas.title }}</h1>
        <ReservasConditions>
          <template #header>
            <ConditionsIntro :title="reservas.reservasIntro.title" />
          </template>
          <template #default>
            <Conditions
              :conditions="reservas.conditions.conditions"
              ref="skew"
            />
          </template>
        </ReservasConditions>
      </section>
    </main>
    <aside class="relative">
      <LazyUniverseCallBadge />
    </aside>
    <AppFooter />
  </div>
</template>
