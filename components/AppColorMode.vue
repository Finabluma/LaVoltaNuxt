<script setup>
const colorMode = useColorMode()
</script>
<template>
  <ul :class="$attrs.class">
    <li v-if="colorMode.preference === 'system'" @click="colorMode.preference = 'dark'">
      <System class="w-6" />
    </li>
    <li v-else-if="colorMode.preference === 'dark'" @click="colorMode.preference = 'light'">
      <Sun class="w-6" />
    </li>
    <li v-else @click="colorMode.preference = 'system'" class="dark">
      <Moon class="w-6" />
    </li>
  </ul>
</template>
