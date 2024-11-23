<script setup>
const props = defineProps({
	style: {
		type: String,
		default: () => '',
	},
	children: {
		type: Object,
		default: () => {},
	},
})
</script>

<template>
  <h1 v-if="props.style === 'h1'"><slot /></h1>
	<h2 v-else-if="props.style === 'h2'"><slot /></h2>
	<h3 v-else-if="props.style === 'h3'"><slot /></h3>
	<p v-else-if="props.style === 'small'"><slot /></p>
	<p v-else><slot /></p>
</template>
