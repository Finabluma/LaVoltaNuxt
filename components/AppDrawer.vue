<script setup>
import { ref, nextTick } from 'vue'
import gsap from 'gsap'
const { siteNav } = useMainStore()

const drawer = ref(null)
const isOpen = ref(false)
const navComponent = ref(null) // para acceder a navList expuesto

const openDrawer = async () => {
  isOpen.value = true
  await nextTick()
  document.body.style.overflow = 'hidden'

  // Reset position instantáneamente
  gsap.set(drawer.value, { xPercent: 100 })

  // Luego lo animamos a 0 (entra)
  const navList = navComponent.value?.navList
  if (navList) {
    // Reset inicial de cada li
    gsap.set(navList.children, { opacity: 0, x: 40 })
  }

  gsap.to(drawer.value, {
    xPercent: 0,
    duration: 0.3,
    ease: 'power2.out',
    onComplete: () => {
      if (navList) {
        gsap.to(navList.children, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out'
        })
      }
    }
  })
}

const closeDrawer = () => {
  gsap.to(drawer.value, {
    xPercent: 100, // volver a salir hacia la derecha
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      isOpen.value = false
      document.body.style.overflow = ''
    }
  })
}


defineExpose({ openDrawer }) // para poder abrirlo desde el header
</script>
<template>
  <div ref="drawer" v-show="isOpen" class="fixed top-0 left-0 w-screen h-full bg-white dark:bg-secondark z-50">
    <button @click="closeDrawer" class="absolute w-20 h-20 right-4 top-4 flex justify-center">
      <span class="text-fluid-4xl text-firstlight/50 dark:text-white/40">&times;</span>
    </button>
    <div
      class="max-w-5xl mx-auto min-h-[80vh] flex justify-center items-center px-[5vw] sm:px-[10vw] my-10 sm:my-5 md:my-10">
      <AppNav :links="siteNav?.navMain" ref="navComponent" class="mainNav" nav="Main Navigation" @click="closeDrawer" />
    </div>
  </div>
</template>
