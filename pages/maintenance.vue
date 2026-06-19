<template>
  <div id="maintenance">
    <main>
        <div class="h-svh flex flex-col justify-center">
        <h1 class="sr-only">🛠 En mantenimiento</h1>
        <TodayAvailability class="offline xl:mt-5" />
        <SVGAppBotero class="dark:fill-firstdark xl:w-8/12 xl:mx-auto " />
      </div>      
    </main>
  </div>
</template>

<script setup>
const site = useSiteStore()

const message = computed(() =>
  site.maintenanceMessage || 'Volvemos pronto.'
)
</script>

<style>
header, .today{
  display: none;
}
.today.offline{
  display:block;
  border-bottom:none
}
</style>