<script setup>
  const props = defineProps({
    error: Object,
  })
</script>

<template>
  <div class="page bg-slate-50 dark:bg-slate-600">
    <AppHeader />
    <main>
      <div
        class="absolute w-full h-full flex flex-col justify-center items-center"
      >
        <div class="content h-[80dvh] text-center">
          <h1 class="statusCode">
            {{ error.statusCode }}
          </h1>
          <NuxtLink to="/" class="bg-slate-200 dark:bg-slate-400">Vuelta a Inicio</NuxtLink>
        </div>
      </div>
      <div class="img w-screen h-full">
        <img src="./assets/images/botero.svg" alt="" />
      </div>
    </main>
    <AppFooter />
  </div>
</template>
<style lang="postcss" scoped>
  .statusCode {
    @apply text-pink-300 dark:text-slate-400 text-pretty  text-[10rem];
  }
</style>
