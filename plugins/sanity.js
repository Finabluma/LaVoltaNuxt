export default defineNuxtPlugin(async () => {
  const route = useRoute()
  const pagesStore = usePagesStore()
  const mainStore = useMainStore()
  const horarioStore = useHorarioStore()
  const platoStore = usePlatoStore()
  const bebidaStore = useBebidaStore()
  const menuStore = useMenuStore()
  // AWAIT
  await pagesStore.fetchPagesContent()
  await mainStore.fetchGlobalContent()
  await horarioStore.fetchHorarioContent()
  await platoStore.fetchPlatosContent()
  await bebidaStore.fetchBebidasContent()
  await menuStore.fetchMenuContent()

  // check if preview mode is active and set previewIsActive
  const preview = route.query.preview && route.query.preview === 'true'
  if (preview) {
    mainStore.previewIsActive = true
  }
})
