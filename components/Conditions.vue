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
  <div v-for="(condition, index) in conditions" :key="index" class="skew card">
    <article class="l-box l-box--no-border">
      <h3 class="title-block mb-clus3lev capitalize">{{ condition.title }}</h3>
      <ElementsTextContent :blocks="condition.terms" />
    </article>
  </div>
</template>
