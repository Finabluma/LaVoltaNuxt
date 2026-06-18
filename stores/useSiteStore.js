import { maintenanceQuery } from '~/queries'

export const useSiteStore = defineStore('site', {
  state: () => ({
    maintenanceMode: false,
    maintenanceMessage: ''
  }),

  actions: {
    async fetchSettings() {
      const { data } = await useSanityQuery(maintenanceQuery)

      this.maintenanceMode = data.value?.maintenanceMode
      this.maintenanceMessage = data.value?.maintenanceMessage
    }
  }
})