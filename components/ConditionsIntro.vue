<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
  })
</script>
<template>
  <div class="intro-conditions">
    <div class="content">
      <div class="inner__content">
        <h2>{{ title }}</h2>
      </div>
    </div>
    <slot />
  </div>
</template>
<style lang="postcss" scoped>
  .intro-conditions {
    @apply relative
    z-10 
    w-screen
    py-[2%];
    .content {
      @apply w-full
      flex
      justify-center
      items-center;
      .inner__content {
        @apply w-full
        h-full
        pb-4
        flex
        flex-col
        justify-center
        items-center;

        h2 {
          @apply text-6xl/tight
          font-cameo
          text-balance
          text-center
          capitalize
          mb-5
          dark:text-slate-400
          md:text-left;

          &:after {
            @apply content-[''] 
            block
            h-1
            w-1/12
            mx-auto
            bg-slate-500
            mt-5;
          }
        }
      }
    }
  }
</style>
