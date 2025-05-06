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
    :aria-label="props.nav"
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
        @apply font-mono
        font-bold
        text-5xl/tight
        text-balance
        md:px-20;

        a {
          @apply block
          py-3
          no-underline
          cursor-pointer
          text-firstlight         
          dark:text-firstdark;

          &.router-link-active {
            @apply cursor-default 
            text-firstlight/80
            dark:text-firstdark/80;
          }
        }

        &:first-of-type a {
          @apply pt-0;
        }
      }
    }
  }
  .pie {
    @apply mb-5 
    w-full;

    ul {
      @apply w-full 
      mx-auto 
      flex 
      justify-center 
      items-center 
      flex-col 
      px-10;

      li {
        @apply block
        w-full
        capitalize
        tracking-wider
        font-coordinates;

        a {
          @apply w-full
          block
          text-center
          mb-5;
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
      px-10;

      li {
        @apply capitalize
        xl:text-sm;

        a {
          @apply flex
          items-center;

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
