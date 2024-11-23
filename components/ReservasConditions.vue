<template>
  <section>
    <div class="wrapper-conditions">
      <slot name="header" />

      <slot />
    </div>
  </section>
</template>
<style lang="postcss" scoped>
  .wrapper-conditions {
    @apply pb-20;
  }
</style>
