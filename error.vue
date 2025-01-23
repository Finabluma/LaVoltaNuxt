<script setup>
  const props = defineProps({
    error: Object,
  })
</script>

<template>
  <div class="page">
    <AppHeader />
    <main>
      <div class="wrapper">
        <div class="content">
          <h1 class="statusCode">
            {{ error.statusCode }}
          </h1>
          <NuxtLink to="/" class="enlace">
            Algo salió mal. Vuelve al
            <span class="underline dark:text-slate-300 font-cameo">inicio</span>
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
  .wrapper {
    @apply relative 
    max-w-screen-2xl 
    flex 
    justify-center;

    .statusCode {
      @apply sr-only;
    }

    .enlace {
      @apply font-sans
      font-bold 
      text-lg
      text-center
      bg-slate-400/60
      dark:bg-slate-700/40
      text-slate-600/80
      dark:text-slate-400/80
      absolute  
      top-[40%] 
      max-sm:w-8/12
      p-2 
      h-[12vh] 
      flex-col
      justify-center
      items-center
      flex-wrap;
    }
  }
</style>
