import { onMounted, onBeforeUnmount, onUnmounted, nextTick } from 'vue'
import { useGsap } from '#imports'

export function usePinPanels(containerRef, selector = 'article') {
  const { gsap, ScrollTrigger } = useGsap()
  let ctx

  const init = () => {
    ctx = gsap.context(() => {
      const panels = containerRef.value?.querySelectorAll(selector) || []

      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: () =>
            panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom',
          pin: true,
          pinSpacing: false,
          preventOverlaps: true,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        })
      })
    }, containerRef)
  }

  const cleanup = () => {
    ctx?.revert()
    ScrollTrigger.refresh()
  }

  onMounted(() => {
    nextTick(() => {
      init()
    })
  })

  onBeforeUnmount(() => {
    cleanup()
  })

  onUnmounted(() => {
    // Ya revertimos arriba, pero por si acaso…
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })
}
