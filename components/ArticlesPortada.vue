<template>
  <div class="portada">
    <h1 class="title-block">Otras Lecturas</h1>

    <div class="list-of-articles">
      <slot />
    </div>
  </div>
</template>
<style lang="postcss">
  .portada {
    @apply mt-10;

    .title-block {
      @apply mb-10
        px-2
        text-lg;
    }

    .list-of-articles {
      .card {
        @apply outline
        outline-firstlight
        dark:outline-firstdark
        outline-2
        dark:bg-white/20;

        .image {
          @apply border
          mb-clus2lev;
        }

        .card__text {
          @apply leading-snug
          text-center;

          .lead {
            @apply mb-clus2lev;
          }

          .categories {
            ul {
              @apply flex
              justify-center
              flex-wrap;

              .tag {
                @apply p-0;
              }
            }
          }
        }
      }
    }

    /* .articles {
      .card {
        @apply p-0.5
            py-2
            sm:py-4
            lg:items-center;

        .image-rounded {
          @apply lg:w-28
              lg:h-28;
        }

        .card__text {
          @apply px-4;

          .card__heading {
            @apply border-b-2;
          }

          .card__heading,
          .lead {
            @apply mb-1
                leading-snug;
          }

          .lead {
            @apply text-sm;
          }

          .categories {
            @apply sr-only;
          }
        }
      }
    } */
  }
</style>
