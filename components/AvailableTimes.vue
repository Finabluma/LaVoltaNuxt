<script setup>
  const props = defineProps({
    availableTimes: {
      type: Object,
    },
  })
</script>
<template>
  <div>
    <div v-if="availableTimes.length === 0">
      <div class="state">Cerrado!</div>
    </div>
    <div v-if="availableTimes.length === 1">
      <div v-for="hours in availableTimes" :key="hours.key" class="franjas">
        <span>de {{ hours.from }}</span>
        <span>a {{ hours.to }}</span>
      </div>
    </div>
    <div v-if="availableTimes.length === 2">
      <div v-for="hours in availableTimes" :key="hours.key" class="franjas">
        <span>de {{ hours.from }} </span>
        <span> a {{ hours.to }}</span>
      </div>
    </div>
  </div>
</template>
