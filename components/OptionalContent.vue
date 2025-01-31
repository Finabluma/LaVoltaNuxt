<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    page: {
      type: Object,
    },
  })
  const estilos = computed(() => {
    return props.page.optionalContent.bannerBody.length == 1
      ? 'single'
      : 'compound'
  })
</script>
<template>
  <div v-if="page.optionalContent !== null" :class="estilos">
    <div class="content_wrapper">
      <div
        v-for="(anuncio, index) in page.optionalContent.bannerBody"
        :key="anuncio.id"
        :class="index == 0 ? 'first' : 'second'"
      >
        <LazyBannerBottom :optional="anuncio" />
      </div>
    </div>
  </div>
</template>
<style lang="postcss">
  .single {
    @apply w-11/12
    mx-auto
    pt-10
    pb-24
    content-before;

    &:before {
      @apply block
      h-0.5
      w-11/12
      mx-auto
      bg-slate-300
      dark:bg-slate-500
      mb-10
      md:mb-16;
    }

    .content_wrapper {
      @apply flex
      justify-center;

      .first {
        .optional {
          @apply flex
          flex-col
          items-center;

          .media {
            @apply mb-10;

            .image {
              @apply w-24
              h-24              
              overflow-hidden
              p-1 
              drop-shadow 
              rounded-full
              border-slate-300/80 dark:bg-slate-300
              content-before
              sm:w-32
              sm:h-32;

              &:before {
                @apply absolute top-0
                z-10
                w-full
                h-full bg-gradient-radial
                from-transparent to-slate-300/45
              dark:to-slate-500/30;
              }

              img {
                @apply rounded-full;
              }
            }

            .noImg {
              @apply hidden;
            }
          }

          .content {
            @apply max-w-screen-md
            text-center;

            h2 {
              @apply font-coordinates
              mb-5;
            }

            .inner-content {
              @apply text-balance
              font-mono
              mb-10
              sm:mb-14
              sm:text-lg;
            }

            .enlace {
              @apply block
              mx-auto;

              a {
                @apply font-bold
                p-5
                border
                rounded-sm
                border-slate-300
                bg-slate-100
                dark:border-slate-600
                dark:bg-slate-700/50
                sm:p-6;
              }
            }
          }
        }
      }
    }
  }

  .compound {
    @apply mx-auto
    py-7
    px-2
    lg:w-11/12
    lg:mx-auto
    lg:py-20
    lg:content-before
    xl:w-9/12
    2xl:w-9/12;

    &:before {
      @apply block
      w-2/12
      h-1
      mb-10
      bg-slate-300
      dark:bg-slate-400;
    }

    .content_wrapper {
      @apply lg:flex;

      .first {
        @apply mb-5
        content-after;

        &:after {
          @apply block
          w-10
          h-1
          mt-7
          bg-slate-400
          dark:bg-slate-500
          lg:content-none;
        }
      }

      .first,
      .second {
        @apply lg:w-6/12;

        .optional {
          @apply lg:flex;

          .media {
            @apply lg:mr-4;
            .image {
              @apply hidden
              relative
              content-before
              rounded-full
              lg:flex
              lg:w-32;

              &:before {
                @apply absolute
                w-auto
                h-full
                z-10
                bg-gradient-radial
                from-transparent 
                to-slate-300/45
                dark:to-slate-800/30;
              }

              img {
                @apply rounded-full;
              }
            }

            .noImg {
              @apply flex 
              justify-start
              items-center 
              lg:justify-center
              lg:w-32 
              lg:h-32 
              bg-slate-300/50
              dark:bg-slate-500/50 
              rounded-full 
              mr-3;
            }
          }

          .content {
            @apply relative
            w-9/12
            mx-auto
            md:ml-0;

            h2 {
              @apply font-sans
              text-2xl/snug;
            }

            .inner-content {
              @apply text-balance
              text-lg
              mb-5;
            }

            .enlace {
              @apply font-cameo
              leading-none
              text-2xl;

              a {
                @apply hover:text-pink-500
                dark:hover:text-yellow-600;
              }
            }
          }
        }
      }
    }
  }
</style>
