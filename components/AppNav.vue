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
    lg:w-auto 
    lg:mb-0;
    ul {
      @apply w-full 
      mx-auto 
      flex 
      justify-center 
      items-center 
      flex-col 
      px-10
      lg:flex-row
      lg:justify-end
      lg:px-0;

      li {
        @apply block
        w-full
        capitalize
        tracking-wider
        font-typewriter
        lg:w-auto
        lg:tracking-normal
        lg:text-sm;

        a {
          @apply w-full
          block
          text-center
          content-after
          mb-3
          lg:flex
          lg:items-center
          lg:mb-0
          lg:pr-2;

          &:after {
            @apply block
            w-10
            h-0.5
            mx-auto
            mt-3
            bg-slate-500
            dark:bg-slate-300
            lg:w-1
            lg:h-1
            lg:rounded
            lg:mt-0
            lg:ml-2;
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
      lg:ml-0
      lg:px-0;

      li {
        @apply capitalize;

        a {
          @apply flex
          items-center
          content-after
          text-slate-600 
          dark:text-slate-300
          lg:flex
          lg:items-center
          lg:mb-0;

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
