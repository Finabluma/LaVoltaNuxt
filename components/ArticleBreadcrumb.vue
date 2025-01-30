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
    @apply py-4;

    ol {
      @apply flex items-center;

      li {
        @apply flex items-center text-xs leading-none content-after;

        &:after {
          @apply w-1 h-1 bg-current rounded-full mx-2;
        }

        &:last-child {
          @apply text-slate-400 dark:text-slate-400;
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
