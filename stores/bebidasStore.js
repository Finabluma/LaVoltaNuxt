import { bebidasQuery } from '~/queries'

export const useBebidaStore = defineStore('BebidaStore', () => {
  let tintos = ref()
  let blancos = ref()
  let rosados = ref()
  let cavas = ref()
  let title = ref()

  async function fetchBebidasContent() {
    const { data } = await useSanityQuery(bebidasQuery)
    title.value = data.value.title
    tintos.value = data.value.tintos
    blancos.value = data.value.blancos
    rosados.value = data.value.rosados
    cavas.value = data.value.cavas
  }

  return {
    tintos,
    blancos,
    rosados,
    cavas,
    title,
    fetchBebidasContent,
  }
})
