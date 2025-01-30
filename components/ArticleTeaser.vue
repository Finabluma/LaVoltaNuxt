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
    article: {
      type: Object,
    },
  })
</script>
<template>
  <article
    :class="{ portada: portada, destacado: destacado, related: related }"
  >
    <h2 class="sr-only">{{ article.title }}</h2>
    <div class="media">
      <slot></slot>
    </div>
    <div class="content">
      <div class="content-wrapper">
        <div class="enlace">
          <ElementsTextLink
            link-type="internalLinkType"
            route="revista-slug"
            :slug="article.slug"
            >{{ article.title }}
            <div v-if="article.subtitle" class="subtitle">
              {{ article.subtitle }}
            </div>
          </ElementsTextLink>
        </div>
        <slot name="categories"></slot>
      </div>
    </div>
  </article>
</template>
<style lang="postcss" scoped>
  article {
    .media {
      @apply relative
        bg-slate-100
        dark:bg-slate-100/75
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
          dark:from-slate-300/30
          dark:to-slate-700/60;
      }
    }
    .enlace {
      @apply font-sans
      font-thin
      sm:pr-[2%]
      content-after;

      &:after {
        @apply block
        bg-slate-400/80
        dark:bg-slate-300/80
        h-1
        w-10
        my-2;
      }

      .subtitle {
        @apply text-balance
        font-coordinates;
      }
    }
  }

  /* Inicio */
  .destacado {
    @apply relative;
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
          w-11/12
          mx-auto
          bg-slate-800/60
          dark:md:bg-slate-600/80
          text-slate-300
          p-2
          md:mb-10
          lg:mb-10
          lg:w-9/12
          xl:w-10/12;

        .enlace {
          @apply md:portrait:text-3xl
            lg:text-3xl/tight
            xl:text-5xl;

          .subtitle {
            @apply md:portrait:text-lg
              lg:text-lg/tight
              mb-2;
          }
        }
      }
    }
  }

  /* Revista */
  .portada {
    @apply flex
      flex-row-reverse
      items-center
      justify-between
      mb-5
      xl:ml-auto;

    .media {
      @apply relative
        w-auto
        h-auto
        p-1
        border-slate-600/80
        dark:border-slate-300/80
        ml-3;
    }

    .content {
      @apply w-9/12;

      .enlace {
        @apply text-lg
          md:text-xl
          lg:text-2xl;

        .subtitle {
          @apply text-base
            md:text-lg
            lg:text-xl;
        }
      }

      .categories {
        @apply hidden
          sm:flex;
      }
    }
  }

  .related {
    @apply flex
      flex-row-reverse
      items-center
      justify-between
      p-3
      mb-4
      lg:mb-0
      lg:min-h-[125px]
      border
      border-slate-500/75
      dark:border-slate-400/50
      bg-slate-300
    dark:bg-slate-700/50;

    .media {
      @apply mb-0;
    }

    .content {
      @apply w-full;
    }
  }
</style>
