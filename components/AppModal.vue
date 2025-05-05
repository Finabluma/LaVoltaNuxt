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
  <div v-if="budskap.bannerUrgent" class="modal-overlay">
    <div class="wrapper">
      <div class="close" @click="$emit('close-modal')">
        <Close />
      </div>
      <div class="modal">
        <InfoModal />
        <div class="content">
          <!-- <h6>{{ budskap.bannerUrgent.urgentContent.title }}</h6> -->
          <p>{{ budskap.bannerUrgent.urgentContent.banner }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .modal-overlay {
    @apply fixed
    bottom-10
    md:top-12
    md:bottom-auto
    z-50
    w-full
    justify-center
    invisible;

    .wrapper {
      @apply relative
      w-11/12
      mx-auto
      drop-shadow-lg
      bg-cyan
      dark:bg-firstdark;

      .close {
        @apply absolute
        top-1
        right-2
        opacity-50
        cursor-pointer;

        svg {
          @apply p-1;
        }
      }

      .modal {
        @apply flex
        w-full
        items-center
        p-3;

        svg {
          @apply w-14
          mr-2;
        }

        .content {
          @apply max-w-7xl;

          p {
            @apply font-coordinates
            font-semibold
            text-firstdark            dark:text-secondark 
            text-sm;
          }
        }
      }
    }
  }
</style>
