<script setup>
  const props = defineProps({
    conditions: {
      type: Object,
    },
  })
  //GSAP
  const { gsap, ScrollTrigger } = useGsap()
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
  defineExpose({
    skewOnScroll,
  })
</script>
<template>
  <div v-for="(condition, index) in conditions" :key="index" class="card skew">
    <article>
      <div class="content">
        <h3 class="content_title font-cameo">{{ condition.title }}</h3>
        <div class="blockContent">
          <SanityContent :blocks="condition.terms" />
        </div>
      </div>
    </article>
  </div>
</template>
