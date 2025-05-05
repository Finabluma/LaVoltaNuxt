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
      <div class="modal l-box l-box--no-border">
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
    top-12
    z-50
    w-full
    invisible;

    .wrapper {
      @apply relative
      w-10/12
      mx-auto
      bg-firstlight
      dark:bg-firstdark;

      .close {
        @apply absolute
        top-2
        right-2
        opacity-50
        cursor-pointer
        w-10
        block;

        svg {
          @apply p-1
          fill-white;
        }
      }

      .modal {
        @apply flex
        flex-col
        justify-center
        items-center
        sm:flex-row
        sm:justify-start;

        svg {
          @apply w-10
          mb-clus2lev
          sm:mr-clus3lev
          sm:mb-0;
        }

        .content {
          @apply sm:w-10/12;

          p {
            @apply font-coordinates
            font-semibold
            text-center
            text-sm
            text-white           dark:text-secondark
            sm:text-left;
          }
        }
      }
    }
  }
</style>
