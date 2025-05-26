// composables/useStickyPanels.js
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useStickyPanels(selector = "article") {
  let triggers = [];

  onMounted(() => {
    const panels = gsap.utils.toArray(selector);

    triggers = panels.map((panel) =>
      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      })
    );
  });

  onUnmounted(() => {
    triggers.forEach((trigger) => trigger.kill());
  });
}
