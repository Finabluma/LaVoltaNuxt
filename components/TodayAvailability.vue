<script setup>
const { horarios } = useHorarioStore()
const date = new Date()
const day = date.getDay(date)
const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const currentDay = dayNames[day]
const dia = computed(() => {
  return horarios.availability.filter((day) => day.day === currentDay)
})
const dag = computed(() => {
  return dia.value[0].availableTimes
})
function formatHour(item) {
  return item.slice(0, -2)
}
</script>
<template>
  <section class="today">
    <h2 class="sr-only">Horario del día</h2>
    <div class="container">
      <div v-if="dag.length === 0" class="state">
        <div>
          <Reloj class="mr-1" /> <span> Hoy cerramos</span>
        </div>
      </div>
      <div v-if="dag.length === 1" class="state">
        <div>
          <Reloj class="mr-1" />
          <span class="sm:mr-2">Hoy abrimos</span>
        </div>
        <div v-for="hours in dag" :key="hours.key" class="franjas">
          <div class="franjas">
            <span>{{ formatHour(hours.from) }}</span>
            <span> -{{ formatHour(hours.to) }}</span>pm
          </div>
        </div>
      </div>
      <div v-if="dag.length === 2" class="state">
        <div>
          <Reloj class="mr-1" />
          <span class="sm:mr-2">Hoy abrimos</span>
        </div>
        <div class="franjas">
          <div v-for="hours in dag" :key="hours.key" class="franja">
            <span>{{ formatHour(hours.from) }}</span>
            <span> -{{ formatHour(hours.to) }}</span>pm
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
