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
  </div>
</template>
<style lang="postcss">
  .hero {
    @apply lg:pt-10;
  }

  .hero--after {
    &:after {
      @apply content-['']
        w-2
        h-2
        rounded-full
        block
        mx-auto
        mt-6
        md:my-10
        bg-current;
    }
  }

  .hero .l-sidebar > *,
  .hero .l-sidebar > * > * {
    @apply m-0;
  }

  .hero .l-sidebar .sidebar {
    @apply basis-96;
  }

  .hero .l-sidebar .not-sidebar {
    @apply pb-8
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
    @apply mb-6;
  }

  .hero + * {
    @apply mt-8
    lg:mt-14;
  }
</style>
