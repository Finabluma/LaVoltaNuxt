<script setup>
  const { contacta } = usePagesStore()
  // meta
  usePageHead({
    title: contacta.title,
    seo: contacta.seo,
  })
</script>
<template>
  <div class="page">
    <HeroSection>
      <template #content>
        {{ contacta.title }}
      </template>
      <template #default>
        <div v-if="contacta.mainImage">
          <ElementsMediaImageItem
            :src="contacta.mainImage.asset._ref"
            :alt="contacta.mainImage.alt"
            height="320"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
            :modifiers="{
              crop: contacta.mainImage.crop,
              hotspot: contacta.mainImage.hotspot,
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
      <div class="main_content">
        <section>
          <h1 class="sr-only">{{ contacta.title }}</h1>
          <pre>{{ contacta.datos }}</pre>
        </section>
      </div>
    </main>
    <AppFooter />
  </div>
</template>
<style></style>
