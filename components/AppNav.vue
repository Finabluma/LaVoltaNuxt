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
      @apply flex flex-col justify-evenly;

      li {
        @apply font-mono
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
          text-slate-300/60;

          &:hover {
            @apply text-slate-300;
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
        xl:text-sm;

        a {
          @apply w-full
          block
          text-center
          content-after
          mb-3
          xl:flex
          xl:items-center
          xl:mb-0
          xl:pr-2;

          &:after {
            @apply block
            w-10
            h-0.5
            mx-auto
            mt-3
            bg-slate-500
            dark:bg-slate-300
            xl:w-1
            xl:h-1
            xl:rounded
            xl:mt-0
            xl:ml-2;
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
          content-after
          text-slate-600 
          dark:text-slate-300
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
