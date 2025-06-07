export default defineNuxtPlugin(async () => {
  const route = useRoute();
  const pagesStore = usePagesStore();
  const mainStore = useMainStore();
  const horarioStore = useHorarioStore();
  const platoStore = usePlatoStore();
  const bebidaStore = useBebidaStore();
  const menuStore = useMenuStore();
  const postStore = usePostStore();
  // AWAIT
  await pagesStore.fetchPagesContent();
  await mainStore.fetchGlobalContent();
  await horarioStore.fetchHorarioContent();
  await platoStore.fetchPlatosContent();
  await bebidaStore.fetchBebidasContent();
  await menuStore.fetchMenuContent();
  await postStore.initLikes();
  await postStore.fetchAllPosts();
  await postStore.fetchPostBySlug();

  // check if preview mode is active and set previewIsActive
  const preview = route.query.preview && route.query.preview === "true";
  if (preview) {
    mainStore.previewIsActive = true;
  }
});
