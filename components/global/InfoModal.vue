<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 512 512">
    <circle cx="256" cy="256" r="144" stroke-miterlimit="10" stroke-width="24" class="fill-white dark:fill-secondark" />
    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"
      d="M256 200v-48m108 104h-48m-116 0h-48m180-68l-24 24m-104 0l-24-24m128 112l24 24m-152 0l24-24"
      class="stroke-firstlight dark:stroke-firstdark" />
    <circle cx="256" cy="256" r="24" class="fill-white dark:fill-secondark" />
    <path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="16" d="M256 284V164"
      class="stroke-firstlight dark:stroke-firstdark">
      <animateTransform attributeName="transform" calcMode="spline" dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
        keyTimes="0; .17; .25; .42; .5; .67; 1" repeatCount="indefinite" type="rotate"
        values="-54 256 256; -15 256 256; -36 256 256; 36 256 256; 10 256 256; 115 256 256; -54 256 256" />
    </path>
  </svg>
</template>
