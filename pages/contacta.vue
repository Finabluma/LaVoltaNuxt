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
    <HeroSection :items="contacta" />
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
