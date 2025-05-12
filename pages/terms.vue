<script setup>
  const { terms } = usePagesStore()

  // meta
  usePageHead({
    title: terms.title,
    seo: terms.seo,
  })
</script>
<template>
  <div class="page">
    <main>
      <HeroSection>
        <div class="components components--text">
          <h1 class="title-page">{{ terms.title }}</h1>
        </div>
      </HeroSection>
      <section class="l-center">
        <div v-if="terms.richtext" class="lg:l-box lg:l-box l-box--no-border">
          <ElementsTextContent :blocks="terms.richtext" class="lg:l-box lg:l-box l-box--no-border" />
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>
