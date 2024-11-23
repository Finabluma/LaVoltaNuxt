import { horariosQuery } from '~/queries'

export const useHorarioStore = defineStore('HorarioStore', () => {
  let horarios = ref()

  async function fetchHorarioContent() {
    const { data } = await useSanityQuery(horariosQuery)
    horarios.value = data.value.horarios
  }

  return {
    horarios,
    fetchHorarioContent,
  }
})
