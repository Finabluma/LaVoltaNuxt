import { siteQuery } from '~/queries'

export const useMainStore = defineStore('MainStore', () => {
  let siteNav = ref()
  let siteOptions = ref()
  let siteFavicon = ref()
  let phone = ref()
  let linkCarta = ref()
  let datos = ref()

  async function fetchGlobalContent() {
    const { data } = await useSanityQuery(siteQuery)
    siteNav.value = data.value.siteNav
    siteOptions.value = data.value.siteOptions
    siteFavicon.value = data.value.siteFavicon
    phone.value = data.value.phone
    linkCarta.value = data.value.linkCarta
    datos.value = data.value.datos
  }

  return {
    siteNav,
    siteOptions,
    siteFavicon,
    phone,
    linkCarta,
    datos,
    fetchGlobalContent,
  }
})
