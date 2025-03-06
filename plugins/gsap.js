import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { SplitText } from 'gsap/SplitText'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'

export default defineNuxtPlugin(() => {
  /*------------------------------
    Register plugins
    ------------------------------*/
  gsap.registerPlugin(
    ScrollSmoother,
    ScrollTrigger,
    DrawSVGPlugin,
    CSSRulePlugin,
    ScrollToPlugin,
    SplitText
  )

  return {
    provide: {
      gsap,
      ScrollSmoother,
      ScrollTrigger,
      CSSRulePlugin,
      DrawSVGPlugin,
      ScrollToPlugin,
      SplitText,
    },
  }
})
