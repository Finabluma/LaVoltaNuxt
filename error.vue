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
    max-w-prose 
    mx-auto
    flex 
    justify-center;

    .content {
      @apply absolute
      w-11/12
      top-[40%]
      left-[5%]
      flex
      flex-col
      items-center
      p-5
      bg-cyan/80;

      .statusCode {
        @apply mb-2
        text-8xl;
      }

      .enlace {
        @apply font-coordinates
        font-bold
        text-center        
        px-2 
        flex-col
        justify-center
        items-center
        flex-wrap;
      }
    }
  }
</style>
