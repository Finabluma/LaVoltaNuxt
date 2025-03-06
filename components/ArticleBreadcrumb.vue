<script setup>
  const props = defineProps({
    data: {
      type: Object,
    },
    category: {
      type: Object,
    },
  })
</script>
<template>
  <nav id="breadcrumb" aria-label="Breadcrumb">
    <h2 class="sr-only">Breadcrumbs Navigation</h2>
    <ol role="list">
      <slot></slot>
    </ol>
  </nav>
</template>
<style lang="postcss">
  #breadcrumb {
    @apply py-6;

    ol {
      @apply flex items-center;

      li {
        @apply flex items-center text-sm leading-none;

        &:after {
          @apply content-[''] w-1 h-1 
          bg-current 
          rounded-full mx-2;
        }

        &:last-child {
          @apply text-primary/75;
          &:after {
            @apply content-none;
          }
        }

        a {
          @apply font-bold;
        }
      }
    }
  }
</style>
