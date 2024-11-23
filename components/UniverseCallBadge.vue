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
      <div class="cta">
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
    bg-slate-100
    dark:bg-slate-600
    z-30
    overflow-hidden;

    .wrapper {
      @apply w-screen
      h-full
      content-before;

      &:before {
        @apply absolute
        top-0
        left-0
        w-screen
        h-full
        bg-gradient-radial
        from-slate-50
        to-slate-300
        dark:from-slate-500
        dark:to-slate-700;
      }
      .cta {
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
            @apply w-full py-3;
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
