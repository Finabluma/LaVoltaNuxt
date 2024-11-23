import { pagesQuery } from '~/queries'

export const usePagesStore = defineStore('PagesStore', () => {
  let home = ref()
  let revista = ref()
  let menu = ref()
  let carta = ref()
  let reservas = ref()
  let contacta = ref()
  let terms = ref()

  async function fetchPagesContent() {
    const { data } = await useSanityQuery(pagesQuery)

    home.value = data.value.home
    revista.value = data.value.revista
    menu.value = data.value.menu
    carta.value = data.value.carta
    reservas.value = data.value.reservas
    contacta.value = data.value.contacta
    terms.value = data.value.terms
  }
  return {
    home,
    revista,
    menu,
    carta,
    reservas,
    contacta,
    terms,
    fetchPagesContent,
  }
})
