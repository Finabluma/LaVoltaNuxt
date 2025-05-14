<script setup>
  const props = defineProps({
    items: {
      type: Object,
    },
  })
</script>
<template>
  <div class="u-full-width hero">
    <div class="l-center">
      <div class="l-sidebar">
        <div>
          <div class="not-sidebar">
            <div class="component component--text">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppDivider class="down" />
  </div>
</template>
<style lang="postcss">
  .hero {
    @apply relative
    bg-azulejos
    bg-cover
    lg:py-10;

    &:before {
      @apply content-['']
      absolute
      top-0
      w-full
      h-full
      backdrop-contrast-75
      bg-gradient-to-b
      from-white/40
      from-40%
      to-secondark
      mix-blend-color-dodge
      dark:from-firstdark/60
      dark:via-firstdark/90
      dark:to-firstdark
      dark:mix-blend-darken;
    }
  }

  .hero .l-center {
    @apply relative
    z-20;
  }

  .hero .l-sidebar > *,
  .hero .l-sidebar > * > * {
    @apply m-0;
  }

  .hero .l-sidebar .sidebar {
    @apply basis-96;
  }

  .hero .l-sidebar .not-sidebar {
    @apply dark:text-secondark
    pt-20
    pb-16
    mx-auto
    lg:max-w-5xl
    lg:px-10;
  }

  .hero .lead {
    @apply mb-6
    mt-0
    font-semibold;
  }

  .hero h1,
  .hero h2 {
    @apply mb-clus3lev;
  }

  .hero + * {
    @apply pt-8
    lg:pt-14;
  }
</style>
