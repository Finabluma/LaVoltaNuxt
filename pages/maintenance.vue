<template>
  <div id="maintenance">
    <main>
        <div class="h-svh flex flex-col justify-center">
        <h1 class="sr-only">🛠 En mantenimiento</h1>
        <TodayAvailability class="offline lg:mt-5 lg:mb-2" />
        <SVGAppBotero class="dark:fill-firstdark lg:w-8/12 lg:mx-auto " />
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