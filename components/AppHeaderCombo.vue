<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
const { gsap, ScrollTrigger } = useGsap()

const showTodayBar = ref(true)
const todayBarHeight = ref(0)
let scrollTriggerInstance = null
let ctx = null

const todayBarRef = ref(null)
const appHeaderRef = ref(null)
const headerFixed = computed(() => !showTodayBar.value)

function updateTodayBarHeight() {
    if (todayBarRef.value) {
        todayBarHeight.value = todayBarRef.value.offsetHeight
        // Aplicar top inicial al app header (cuando today bar visible)
        if (showTodayBar.value && appHeaderRef.value) {
            gsap.set(appHeaderRef.value, { top: todayBarHeight.value })
        }
    }
}

onMounted(() => {
    ctx = gsap.context(() => {
        updateTodayBarHeight()

        scrollTriggerInstance = ScrollTrigger.create({
            start: 0,
            end: 'max',
            onUpdate: (self) => {
                const scrollY = self.scroll()

                if (scrollY > 100 && showTodayBar.value) {
                    gsap.to(todayBarRef.value, {
                        y: -todayBarHeight.value,
                        opacity: 0,
                        duration: 0.4,
                        ease: 'power3.out',
                        pointerEvents: 'none',
                    })
                    gsap.to(appHeaderRef.value, {
                        top: 0,
                        duration: 0.4,
                        ease: 'power3.out',
                    })
                    showTodayBar.value = false
                } else if (scrollY <= 100 && !showTodayBar.value) {
                    gsap.to(todayBarRef.value, {
                        y: 0,
                        opacity: 1,
                        duration: 0.4,
                        ease: 'power3.out',
                        pointerEvents: 'auto',
                    })
                    gsap.to(appHeaderRef.value, {
                        top: todayBarHeight.value,
                        duration: 0.4,
                        ease: 'power3.out',
                    })
                    showTodayBar.value = true
                }
            },
        })

        window.addEventListener('resize', () => {
            updateTodayBarHeight()
            // Ajustar top app-header según si today está visible
            if (showTodayBar.value && appHeaderRef.value) {
                gsap.set(appHeaderRef.value, { top: todayBarHeight.value })
            }
        })
    })
})

onUnmounted(() => {
    scrollTriggerInstance?.kill()
    ctx?.revert()
    window.removeEventListener('resize', updateTodayBarHeight)
})
</script>

<template>
    <div class="header-combo fixed top-0 left-0 right-0 z-50 pointer-events-auto">
        <div ref="todayBarRef"
            class="today-bar bg-white dark:bg-secondark will-change-transform transition-opacity duration-300">
            <TodayAvailability />
        </div>
        <div ref="appHeaderRef"
            :class="['app-header', headerFixed ? 'bg-white dark:bg-secondark dark:fill-firstdark shadow-md' : 'bg-transparent']"
            class="fixed left-0 right-0 pointer-events-auto transition-colors duration-400">
            <AppHeader />
        </div>
    </div>
</template>

<style scoped>
.header-combo>* {
    will-change: transform, opacity, top;
    transition: top 0.4s ease;
}

.today-bar {
    /* no height fijo para que sea dinámico */
}

.app-header {
    transition: background-color 0.4s ease, box-shadow 0.4s ease;
}
</style>
