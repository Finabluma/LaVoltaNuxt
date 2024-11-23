export default () => {
  const nuxtApp = useNuxtApp()

  return {
    gsap: nuxtApp.$gsap,
    ScrollTrigger: nuxtApp.$ScrollTrigger,
    DrawSVGPlugin: nuxtApp.$DrawSVGPlugin,
    ScrollToPlugin: nuxtApp.$ScrollToPlugin,
  }
}
