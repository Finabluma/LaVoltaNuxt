<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  const { gsap, ScrollTrigger } = useGsap()
  const { phone, linkCarta } = useMainStore()

  const header = ref()
  let ctx = ref(),
    draw = ref()

  function drawerOn() {
    draw.value.drawerIn()
  }

  onMounted(() => {
    ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'clamp(top+=5% top+=10%)',
        end: 10000,
        toggleClass: {
          targets: '.global-header',
          className: 'scrolled',
        },
      })
    }, header.value)
  })
  onUnmounted(() => {
    ctx.revert()
  })
</script>
<template>
  <header class="global-header">
    <span role="status" aria-live="polite"></span>
    <div class="global-nav" role="navigation">
      <div class="logo-link">
        <NuxtLink
          exact
          to="/"
          aria-label="logo"
          labelledby="logo"
          title="Bienvenidos a la Volta"
        >
          <SVGAppLogo class="ab" />
        </NuxtLink>
      </div>
      <div class="misc">
        <div v-if="phone" class="ab">
          <ElementsTextLink
            :to="phone?.phone"
            class="linkNav"
            :title="phone?.phone"
            ><NuxtIcon name="Phone" size="36" /><span class="sr-only">{{
              phone?.phone
            }}</span></ElementsTextLink
          >
        </div>
        <div v-if="linkCarta" class="linktocarta ab">
          <ElementsTextLink
            link-type="internalLinkType"
            route="la-carta"
            :title="linkCarta?.title"
            class="linkNav p-1"
          >
            <ForksRound class="w-7" />
            <span class="sr-only">{{
              linkCarta?.title
            }}</span></ElementsTextLink
          >
        </div>
        <button @click="drawerOn()" class="btn btn-circle ab">
          <NuxtIcon name="Burguer" size="36" />
        </button>
      </div>
    </div>
  </header>
  <AppDrawer ref="draw" />
</template>
<style lang="postcss" scoped>
  .global-header {
    @apply absolute
    pt-8
    w-screen 
    z-40
    px-2;
    .global-nav {
      @apply max-w-5xl
      mx-auto
      flex
      items-center
      py-5
      px-[5%]
      lg:px-[2%];
      .logo-link {
        @apply max-w-9 w-full;
      }

      .misc {
        @apply flex items-center ml-auto;

        .linktocarta .linkNav {
          @apply bg-firstlight          
          dark:bg-firstdark;

          svg {
            @apply fill-white
            dark:fill-secondark;
          }
        }
      }
    }

    &.scrolled {
      @apply fixed
      top-0
      py-2
      bg-white/80
      dark:bg-secondark/80
      backdrop-blur-sm;

      .global-nav {
        @apply py-3;

        svg {
          @apply dark:fill-firstdark;
        }
      }
    }
  }
</style>
