<script setup>
  import { ref } from 'vue'
  const portada = ref(false)
  const destacado = ref(false)
  const revistaPortada = ref(false)
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
    :class="{
      portada: portada,
      destacado: destacado,
      revistaPortada: revistaPortada,
      related: related,
    }"
  >
    <h2 class="sr-only">{{ article.title }}</h2>
    <div class="image">
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
    .image {
      @apply relative;
    }
    .enlace {
      @apply font-coordinates
      leading-tight
      sm:pr-[2%]
      content-after;

      &:after {
        @apply content-['']
        block
        h-1
        w-10
        mt-2;
      }

      .subtitle {
        @apply font-bold
        text-balance;
      }
    }
  }

  /* Inicio */
  .destacado {
    @apply relative;

    .image {
      @apply w-11/12
      mx-auto
      sm:w-10/12
      md:max-lg:portrait:w-11/12
      lg:max-xl:landscape:w-10/12;
    }
    .content {
      @apply p-3
        absolute
        bottom-1/3
        left-0
        z-30
        w-full
        flex
        justify-center
        sm:bottom-1/4;

      .content-wrapper {
        @apply w-11/12
        sm:w-9/12
        md:w-7/12
        px-2
        py-1
        mx-auto
        mb-5
        bg-cyan100/80;

        .enlace {
          @apply font-coordinates
          font-bold
          leading-tight;

          &:after {
            @apply content-none;
          }

          .subtitle {
            @apply font-normal
            mb-2
            ;

            &:before {
              @apply content-['']
              block
              w-10
              h-0.5
              mt-1
              bg-current;
            }
          }
        }
      }
    }
  }

  .revistaPortada {
    @apply relative;

    .image {
      @apply w-full
      mx-auto
      pb-0;
    }
  }

  /* Revista */
  .portada {
    @apply flex
      flex-row-reverse
      items-center
      justify-between
      mb-2
      xl:ml-auto;

    .media {
      @apply relative
        w-auto
        h-auto
        p-1
        ml-3;
    }

    .content {
      @apply w-9/12
      sm:w-10/12;

      .enlace {
        @apply font-coordinates
        font-semibold;
        .subtitle {
          @apply font-light 
          leading-tight;

          &:before {
            @apply content-['']
            block
            w-6
            h-0.5
            my-1
            bg-current;
          }
        }
      }
    }
  }

  .related {
    @apply flex
      flex-row-reverse
      items-center
      justify-between
      p-3
      mb-2
      lg:mb-0
      lg:min-h-[125px];

    .media {
      @apply mb-0;
    }

    .content {
      @apply w-full;

      .enlace {
        @apply mb-2;
        &:after {
          @apply content-none;
        }
        a {
          @apply font-bold;
        }
      }
    }
  }
</style>
