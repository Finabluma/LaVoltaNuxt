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
        <h1 class="page-title">{{ terms.title }}</h1>
      </HeroSection>
      <div class="main-content">
        <section class="container">
          <div v-if="terms.richtext" class="lg:l-box l-box--no-border">
            <ElementsTextContent :blocks="terms.richtext" class="lg:l-box lg:l-box l-box--no-border" />
          </div>
        </section>
      </div>
    </main>
    <AppFooter />
  </div>
</template>
