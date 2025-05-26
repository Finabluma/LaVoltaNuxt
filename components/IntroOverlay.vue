<script setup>
import { onMounted, ref } from 'vue'
import { useIntroStore } from '@/stores/useIntroStore'
const { gsap, SplitText } = useGsap()

const overlay = ref()
const show = ref(true)

const store = useIntroStore()

onMounted(() => {
    store.check()

    if (store.hasSeenIntro) {
        show.value = false
        return
    }

    let split = SplitText.create('.intro-text', { type: "chars" });

    gsap.timeline()
        .set('.intro-text', { autoAlpha: 1 })
        .from(split.chars, {
            duration: 0.5,
            yPercent: "random([-10, 100])",
            rotation: "random(-60, 60)",
            autoAlpha: 0,
            stagger: {
                amount: 0.5,
                from: 'random'
            }
        })
        .to('.intro-overlay', {
            y: '-100%',
            duration: 1.5,
            ease: 'power4.inOut',
            onComplete: () => {
                store.setSeen()
                show.value = false
            },
        })
})
</script>
<template>
    <div v-if="show"
        class="intro-overlay fixed top-0 left-0 z-[100] w-full h-full bg-firstlight text-white/80 dark:bg-secondark dark:text-firstdark flex justify-center items-center overflow-hidden"
        ref="overlay">
        <div class="intro-text font-bold text-fluid-5xl opacity-0">Bienvenid@</div>
    </div>
</template>
