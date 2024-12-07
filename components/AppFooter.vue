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
          *
          <NuxtLink :to="datos?.mail" title="Escribe a la Volta" class="mx-2"
            >Contacta</NuxtLink
          >
          *
          <NuxtLink to="https://bro.sanity.studio/" title="Escribe a la Volta" class="ml-2"
            >Login</NuxtLink
          >
        </div>
        <div class="info">
          <div class="address text-center">
            {{ datos?.street }}, {{ datos?.locality }}
          </div>
          <div class="flex items-center">
            Web Desarrollada con
            <NuxtIcon name="MdiHeart" class="mx-1" /> por
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
    pb-5;
    .innerfooter {
      @apply w-full 
      flex
      flex-col
      justify-center
      items-center;

      .top,
      .center,
      .bottom {
        @apply w-10/12
        flex
        flex-col
        items-center
        justify-center
        lg:w-11/12;
      }
      .top {
        @apply mb-10
        lg:mb-5
        lg:flex-row
        lg:px-8
        lg:border-b
        lg:border-slate-600
        lg:dark:border-slate-300
        lg:pt-0
        lg:pb-5;

        #boveda {
          @apply w-36
          lg:w-32 
          lg:ml-auto;
        }
      }
      .center {
        @apply pb-5
        lg:border-b
        lg:border-slate-600
        lg:dark:border-slate-300
        lg:flex-row
        lg:justify-between
        lg:px-7;
      }
      .bottom {
        @apply text-xs/normal
        pt-5
        pb-10
        lg:flex-row
        lg:items-start
        lg:justify-between
        lg:px-4;
      }

      .info {
        @apply w-full flex flex-col justify-center
        items-center
        lg:w-auto
        lg:items-end;
      }
    }
  }
</style>
