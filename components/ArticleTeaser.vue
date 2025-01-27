<script setup>
  import { ref } from 'vue'
  const portada = ref(false)
  const destacado = ref(false)
  const related = ref(false)
  const props = defineProps({
    title: {
      type: String,
    },
    heading: {
      type: String,
    },
  })
</script>
<template>
  <div :class="{ portada: portada, destacado: destacado, related: related }">
    <article>
      <h2 class="sr-only">{{ heading }}</h2>
      <div class="media">
        <slot name="media"></slot>
      </div>
      <div class="content">
        <div class="content-wrapper">
          <slot />
        </div>
      </div>
    </article>
  </div>
</template>
<style lang="postcss" scoped>
  /* Inicio */
  .destacado {
    .title {
      @apply sr-only;

      &:after,
      &:before {
        @apply block
        w-2/12
        h-0.5
        bg-slate-300/50;
      }

      &:after {
        @apply ml-5;
      }

      &:before {
        @apply mr-5;
      }
    }

    article {
      @apply relative;

      .media {
        @apply relative
        bg-slate-100
        dark:bg-slate-300/75
        content-before
        mb-2;

        &:before {
          @apply absolute
            top-0
            left-0
            z-10
            block
            w-full
            h-full
            bg-gradient-radial
            from-slate-50/10
            to-slate-800/40
            dark:from-slate-600/30
            dark:to-slate-950/70;
        }
      }

      .content {
        @apply px-2
        absolute
        bottom-0
        left-0
        z-30
        w-full
        flex;

        .content-wrapper {
          @apply mb-5
          w-auto
          mx-auto
          bg-slate-800/60
          dark:md:bg-slate-600/80
          text-slate-300
          p-2
          md:mb-10
          lg:mb-10
          lg:w-11/12;
        }
      }
    }
  }
  /* Revista */

  .portada {
    @apply py-2;
    article {
      @apply flex
      flex-row-reverse
      items-center
      justify-between
      xl:ml-auto;

      .media {
        @apply relative
        w-20
        h-20
        p-1
        border-slate-600/80
        dark:border-slate-300/80
        content-before
        ml-3
        sm:w-auto
        sm:h-auto;

        &:before {
          @apply absolute
            top-0
            left-0
            z-10
            block
            w-full
            h-full
            bg-gradient-radial
            from-slate-50/10
            to-slate-800/40
            dark:from-slate-600/30
            dark:to-slate-950/30;
        }
      }

      .content {
        @apply w-9/12;
      }
    }
  }
</style>
