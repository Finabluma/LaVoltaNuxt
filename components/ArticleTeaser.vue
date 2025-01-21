<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    title: {
      type: String,
    },
    heading: {
      type: String,
    },
    layout: {
      type: String,
    },
  })
  const estilo = computed(() => {
    return {
      destacado: props.layout == 'destacado',
      portada: props.layout == 'portada',
    }
  })
</script>
<template>
  <div :class="estilo">
    <p class="title">{{ title }}</p>
    <article>
      <h2 class="sr-only">{{ heading }}</h2>
      <div class="media">
        <slot name="media"></slot>
      </div>
      <div class="content">
        <slot />
      </div>
    </article>
  </div>
</template>
<style lang="postcss">
  /* Inicio */
  .destacado {
    @apply mx-auto mb-2;

    .title {
      @apply text-xl
      font-sans   
      mx-auto 
      mb-5
      content-after
      content-before
      lg:mb-10
      md:text-2xl
      flex
      items-center
      justify-center;

      &:after,
      &:before {
        @apply block
        w-2
        h-2
        rounded
        mt-2
        bg-slate-400
        dark:bg-slate-400;
      }

      &:after {
        @apply ml-2;
      }

      &:before {
        @apply mr-2;
      }
    }

    article {
      @apply relative;

      .media {
        @apply relative
        border
        border-slate-600/80
        bg-slate-600
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
        sm:px-5
        md:absolute
        md:bottom-0
        md:left-0
        md:z-30
        md:w-full
        md:flex;

        > div:first-of-type {
          @apply mb-1
          text-center
          md:w-10/12
          md:mx-auto
          md:mb-10
          md:bg-slate-800/60
          dark:md:bg-slate-600/80
          md:text-slate-300
          md:p-2
          lg:mb-10;

          a {
            @apply mb-3
              block
              text-3xl/tight
              md:text-4xl
              md:text-slate-300;
          }
          .subtitle {
            @apply text-sm leading-none mb-1
            lg:text-lg;
          }

          .categories ul li {
            a {
              @apply text-sm xl:text-lg;
            }
          }
        }
      }
    }
  }
  /* Revista */

  .portada {
    @apply relative 
    mx-auto
    pb-10
    mb-5
    pt-2
    sm:w-11/12;

    .titleblock {
      @apply mb-4
      pt-1
      font-cameo
      text-lg
      dark:text-slate-400
      content-after
      md:mt-4
      lg:mt-8
      xl:mt-10;

      &:after {
        @apply block
        w-1/12
        h-2
        mt-2
        bg-slate-300/75
        dark:bg-slate-300/75;
      }
    }
    .title {
      @apply sr-only;
    }
    article {
      @apply px-1
      mb-2
      flex
      flex-row
      items-center
      xl:ml-auto;

      .media {
        @apply relative
        w-28
        h-28
        p-1
        border-slate-600/80
        dark:border-slate-300/80
        content-before
        mr-3
        sm:w-32
        sm:h-32
        lg:mr-5;

        &:before {
          @apply absolute
            top-0
            left-0
            z-10
            block
            w-full
            h-full
            bg-gradient-radial
            from-slate-300/60
            to-slate-800/30
            mix-blend-color;
        }

        img {
          @apply w-full
          h-full;
        }
      }

      .content {
        @apply w-9/12;

        > div:first-of-type {
          .enlace {
            @apply mb-0.5
            text-xl/tight
            font-sans
            md:text-2xl;
          }
          .subtitle {
            @apply text-sm/snug xl:text-lg;
          }
        }
      }
    }
  }
</style>
