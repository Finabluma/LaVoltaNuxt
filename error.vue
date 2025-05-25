<script setup>
const props = defineProps({
  error: Object,
})
</script>

<template>
  <div id="error">
    <AppHeader />
    <main>
      <div class="main-content">
        <div class="w-screen mx-auto px-[2vw] py-5 md:py-10 xl:px-0">
          <div class="absolute w-full h-full flex justify-center items-center pb-40">
            <div class="w-8/12 mx-auto text-center bg-white/80 outline -outline-offset-8 dark:bg-firstdark/80 py-10">
              <h1 class="mb-2 text-fluid-hero dark:text-secondark">
                {{ error.statusCode }}
              </h1>
              <NuxtLink to="/"
                class="flex-col justify-center items-center flex-wrap dark:text-secondark text-fluid-body-lg">
                Algo salió mal. Vuelve al
                <span class="underline dark:text-slate-300 font-cameo">inicio</span>
              </NuxtLink>
            </div>
          </div>
          <div class="w-full mx-auto">
            <SVGAppBotero class="dark:fill-firstdark" />
          </div>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>
