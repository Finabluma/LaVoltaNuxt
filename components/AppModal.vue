<script setup>
const props = defineProps({
  budskap: {
    type: Object,
  },
})

const { gsap } = useGsap()

let ctx = ref()

function banner() {
  let q = gsap.utils.selector('.modal-banner')
  gsap
    .timeline()
    .set('.modal-banner', { visibility: 'visible' })
    .from(q('.wrapper'), { autoAlpha: 0, yPercent: 10, })
}

onMounted(() => {
  ctx = gsap.context((self) => {
    banner()
  })
})

onUnmounted(() => {
  ctx.revert()
})
</script>
<template>
  <div v-if="budskap.bannerUrgent" class="modal-banner">
    <div class="wrapper">
      <div @click="$emit('close-modal')">
        <Close class="p-1 fill-white" />
      </div>
      <div>
        <InfoModal />
        <div>
          <p>
            {{
              budskap.bannerUrgent.urgentContent.banner }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
