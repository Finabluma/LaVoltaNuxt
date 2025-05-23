<script setup>
const { gsap } = useGsap()
const props = defineProps({
  budskap: {
    type: Object,
  },
})

let main = ref(),
  ctx = ref()

function banner() {
  let q = gsap.utils.selector('.modal-overlay')
  gsap
    .timeline({
      delay: 0.5,
    })
    .set('.modal-overlay', { visibility: 'visible' })
    .from(q('.wrapper'), { autoAlpha: 0 })
}

onMounted(() => {
  ctx = gsap.context((self) => {
    banner()
  }, main.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>
<template>
  <div v-if="budskap.bannerUrgent" class="fixed top-24 z-50 w-full invisible">
    <div class="relative w-10/12 mx-auto bg-firstlight dark:bg-firstdark">
      <div class="absolute top-2 right-2 opacity-50 w-10 block" @click="$emit('close-modal')">
        <Close class="p-1 fill-white" />
      </div>
      <div
        class="max-w-5xl mx-auto l-box l-box--no-border flex flex-col justify-center items-center sm:flex-row sm:justify-start">
        <InfoModal class="w-10 mb-5 sm:mb-0 sm:mr-5" />
        <div class="sm:w-10/12">
          <p class="font-coordinates font-semibold text-center text-sm text-white dark:text-secondark sm:text-left">{{
            budskap.bannerUrgent.urgentContent.banner }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
