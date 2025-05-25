<script setup>
import { ref } from 'vue'

const { phone, linkCarta } = useMainStore()


const drawerRef = ref(null)

const openMenu = () => {
  drawerRef.value.openDrawer()
}


let draw = ref()

function drawerOn() {
  draw.value.drawerIn()
}
</script>
<template>
  <header class="p-2 w-screen">
    <span role="status" aria-live="polite"></span>
    <div class="w-full max-w-6xl mx-auto flex items-center px-[5vw]" role="navigation">
      <div class="w-8">
        <NuxtLink exact to="/" aria-label="logo" labelledby="logo" title="Bienvenidos a la Volta">
          <SVGAppLogo />
        </NuxtLink>
      </div>
      <div class="flex items-center ml-auto">
        <div v-if="phone" class="mr-4">
          <ElementsTextLink :to="phone?.phone" :title="phone?.phone" aria-label="Teléfono">
            <Phone class="w-8" /><span class="sr-only">{{
              phone?.phone
            }}</span>
          </ElementsTextLink>
        </div>
        <div v-if="linkCarta" class="mr-4">
          <ElementsTextLink link-type="internalLinkType" route="la-carta" :title="linkCarta?.title"
            class="block bg-firstlight dark:bg-secondark p-1" aria-label="Carta">
            <ForksRound class="w-6 fill-white dark:fill-firstdark" />
            <span class="sr-only">{{
              linkCarta?.title
            }}</span>
          </ElementsTextLink>
        </div>
        <button @click="openMenu" title="Menu" aria-label="Menu">
          <NuxtIcon name="Burguer" size="36" />
        </button>
      </div>
    </div>
  </header>
  <AppDrawer ref="drawerRef" />
</template>
