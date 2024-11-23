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
  <div class="categories">
    <div>
      <span><LazyTags /></span>
      <h3>{{ title }}</h3>
    </div>
    <ul>
      <li v-for="item in tags" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<style lang="postcss" scoped>
  .categories {
    @apply w-11/12
    mx-auto
    py-5
    border-t-2
    border-t-slate-600/50
    dark:border-slate-300/50;

    div {
      @apply flex 
      items-center
      mb-3;
      h3 {
        @apply text-lg
        font-cameo
        ml-2;
      }
    }

    ul {
      @apply flex flex-wrap;
      li {
        @apply flex items-center pl-2 content-after after:last-of-type:content-none;

        &:after {
          @apply block
            h-1
            w-1
            ml-2;
        }
      }
    }
  }
</style>
