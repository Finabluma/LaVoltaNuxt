<script setup>
  const colorMode = useColorMode()
</script>
<template>
  <ul :class="$attrs.class">
    <li
      v-if="colorMode.preference === 'system'"
      @click="colorMode.preference = 'dark'"
    >
      <System />
    </li>
    <li
      v-else-if="colorMode.preference === 'dark'"
      @click="colorMode.preference = 'light'"
    >
      <Sun />
    </li>
    <li v-else @click="colorMode.preference = 'system'" class="dark">
      <Moon />
    </li>
  </ul>
</template>
<style lang="postcss" scoped>
  ul li svg {
    @apply w-6;
  }
</style>
