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
  <nav
    :aria-labelledby="props.nav"
    :class="{ main: navDrawer, pie: navFooter, credits: navCredits }"
  >
    <h2 class="sr-only">{{ props.nav }}</h2>
    <ul>
      <li v-for="link in links" :key="link.id">
        <ElementsTextLink
          :link-type="link.linkType"
          :href="link.href"
          :blank="link.blank"
          :route="link.route"
        >
          {{ link.title }}
        </ElementsTextLink>
      </li>
    </ul>
  </nav>
</template>
<style lang="postcss" scoped>
  .main {
    @apply w-full;

    ul {
      @apply flex 
      flex-col 
      justify-evenly;

      li {
        @apply font-light
        text-8xl/tight
        text-balance
        landscape:text-3xl/tight
        landscape:lg:text-7xl/tight
        md:px-20;

        a {
          @apply block
          py-3
          no-underline
          cursor-pointer
          text-primary;

          &:hover {
            @apply text-white/80;
          }

          &.router-link-active {
            @apply cursor-default 
            text-cyan100;
          }
        }

        &:first-of-type a {
          @apply pt-0;
        }
      }
    }
  }
  .pie {
    @apply mb-5 w-full 
    xl:w-auto 
    xl:mb-0;

    ul {
      @apply w-full 
      mx-auto 
      flex 
      justify-center 
      items-center 
      flex-col 
      px-10
      xl:flex-row
      xl:justify-end
      xl:px-0;

      li {
        @apply block
        w-full
        capitalize
        tracking-wider
        font-typewriter
        xl:w-auto
        xl:tracking-normal
        xl:text-lg;

        a {
          @apply w-full
          block
          text-center
          mb-5
          xl:flex
          xl:items-center
          xl:mb-0
          xl:pr-3;

          &.router-link-active {
            @apply cursor-default 
            text-primary/50;
          }
        }

        &:last-of-type a:after {
          @apply content-none;
        }
      }
    }
  }

  .credits {
    ul {
      @apply w-full 
      mx-auto 
      flex 
      justify-center 
      px-10
      xl:ml-0
      xl:px-0;

      li {
        @apply capitalize;

        a {
          @apply flex
          items-center
          text-primary
          xl:flex
          xl:items-center
          xl:mb-0;

          &:after {
            @apply block
            w-1
            h-1
            rounded-full
            mx-1;
          }
        }

        &:last-of-type a:after {
          @apply content-none;
        }
      }
    }
  }
</style>
