<script setup>
  const { horarios } = useHorarioStore()
  const props = defineProps({
    horarios: {
      type: Object,
    },
  })
</script>
<template>
  <section>
    <h2>Horario Semanal</h2>
    <div v-for="time in horarios.availability">
      <div v-if="time.day === 'Monday'" class="dia">
        <span>
          {{ $t('monday') }}
        </span>
        <AvailableTimes :availableTimes="time.availableTimes" />
      </div>
      <div v-if="time.day === 'Tuesday'" class="dia">
        <span>
          {{ $t('tuesday') }}
        </span>
        <AvailableTimes :availableTimes="time.availableTimes" />
      </div>
      <div v-if="time.day === 'Wednesday'" class="dia">
        <span>
          {{ $t('wednesday') }}
        </span>
        <AvailableTimes :availableTimes="time.availableTimes" />
      </div>
      <div v-if="time.day === 'Thursday'" class="dia">
        <span>
          {{ $t('thursday') }}
        </span>
        <AvailableTimes :availableTimes="time.availableTimes" />
      </div>
      <div v-if="time.day === 'Friday'" class="dia">
        <span>
          {{ $t('friday') }}
        </span>
        <AvailableTimes :availableTimes="time.availableTimes" />
      </div>
      <div v-if="time.day === 'Saturday'" class="dia">
        <span>
          {{ $t('saturday') }}
        </span>
        <AvailableTimes
          UnTurno="Un Turno"
          DosTurnos="Dos turnos"
          Libre="Cerrado"
          :availableTimes="time.availableTimes"
        />
      </div>
      <div v-if="time.day === 'Sunday'" class="dia">
        <span>
          {{ $t('sunday') }}
        </span>
        <AvailableTimes
          UnTurno="Un Turno"
          DosTurnos="Dos turnos"
          Libre="Cerrado"
          :availableTimes="time.availableTimes"
        />
      </div>
    </div>
  </section>
</template>
