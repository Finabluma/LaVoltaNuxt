<script setup>
const { siteNav, datos } = useMainStore()
</script>
<template>
  <footer class="relative z-50 pt-10 pb-10 bg-white dark:bg-secondark md:pt-20 md:pb-14">
    <div class="container">
      <SVGAppBoveda class="w-36 mx-auto mb-10 xl:w-40" />
      <div class="font-semibold l-stack items-center">
        <AppNav :links="siteNav?.navFooter" class="footerNav" nav="Main Navigation" />
        <AppColorMode />
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
        <div class="l-stack items-center">
          <div class="address text-center">
            {{ datos?.street }}, {{ datos?.locality }}
          </div>
          <div class="flex items-center">
            Web Desarrollada con
            <Corazon class="w-4 mx-1"/>por
            <ElementsTextLink :to="datos?.developer" target="_blank" title="Desarrollada por Oscar Francino"
              class="ml-1 underline underline-offset-2">
              OFM</ElementsTextLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
