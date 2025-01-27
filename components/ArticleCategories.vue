<script setup>
  import { ref } from 'vue'
  const portada = ref(false)
  const destacado = ref(false)
  const props = defineProps({
    title: {
      type: String,
    },
    tags: {
      type: Object,
    },
  })
</script>
<template>
  <div
    :class="{ destacado: catdestacado, portada: portada }"
    class="categories"
  >
    <div>
      <span><LazyTags /></span>
      <span class="sr-only">{{ title }}</span>
    </div>
    <ul>
      <li v-for="item in tags" :key="item.id">
        {{ item.title }}
        <!-- <NuxtLink :to="`/revista/categoria/${item.slug}`">
          {{ item.title }}
        </NuxtLink> -->
      </li>
    </ul>
  </div>
</template>
<style lang="postcss" scoped>
  .categories {
    @apply w-11/12
    mx-auto
    flex;

    div {
      @apply flex 
      justify-center
      items-start;
    }

    ul {
      @apply flex flex-wrap;

      li {
        @apply flex items-center pl-2 font-typewriter 
        content-after
        after:last-of-type:content-none;

        &:first-of-type {
          @apply pl-1;
        }

        a {
          @apply xl:text-lg;
        }

        &:after {
          @apply block
          bg-slate-600
          dark:bg-slate-400
          h-1
          w-1
          ml-1;
        }
      }
    }

    &.catportada {
      @apply w-auto max-sm:hidden;
    }

    &.catdestacado {
      @apply w-auto max-sm:hidden;
      ul li {
        @apply text-slate-400;
      }
    }
  }
</style>
