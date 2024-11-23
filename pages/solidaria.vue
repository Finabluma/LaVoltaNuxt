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
    <HeroSection>
      <template #content>
        {{ solidaria[0].title }}
      </template>
      <template #default>
        <div v-if="solidaria[0].mainImage">
          <ElementsMediaImageItem
            :src="solidaria[0].mainImage.asset._ref"
            :alt="solidaria[0].mainImage.alt"
            height="500"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw"
            :modifiers="{
              crop: solidaria[0].mainImage.crop,
              hotspot: solidaria[0].mainImage.hotspot,
              q: 80,
            }"
            fit="cover"
            format="webp"
          />
        </div>
        <div v-else class="noImg" />
      </template>
    </HeroSection>
    <main>
      <h1 class="sr-only">{{ solidaria[0].title }}</h1>
      {{ solidaria }}
    </main>
    <AppFooter />
  </div>
</template>
<style></style>
