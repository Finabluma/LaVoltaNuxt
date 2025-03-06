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
      <LazyTags />
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
    @apply hidden 
    sm:flex 
    sm:w-full;

    div {
      @apply flex 
      justify-start
      items-start;
    }

    ul {
      @apply flex 
      flex-wrap;

      li {
        @apply font-coordinates
        flex 
        items-center  
        after:last-of-type:content-none;

        &:first-of-type {
          @apply pl-1;
        }

        &:after {
          @apply content-['']
          block
          bg-current
          h-1
          w-1
          ml-2;
        }
      }
    }

    &.catslug {
      @apply w-11/12
      mx-auto
      flex;
    }
  }
</style>
