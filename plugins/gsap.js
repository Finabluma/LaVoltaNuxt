import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { SplitText } from 'gsap/SplitText'

export default defineNuxtPlugin(() => {
  /*------------------------------
    Register plugins
    ------------------------------*/
  gsap.registerPlugin(
    ScrollSmoother,
    ScrollTrigger,
    DrawSVGPlugin,
    ScrollToPlugin,
    SplitText
  )

  return {
    provide: {
      gsap,
      ScrollSmoother,
      ScrollTrigger,
      DrawSVGPlugin,
      ScrollToPlugin,
      SplitText,
    },
  }
})
