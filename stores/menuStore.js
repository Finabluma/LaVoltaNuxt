import { menuQuery } from '~/queries'
export const useMenuStore = defineStore('MenuStore', () => {
  let menuDia = ref()
  let menuTitlePrice = ref()

  async function fetchMenuContent() {
    const { data } = await useSanityQuery(menuQuery)
    menuDia.value = data.value.menuDia
    menuTitlePrice.value = data.value.menuTitlePrice
  }

  return {
    menuDia,
    menuTitlePrice,
    fetchMenuContent,
  }
})
