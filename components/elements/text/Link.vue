<script setup>
import { computed } from 'vue'
const linkNav = ref(false)
const props = defineProps({
  linkType: {
    type: String,
    default: () => 'extLinkType',
  },
  href: {
    type: String,
    default: () => '',
  },
  blank: {
    type: Boolean,
    default: () => false,
  },
  route: {
    type: String,
    default: () => '',
  },
  slug: {
    type: String,
    default: () => '',
  },
  title: {
    type: String,
    default: () => '',
  },
})
const internalRoute = computed(() => {
  return {
    name: props.route ?? 'index',
    params: props.slug ? { slug: props.slug } : {},
  }
})
</script>
<template>
  <NuxtLink :to="props.linkType === 'extLinkType' ? props.href : internalRoute"
    :target="props.blank && props.linkType === 'extLinkType' ? '_blank' : ''"
    :rel="props.blank && props.linkType === 'extLinkType' ? 'noopener' : ''" :title="props.title">
    <slot></slot>
  </NuxtLink>
</template>
