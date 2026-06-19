<template>
  <div id="maintenance">
    <main>
        <div class="h-svh flex flex-col justify-center">
        <h1 class="sr-only">🛠 En mantenimiento</h1>
        <TodayAvailability class="offline" />
        <SVGAppBotero class="dark:fill-firstdark" />
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