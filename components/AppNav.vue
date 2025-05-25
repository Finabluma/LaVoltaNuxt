<script setup>
import { ref, defineExpose } from 'vue'
const navDrawer = ref(false)
const navFooter = ref(false)
const navCredits = ref(false)
const navList = ref(null)
const props = defineProps({
  links: {
    type: Array,
  },
  nav: {
    type: String,
  },
})



defineExpose({ navList }) // Esto lo hará accesible desde el drawer
</script>
<template>
  <nav :aria-label="props.nav" :class="{ mainNav: navDrawer, footerNav: navFooter, credits: navCredits }">
    <h2 class="sr-only">{{ props.nav }}</h2>
    <ul ref="navList">
      <li v-for="link in links" :key="link.id">
        <ElementsTextLink :link-type="link.linkType" :href="link.href" :blank="link.blank" :route="link.route"
          aria-label="Navegación">
          {{ link.title }}
        </ElementsTextLink>
      </li>
    </ul>
  </nav>
</template>
