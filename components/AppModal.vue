<script setup>
  const { gsap } = useGsap()
  const props = defineProps({
    budskap: {
      type: Object,
    },
  })

  function banner() {
    let q = gsap.utils.selector('.modal-overlay')
    gsap
      .timeline({
        delay: 0.5,
      })
      .set('.modal-overlay', { visibility: 'visible' })
      .from(q('.wrapper'), { autoAlpha: 0 })
  }
  defineExpose({
    banner,
  })
</script>
<template>
  <div v-if="budskap.bannerUrgent !== null" class="modal-overlay">
    <div class="wrapper">
      <div class="close" @click="$emit('close-modal')">
        <MaterialSymbolsClose />
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
    top-28
    md:top-20
    z-50
    w-full
    justify-center
    invisible;

    .wrapper {
      @apply relative
      w-11/12
      mx-auto
      rounded-lg
      drop-shadow-lg
      bg-red-600
      text-slate-300
      dark:bg-yellow-600
      dark:text-yellow-900
      md:w-10/12
      lg:w-6/12;

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
          @apply w-9/12
          md:w-11/12;

          p {
            @apply font-mono 
            text-sm;
          }
        }
      }
    }
  }
</style>
