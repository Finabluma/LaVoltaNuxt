<script setup>
const { terms } = usePagesStore()

// meta
usePageHead({
  title: terms.title,
  seo: terms.seo,
})
</script>
<template>
  <div id="terms">
    <main>
      <HeroSection>
        <h1>{{ terms.title }}</h1>
      </HeroSection>
      <div class="main-content">
        <section class="max-w-6xl mx-auto px-[4vw] py-5 md:py-10 xl:px-0">
          <div v-if="terms.richtext">
            <ElementsTextContent :blocks="terms.richtext" />
          </div>
        </section>
      </div>
    </main>
    <ClientOnly>
      <AppFooter />
    </ClientOnly>
  </div>
</template>
