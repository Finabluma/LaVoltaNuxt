<script setup>
  import { ref } from 'vue'
  const catPortada = ref(false)
  const catDestacado = ref(false)
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
    :class="{ catPortada: catPortada, catDestacado: catDestacado }"
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
          
        </NuxtLink> -->
      </li>
    </ul>
  </div>
</template>
<style lang="postcss" scoped>
  .categories {
    @apply w-11/12
    mx-auto
    pt-3
    flex;

    div {
      @apply flex 
      justify-center
      items-start
      mb-1;
      h3 {
        @apply sr-only;
      }
    }

    ul {
      @apply flex flex-wrap;

      li {
        @apply flex items-center pl-2 font-typewriter 
        content-after
        after:last-of-type:content-none
        text-slate-600
        dark:text-slate-300/70;

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

    &.catPortada {
      @apply p-0 w-full;
      div {
        @apply w-auto justify-start mb-0;
      }

      ul {
        @apply w-11/12;

        li {
          @apply text-slate-400;
          &:after {
            @apply bg-slate-400;
          }
        }
      }
    }

    &.catDestacado {
      @apply w-auto;

      ul li {
        @apply text-slate-200;
        &:after {
          @apply bg-slate-200 bg-opacity-85;
        }

        & a {
          @apply text-slate-400;
        }
      }
    }
  }
</style>
