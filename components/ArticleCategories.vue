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
  <div class="l-cluster my-clus2lev categories">
    <ul class="clean-list">
      <li v-for="item in tags" :key="item.id">
        <span class="tag with-icon--before"
          ><LazyTags  /><span class="grow">{{
            item.title
          }}</span></span
        >

        <!-- <NuxtLink :to="`/revista/categoria/${item.slug}`">
          {{ item.title }}
        </NuxtLink> -->
      </li>
    </ul>
  </div>
</template>
