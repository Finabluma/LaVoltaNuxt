// composables/useSkewOnScroll.js
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSkewOnScroll(selector = ".skew") {
  let triggerInstance = null;

  onMounted(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(selector, "skewY", "deg"),
      clamp = gsap.utils.clamp(-5, 5);

    triggerInstance = ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    gsap.set(selector, { transformOrigin: "right center", force3D: true });
  });

  onUnmounted(() => {
    triggerInstance?.kill();
  });
}
