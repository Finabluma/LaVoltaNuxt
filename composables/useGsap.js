export default () => {
  const nuxtApp = useNuxtApp()

  return {
    gsap: nuxtApp.$gsap,
    ScrollSmoother: nuxtApp.$ScrollSmoother,
    ScrollTrigger: nuxtApp.$ScrollTrigger,
    DrawSVGPlugin: nuxtApp.$DrawSVGPlugin,
    ScrollToPlugin: nuxtApp.$ScrollToPlugin,
    CSSRulePlugin: nuxtApp.$CSSRulePlugin,
    MorphSVGPlugin: nuxtApp.$MorphSVGPlugin,
    SplitText: nuxtApp.$SplitText,
  }
}
