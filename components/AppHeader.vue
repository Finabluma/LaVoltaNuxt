<script setup>
import { ref } from 'vue'

const { phone, linkCarta } = useMainStore()


let draw = ref()

function drawerOn() {
  draw.value.drawerIn()
}
</script>
<template>
  <header class="p-2 w-screen">
    <span role="status" aria-live="polite"></span>
    <div class="container mx-auto flex items-center p-2 " role="navigation">
      <div class="logo-link max-w-9 w-full">
        <NuxtLink exact to="/" aria-label="logo" labelledby="logo" title="Bienvenidos a la Volta">
          <SVGAppLogo />
        </NuxtLink>
      </div>
      <div class="flex items-center ml-auto">
        <div v-if="phone" class="mr-4">
          <ElementsTextLink :to="phone?.phone" :title="phone?.phone" aria-label="Teléfono">
            <NuxtIcon name="Phone" size="36" /><span class="sr-only">{{
              phone?.phone
              }}</span>
          </ElementsTextLink>
        </div>
        <div v-if="linkCarta" class="mr-4">
          <ElementsTextLink link-type="internalLinkType" route="la-carta" :title="linkCarta?.title"
            class="block bg-firstlight dark:bg-firstdark p-1" aria-label="Carta">
            <ForksRound class="w-6 fill-white dark:fill-secondark" />
            <span class="sr-only">{{
              linkCarta?.title
              }}</span>
          </ElementsTextLink>
        </div>
        <button @click="drawerOn()" title="Menu" aria-label="Menu">
          <NuxtIcon name="Burguer" size="36" />
        </button>
      </div>
    </div>
  </header>
  <AppDrawer ref="draw" />
</template>
