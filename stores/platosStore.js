import { platosQuery } from '~/queries'

export const usePlatoStore = defineStore('PlatoStore', () => {
  let obs = ref()
  let mar = ref()
  let tierra = ref()
  let carpaccio = ref()
  let postre = ref()
  let solidario = ref()

  async function fetchPlatosContent() {
    const { data } = await useSanityQuery(platosQuery)
    mar.value = data.value.mar
    tierra.value = data.value.tierra
    carpaccio.value = data.value.carpaccio
    postre.value = data.value.postre
    obs.value = data.value.obs
    solidario.value = data.value.solidario
  }

  return {
    mar,
    tierra,
    postre,
    carpaccio,
    solidario,
    obs,
    fetchPlatosContent,
  }
})
