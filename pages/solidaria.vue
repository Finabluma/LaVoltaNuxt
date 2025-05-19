<script setup>
  const { page } = usePageStore()
  const solidaria = page.filter((item) => item.slug == 'la-volta-solidaria')

  // meta
  usePageHead({
    title: solidaria[0].title,
    seo: solidaria[0].seo,
  })
</script>
<template>
  <div class="page">
    <HeroSection :items="solidaria[0]" />
    <main>
      <h1 class="sr-only">{{ solidaria[0].title }}</h1>
      {{ solidaria }}
    </main>
    <!-- <AppFooter /> -->
  </div>
</template>
<style></style>
