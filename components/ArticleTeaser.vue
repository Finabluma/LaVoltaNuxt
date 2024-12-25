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
    @apply mx-auto;

    .title {
      @apply text-xl
      font-sans   
      mx-auto 
      mb-5
      content-after
      content-before
      lg:mb-10
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
        p-1
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
            from-slate-600/30
            to-slate-600/10
            mix-blend-multiply;
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
          @apply mb-2
          md:w-10/12
          md:mx-auto
          md:mb-5
          md:bg-slate-600/80
          md:backdrop-blur
          md:text-slate-300
          md:p-2
          lg:mb-10;

          a {
            @apply mb-3
              block
              text-2xl/none
              md:text-slate-300;
          }
          .subtitle {
            @apply text-sm mb-1;
          }
        }

        .categories {
          @apply flex items-center 
          w-full
          pt-2
          pb-0
          md:border-t-slate-300;

          h3 {
            @apply sr-only;
          }

          > div {
            @apply mb-0;
          }

          li {
            @apply text-sm;

            &:after {
              @apply md:bg-slate-300;
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
    sm:w-11/12
    lg:w-9/12;

    .titleblock {
      @apply mb-10
      pt-3
      content-after
      md:mt-16
      lg:mt-8
      xl:mt-10;

      &:after {
        @apply block
        w-6
        h-6
        mt-5
        bg-slate-300/75
        dark:bg-slate-300/75;
      }
    }
    .title {
      @apply sr-only;
    }
    article {
      @apply px-1
      mb-5
      flex
      flex-row-reverse
      lg:items-center;

      .media {
        @apply relative
        w-20
        h-20
        border-slate-600/80
        dark:border-slate-300/80
        content-before
        mr-3
        sm:w-24
        sm:h-24
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
        @apply w-9/12
        lg:w-10/12;

        > div:first-of-type {
          .enlace {
            @apply mb-2
            text-xl/none
            font-sans
            /* pb-2
            border-b
            border-b-slate-600 */
            dark:border-b-slate-300;
          }
          .subtitle {
            @apply text-sm/snug;
          }
        }
      }
    }
  }
</style>
