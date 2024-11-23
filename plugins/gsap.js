import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { SplitText } from 'gsap/SplitText'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

export default defineNuxtPlugin(() => {
  /*------------------------------
    Register plugins
    ------------------------------*/
  gsap.registerPlugin(
    ScrollTrigger,
    DrawSVGPlugin,
    ScrollToPlugin,
    SplitText,
    ScrollSmoother
  )

  return {
    provide: {
      gsap,
      ScrollTrigger,
      DrawSVGPlugin,
      ScrollToPlugin,
      SplitText,
      ScrollSmoother,
    },
  }
})
