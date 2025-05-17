<script setup>
  const { siteNav, datos } = useMainStore()
</script>
<template>
  <footer id="footer">
    <div class="innerfooter">
      <div class="top">
        <SVGAppBoveda />
      </div>
      <div class="center">
        <AppNav :links="siteNav?.navFooter" class="pie" nav="Main Nav" />

        <AppColorMode />
      </div>
      <div class="bottom">
        <div class="flex">
          <AppNav
            :links="siteNav?.navCredits"
            nav="Secondary Nav"
            class="mr-2"
          />
          |
          <NuxtLink :to="datos?.mail" title="Escribe a la Volta" class="mx-2"
            >Contacta</NuxtLink
          >
          |
          <NuxtLink
            to="https://bro.sanity.studio/"
            target="_blank"
            title="Escribe a la Volta"
            class="ml-2"
            >Login</NuxtLink
          >
        </div>
        <div class="info">
          <div class="address text-center">
            {{ datos?.street }}, {{ datos?.locality }}
          </div>
          <div class="flex items-center">
            Web Desarrollada con
            <NuxtIcon name="Corazon" class="mx-1" /> por
            <ElementsTextLink
              :to="datos?.developer"
              target="_blank"
              title="Desarrollada por Oscar Francino"
              class="ml-1 underline underline-offset-2"
            >
              OFM</ElementsTextLink
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="postcss" scoped>
  #footer {
    @apply relative
    z-30
    pt-10
    pb-10
    bg-white
    dark:bg-secondark
    md:pt-20
    md:pb-14;
    .innerfooter {
      @apply w-full 
      l-stack
      items-center;

      .top,
      .center,
      .bottom {
        @apply l-stack
        items-center;
      }
      .top {
        @apply mb-10;

        #boveda {
          @apply w-36
          xl:w-40;
        }
      }
      .center {
        @apply pb-2
        font-semibold;
      }
      .bottom {
        @apply relative
        text-xs/normal
        pt-5
        pb-10;
      }

      .info {
        @apply l-stack
        items-center;
      }
    }
  }
</style>
