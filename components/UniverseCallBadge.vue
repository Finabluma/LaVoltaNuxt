<script setup>
  //GSAP
  const { gsap } = useGsap()
  let cosmos = ref(),
    main = ref(),
    bruja = ref()

  let ctx = null

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
  <div class="universeCallBadge">
    <div class="wrapper">
      <div class="contacta">
        <div class="inner">
          <NuxtLink to="tel:+34977651416" aria-label="teléfono reservas">
            <SVGAppCallBadge ref="bruja" />
          </NuxtLink>
        </div>
      </div>
      <div class="stellarium">
        <SVGAppUniverse ref="cosmos" />
      </div>
    </div>
    <AppDivider class="down" />
  </div>
</template>
<style lang="postcss" scoped>
  .universeCallBadge {
    @apply relative
    w-screen
    z-30
    overflow-hidden
    bg-white
    dark:bg-[#4A647D];

    .wrapper {
      @apply w-screen
      h-full
      content-before;

      &:before {
        @apply content-['']
        absolute
        top-0
        left-0
        w-screen
        h-full
        bg-white
        dark:bg-[#4A647D];
      }
      .contacta {
        @apply relative
        z-20
        max-h-dvh
        mx-auto
        flex
        justify-center
        items-center;

        .inner {
          @apply w-10/12
          sm:w-7/12
          md:w-8/12
          lg:w-9/12
          xl:max-w-3xl;

          a {
            @apply w-full;
          }
        }
      }
      .stellarium {
        @apply absolute 
        top-0
        left-0
        z-10
        w-full
        h-full
        flex
        justify-center
        items-center;
      }
    }
  }
</style>
