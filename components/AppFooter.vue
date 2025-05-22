<script setup>
const { siteNav, datos } = useMainStore()
</script>
<template>
  <footer class="relative z-30 pt-10 pb-10 bg-white dark:bg-secondark md:pt-20 md:pb-14">
    <div class="container mx-auto">
      <SVGAppBoveda class="w-36 mx-auto mb-8 xl:w-40" />
      <div class="l-stack font-semibold">
        <AppNav :links="siteNav?.navFooter" class="footerNav" nav="Main Navigation" />
        <AppColorMode class="w-8 mx-auto" />
      </div>
      <div class="text-xs/normal pt-5 pb-10">
        <div class="flex justify-center mb-2">
          <AppNav :links="siteNav?.navCredits" nav="Secondary Nav" class="mr-2" />
          |
          <NuxtLink :to="datos?.mail" title="Escribe a la Volta" class="mx-2">Contacta</NuxtLink>
          |
          <NuxtLink to="https://bro.sanity.studio/" target="_blank" title="Escribe a la Volta" class="ml-2">Login
          </NuxtLink>
        </div>
        <div class="info flexcol items-center">
          <div class="address text-center">
            {{ datos?.street }}, {{ datos?.locality }}
          </div>
          <div class="flex items-center">
            Web Desarrollada con
            <NuxtIcon name="Corazon" class="mx-1" /> por
            <ElementsTextLink :to="datos?.developer" target="_blank" title="Desarrollada por Oscar Francino"
              class="ml-1 underline underline-offset-2">
              OFM</ElementsTextLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="postcss" scoped>
#footer {

  .innerfooter {
    @apply w-full l-stack items-center;

    .top,
    .center,
    .bottom {
      @apply l-stack items-center;
    }

    .top {
      @apply mb-10;

      #boveda {
        @apply w-36 xl:w-40;
      }
    }

    .center {
      @apply pb-2 font-semibold;
    }



  }
}
</style>
