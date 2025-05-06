<script setup>
  import { onMounted } from 'vue'
  const { gsap } = useGsap()
  const { siteNav } = useMainStore()
  const drawer = ref()
  let ctx = ref(false)

  let tlNav = gsap.timeline({
    paused: true,
  })

  function drawerAnim() {
    const navigation = gsap.utils.toArray('#drawer nav ul li a')
    tlNav
      .add('nav')
      .set(drawer.value, {
        visibility: 'visible',
        yPercent: '-100',
        autoAlpha: 0,
      })
      .set('#close', { autoAlpha: 0, yPercent: '+=10' })
      .to(
        drawer.value,
        {
          duration: 0.25,
          autoAlpha: 1,
          yPercent: '0',
          ease: 'none',
        },
        'nav'
      )
      .from(
        '.drawerInner',
        {
          autoAlpha: 0,
          yPercent: '-20',
        },
        'nav+=0.1'
      )
      .from(
        navigation,
        {
          autoAlpha: 0,
          yPercent: '-=10',
          stagger: 0.25,
          ease: 'power2.in',
        },
        'nav+=0.1'
      )
      .to('#close', { autoAlpha: 1, yPercent: 0 })
  }

  function drawerIn() {
    tlNav.play()
  }

  function drawerOut() {
    tlNav.reverse()
  }

  onMounted(() => {
    ctx = gsap.context(() => {
      drawerAnim()
    }, drawer.value)
  })

  defineExpose({
    drawerIn,
  })
</script>
<template>
  <div id="drawer" ref="drawer">
    <div class="drawerInner">
      <button id="close" aria-label="close drawer" @click="drawerOut()">
        <NuxtIcon name="Close" class="icon--larger" />
      </button>
      <div class="contentInner" @click="drawerOut()">
        <div class="mainNav">
          <AppNav :links="siteNav?.navMain" class="main" nav="Main Nav" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  #drawer {
    @apply fixed
    z-[100]
    inset-0
    invisible
    backdrop-blur-lg
    bg-white
    dark:bg-secondark;

    .drawerInner {
      @apply m-auto
      w-screen
      max-h-dvh
      flex
      flex-col
      items-end
      py-5
      px-5
      landscape:pt-1
      landscape:lg:pt-5;

      .contentInner {
        @apply w-full h-full mx-auto;

        .mainNav {
          @apply h-full w-full flex justify-center items-center;
        }
      }
    }
  }
</style>
