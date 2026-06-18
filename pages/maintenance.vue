<template>
  <div class="maintenance">
    <h1>🛠 En mantenimiento</h1>

    <p v-if="message">{{ message }}</p>
    <p v-else>Volvemos pronto.</p>
  </div>
</template>

<script setup>
const site = useSiteStore()

const message = computed(() =>
  site.maintenanceMessage || 'Volvemos pronto.'
)
</script>