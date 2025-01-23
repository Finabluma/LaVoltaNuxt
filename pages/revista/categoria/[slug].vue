<script setup>
  import { computed } from 'vue'
  import { categoryQuery, articleCategory } from '~/queries'
  const route = useRoute()
  const params = {
    slug: route.params.slug,
  }

  const category = await useSanityData({
    query: categoryQuery,
    params: params,
  })

  const articleCat = await useSanityData({
    query: articleCategory,
  })

  const articleMatch = computed(() => {
    const artByCat = articleCat.value.filter((item) => {
      return item.categories == category.slug
    })
    return artByCat
  })

  // const articlesByCategory = computed(() => {
  //   const article = data.value.article
  //   return article.filter((item) => {
  //     return item.categories
  //   })
  // })

  console.log(articleMatch)
</script>
<template>
  <div class="page">
    <main v-if="category">
      <div class="main_content">
        <pre>{{ category.title }}</pre>
        <pre>{{ articleMatch }}</pre>
        <!-- <ul>
          <li v-for="item in articlesByCategory" :key="item.id">
            <pre>{{ item }}</pre>
          </li>
        </ul> -->
      </div>
    </main>
    <AppFooter />
  </div>
</template>
<style></style>
