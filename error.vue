<script setup>
  const props = defineProps({
    error: Object,
  })
</script>

<template>
  <div class="relative bg-slate-200 dark:bg-slate-600">
    <AppHeader />
    <main>
      <div
        class="w-full h-full flex flex-col justify-center items-center py-20"
      >
        <div class="content text-center">
          <h1 class="statusCode">
            {{ error.statusCode }}
          </h1>
          <NuxtLink to="/" class="font-typewriter text-xl">
            <span class="text-lg block">Algo salió mal</span> Vuelta a Inicio 🙏
          </NuxtLink>
        </div>
        <div class="img w-[50vw] md:w-[40vw] h-full mx-auto">
          <img src="./assets/images/botero.svg" alt="" />
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>
<style lang="postcss" scoped>
  .statusCode {
    @apply font-cameo text-slate-500/20 dark:text-slate-800/30 text-pretty  text-[15rem];
  }
</style>
