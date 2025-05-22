<script setup>
import { ref } from 'vue'
const navDrawer = ref(false)
const navFooter = ref(false)
const navCredits = ref(false)
const props = defineProps({
  links: {
    type: Array,
  },
  nav: {
    type: String,
  },
})
</script>
<template>
  <nav :aria-label="props.nav" :class="{ mainNav: navDrawer, footerNav: navFooter, credits: navCredits }">
    <h2 class="sr-only">{{ props.nav }}</h2>
    <ul>
      <li v-for="link in links" :key="link.id">
        <ElementsTextLink :link-type="link.linkType" :href="link.href" :blank="link.blank" :route="link.route"
          aria-label="Navegación">
          {{ link.title }}
        </ElementsTextLink>
      </li>
    </ul>
  </nav>
</template>
