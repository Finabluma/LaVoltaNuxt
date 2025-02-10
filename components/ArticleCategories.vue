<script setup>
  import { ref } from 'vue'
  const catportada = ref(false)
  const catslug = ref(false)
  const catrelated = ref(false)
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
    class="categories"
    :class="{
      catrelated: catrelated,
      catportada: catportada,
      catslug: catslug,
    }"
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
    @apply hidden sm:flex sm:w-full;

    div {
      @apply flex 
      justify-start
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
          @apply content-['']
          block
          bg-slate-300
          dark:bg-slate-400
          h-1
          w-1
          ml-2;
        }
      }
    }

    &.catslug {
      @apply flex mx-auto w-11/12;
    }

    &.catslug ul li:after,
    &.catrelated ul li:after,
    &.catportada ul li:after {
      @apply bg-slate-500
        dark:bg-slate-400;
    }
  }
</style>
