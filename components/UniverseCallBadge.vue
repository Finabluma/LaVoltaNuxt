<script setup>
const { gsap } = useGsap()
let cosmos = ref(),
  bruja = ref()

let ctx = null,
  main = ref(null)

onMounted(() => {
  ctx = gsap.context((self) => {
    cosmos.value.smUniverse()
    bruja.value.tlCallBadge()
  }, main.value)
})
onUnmounted(() => {
  ctx.revert()
})
</script>
<template>
  <div class="universeCallBadge relative z-10">
    <div class="wrapper relative w-full h-full">
      <div class="contacta relative
      z-20 w-full">
        <div class="inner max-w-2xl mx-auto">
          <NuxtLink to="tel:+34977651416" aria-label="teléfono reservas" class="w-full">
            <SVGAppCallBadge ref="bruja" />
          </NuxtLink>
        </div>

      </div>
      <div class="stellarium absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <SVGAppUniverse ref="cosmos" />
      </div>
    </div>
    <AppDivider />
  </div>
</template>
