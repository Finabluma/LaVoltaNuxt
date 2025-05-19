<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

function handleScroll() {
    isScrolled.value = window.scrollY > 100
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="fixed top-0 left-0 right-0 z-50 pointer-events-auto">
        <!-- Today bar -->
        <div class="transition-all duration-500 ease-out bg-white dark:bg-secondark" :class="{
            'opacity-0 -translate-y-full pointer-events-none': isScrolled,
            'opacity-100 translate-y-0': !isScrolled,
            'sticky top-0 z-50': true,
        }">
            <TodayAvailability />
        </div>

        <!-- App header -->
        <div class="absolute transition-all duration-500 ease-out z-40" :class="[
            isScrolled
                ? 'bg-white dark:bg-secondark dark:fill-firstdark shadow-md stycky top-0 z-50'
                : 'bg-transparent shadow-none'
        ]">
            <AppHeader />
        </div>
    </div>
</template>
