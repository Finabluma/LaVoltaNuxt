export default defineNuxtRouteMiddleware(async (to) => {
  const site = useSiteStore()

  // 🔄 siempre refresca estado
  await site.fetchSettings()

  const isMaintenance = site.maintenanceMode

  // 🚧 si está en mantenimiento → forzar /maintenance
  if (isMaintenance && to.path !== '/maintenance') {
    return navigateTo('/maintenance')
  }

  // ✅ si NO está en mantenimiento → sacar de maintenance
  if (!isMaintenance && to.path === '/maintenance') {
    return navigateTo('/')
  }
})