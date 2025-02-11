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
    <div v-if="dag.length === 0" class="state">
      <div><IcTwotoneSchedule class="mr-1" /> <span> Hoy cerramos</span></div>
    </div>
    <div v-if="dag.length === 1" class="state">
      <div>
        <IcTwotoneSchedule class="mr-1" />
        <span class="sm:mr-2">Hoy abrimos</span>
      </div>
      <div v-for="hours in dag" :key="hours.key" class="franjas">
        <div class="franjas">
          <span>{{ formatHour(hours.from) }}</span>
          <span> -{{ formatHour(hours.to) }}</span
          >pm
        </div>
      </div>
    </div>
    <div v-if="dag.length === 2" class="state">
      <div>
        <IcTwotoneSchedule class="mr-1" />
        <span class="sm:mr-2">Hoy abrimos</span>
      </div>
      <div class="franjas">
        <div v-for="hours in dag" :key="hours.key" class="franja">
          <span>{{ formatHour(hours.from) }}</span>
          <span> -{{ formatHour(hours.to) }}</span
          >pm
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="postcss" scoped>
  .today {
    @apply relative
    z-20
    h-12
    text-[16px]
    p-1
    flex
    justify-center
    items-center
    bg-slate-300
    text-slate-700
    dark:bg-slate-600
    dark:text-slate-300
    sm:h-8;
    .state {
      @apply flex
        flex-col
        items-center
        font-mono
        sm:w-11/12
        sm:flex-row
        sm:justify-center
        overflow-y-hidden;

      div:first-of-type {
        @apply flex items-center;
      }

      .franjas {
        @apply flex;
      }

      .franja:last-child {
        @apply flex justify-center items-center content-before;

        &:before {
          @apply block
            content-['&']
            mx-2;
        }
      }
    }
  }
</style>
