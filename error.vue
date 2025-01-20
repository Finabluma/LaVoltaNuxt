<script setup>
  const props = defineProps({
    error: Object,
  })
</script>

<template>
  <div class="relative bg-slate-200 dark:bg-slate-600">
    <AppHeader />
    <main>
      <div class="wrapper relative max-w-screen-2xl flex justify-center">
        <div class="content">
          <h1 class="statusCode sr-only">
            {{ error.statusCode }}
          </h1>
          <NuxtLink
            to="/"
            class="font-cameo text-slate-800 dark:text-slate-400 absolute bottom-20 xl:bottom-0 right-auto w-full h-[10vh] left-auto flex justify-center"
          >
            <span class="block mr-2">Algo salió mal </span> Vuelve al Inicio
          </NuxtLink>
        </div>
        <div class="svg overflow-hidden">
          <SVGAppBotero />
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>
<style lang="postcss" scoped>
  /* .statusCode {
    @apply font-cameo text-slate-500/20 dark:text-slate-800/30 text-pretty  text-[35rem];
  } */
</style>
