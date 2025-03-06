<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <path
      class="circle"
      d="M256,128c0,70.69-57.31,128-128,128S0,198.69,0,128,57.31,0,128,0s128,57.31,128,128Z"
    />
    <path
      class="object"
      d="M161.56,76.93v50.9c0,9.33,7.63,16.97,16.97,16.97h8.48v59.38c0,4.67,3.82,8.48,8.48,8.48s8.48-3.82,8.48-8.48V52.59c0-5.51-5.17-9.59-10.52-8.31-18.32,4.5-31.9,20.02-31.9,32.66M119.15,102.38h-16.97v-50.9c0-4.67-3.82-8.48-8.48-8.48s-8.48,3.82-8.48,8.48v50.9h-16.97v-50.9c0-4.67-3.82-8.48-8.48-8.48s-8.48,3.82-8.48,8.48v50.9c0,18.75,15.19,33.93,33.93,33.93v67.87c0,4.67,3.82,8.48,8.48,8.48s8.48-3.82,8.48-8.48v-67.87c18.75,0,33.93-15.19,33.93-33.93v-50.9c0-4.67-3.82-8.48-8.48-8.48s-8.48,3.82-8.48,8.48v50.9Z"
    />
  </svg>
</template>
<style lang="postcss" scoped>
  svg {
    @apply w-full;
    .circle {
      @apply fill-transparent
        stroke-1
      stroke-primary
      dark:stroke-[#2A3E57]
      dark:fill-[#2A3E57]/75;
    }
    .object {
      @apply fill-cyan100
      stroke-current
      stroke-[4px]
     dark:fill-[#A8B2BB]/20
     dark:stroke-white/20;
    }
  }
</style>
