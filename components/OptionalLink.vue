<script setup>
  const props = defineProps({
    link: {
      type: Object,
    },
  })
</script>
<template>
  <ElementsTextLink
    :link-type="link.linkType"
    :href="link.href"
    :route="link.route"
  >
    {{ link.title }}
  </ElementsTextLink>
</template>
