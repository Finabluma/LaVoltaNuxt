<script setup>
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
  <div class="categories flex flex-start">
    <div>
      <span><LazyTags /></span>
      <h3 class="sr-only">{{ title }}</h3>
    </div>
    <ul>
      <li v-for="item in tags" :key="item.id">
        <NuxtLink :to="`/revista/categoria/${item.slug}`">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<style lang="postcss" scoped>
  .categories {
    @apply w-11/12
    mx-auto
    pt-5;

    div {
      @apply flex 
      justify-center
      items-center
      mb-1;
      h3 {
        @apply sr-only;
      }
    }

    ul {
      @apply flex flex-wrap;

      li {
        @apply flex items-center pl-2 font-cameo after:last-of-type:content-none;

        a {
          @apply xl:text-lg;
        }
      }
    }
  }
</style>
