<script setup>
import { ref } from 'vue'

const { phone, linkCarta } = useMainStore()


let draw = ref()

function drawerOn() {
  draw.value.drawerIn()
}
</script>
<template>
  <header class="global-header">
    <span role="status" aria-live="polite"></span>
    <div class="global-nav" role="navigation">
      <div class="logo-link">
        <NuxtLink exact to="/" aria-label="logo" labelledby="logo" title="Bienvenidos a la Volta">
          <SVGAppLogo class="ab" />
        </NuxtLink>
      </div>
      <div class="misc">
        <div v-if="phone" class="ab">
          <ElementsTextLink :to="phone?.phone" class="linkNav" :title="phone?.phone" aria-label="Teléfono">
            <NuxtIcon name="Phone" size="36" /><span class="sr-only">{{
              phone?.phone
              }}</span>
          </ElementsTextLink>
        </div>
        <div v-if="linkCarta" class="linktocarta ab">
          <ElementsTextLink link-type="internalLinkType" route="la-carta" :title="linkCarta?.title" class="linkNav p-1"
            aria-label="Carta">
            <ForksRound class="w-7" />
            <span class="sr-only">{{
              linkCarta?.title
              }}</span>
          </ElementsTextLink>
        </div>
        <button @click="drawerOn()" class="btn btn-circle ab" title="Menu" aria-label="Menu">
          <NuxtIcon name="Burguer" size="36" />
        </button>
      </div>
    </div>
  </header>
  <AppDrawer ref="draw" />
</template>
<style lang="postcss" scoped>
.global-header {
  @apply w-screen px-2;

  .global-nav {
    @apply max-w-5xl mx-auto flex items-center py-2 px-[5%] lg:px-[2%];

    .logo-link {
      @apply max-w-9 w-full;
    }

    .misc {
      @apply flex items-center ml-auto;

      .linktocarta .linkNav {
        @apply bg-firstlight dark:bg-firstdark;

        svg {
          @apply fill-white dark:fill-secondark;
        }
      }
    }
  }
}
</style>
