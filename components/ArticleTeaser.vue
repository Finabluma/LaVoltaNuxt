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
        font-semibold;
      .subtitle {
        @apply font-light 
          leading-snug
          mt-1;
      }
      &:after {
        @apply content-['']
          block
          w-6
          h-0.5
          my-1
          bg-current;
      }
    }
  }

  /* Inicio */
  .destacado {
    @apply relative
    w-11/12
    mx-auto
    sm:w-10/12
    md:max-lg:portrait:w-11/12
    lg:max-xl:landscape:w-10/12;

    .content {
      @apply absolute
      w-full
      bottom-2
      left-0
      z-30
      p-3
      flex
      justify-center
      items-center
      sm:bottom-5
      lg:max-xl:landscape:w-11/12;

      .content-wrapper {
        @apply w-full
        md:w-10/12
        p-2
        mx-auto
        mb-5
        md:p-5
        lg:max-xl:landscape:w-auto
        lg:max-xl:landscape:mr-0
        bg-cyan100/80
        dark:bg-[#2A3E57]/80;
      }
    }
  }

  .revistaPortada {
    @apply relative;

    .destacado .content {
      @apply lg:max-xl:landscape:w-full;
      .content-wrapper {
        @apply lg:max-xl:landscape:mx-auto;
      }
    }
  }

  /* Revista */
  .portada {
    @apply flex
      flex-row-reverse
      items-center
      justify-center
      mb-5
      xl:ml-auto;

    .media {
      @apply relative
        w-auto
        h-auto
        p-1
        ml-2;
    }

    .content {
      @apply w-9/12
      sm:w-10/12;
    }
  }

  .related {
    @apply flex
      flex-row-reverse
      items-center
      justify-center
      border
      border-current
      p-2
      mb-2
      lg:mb-0
      lg:min-h-[125px];

    .media {
      @apply mb-0;
    }

    .content {
      @apply w-full;
    }
  }
</style>
