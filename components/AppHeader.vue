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

  const route = useRoute()
  const isWhite = computed(() => {
    return (
      route.name === 'reservas' ||
      route.name === 'el-menu' ||
      route.name === 'index' ||
      route.name === 'la-carta' ||
      route.name === 'revista'
    )
  })

  onMounted(() => {
    ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top top',
        end: 10000,
        toggleClass: {
          targets: '.globalHeader',
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
  <header class="globalHeader" ref="header" :class="{ white: isWhite }">
    <span role="status" aria-live="polite"></span>
    <div class="globalNav" role="navigation">
      <div class="globalLogo">
        <NuxtLink
          exact
          to="/"
          aria-label="logo"
          labelledby="logo"
          title="Bienvenidos a la Volta"
        >
          <SVGAppLogo />
        </NuxtLink>
      </div>
      <div class="misc">
        <div v-if="phone">
          <ElementsTextLink
            :to="phone?.phone"
            class="linkNav"
            :title="phone?.phone"
            ><NuxtIcon name="MaterialSymbolsPhoneEnabled" size="36" /><span
              class="sr-only"
              >{{ phone.phone }}</span
            ></ElementsTextLink
          >
        </div>
        <div v-if="linkCarta" class="linktocarta">
          <ElementsTextLink
            link-type="internalLinkType"
            route="la-carta"
            :title="linkCarta?.title"
            class="linkNav rounded p-1 bg-neutral"
          >
            <MaterialSymbolsRestaurantRounded class="w-7" />
            <span class="sr-only">{{
              linkCarta?.title
            }}</span></ElementsTextLink
          >
        </div>
        <button @click="drawerOn()" class="btn btn-ghost btn-circle">
          <NuxtIcon name="HeroiconsBars3BottomRight16Solid" size="36" />
        </button>
      </div>
    </div>
  </header>

  <AppDrawer ref="draw" />
</template>
<style lang="postcss" scoped>
  .globalHeader {
    @apply absolute w-screen top-12 z-50
    sm:top-8;
    .globalNav {
      @apply max-w-screen-lg
      mx-auto
      flex
      items-center
      py-2
      px-[5%];
      .globalLogo {
        @apply max-w-9 w-full;
      }

      .misc {
        @apply flex items-center ml-auto;

        .linktocarta .linkNav {
          @apply bg-slate-600;
          svg {
            @apply fill-slate-300;
          }
        }
      }

      .globalLogo a #favicon,
      .misc .linkNav svg,
      .misc .btn-ghost svg {
        @apply fill-slate-600
        dark:fill-slate-300;
      }
    }

    &.scrolled {
      @apply fixed
      top-0  
      backdrop-blur-sm
      /* bg-slate-50/70
      dark:bg-slate-600/70 */;

      .misc .linktocarta .linkNav svg {
        @apply fill-slate-300;
      }
    }

    &:not(.scrolled).white {
      .globalLogo a #favicon,
      .misc .linkNav svg,
      .misc .btn-ghost svg {
        @apply fill-slate-300;
      }
      .misc .linktocarta .linkNav svg {
        @apply fill-slate-300;
      }
    }
  }
</style>
