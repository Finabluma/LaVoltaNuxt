<script setup>
  const props = defineProps({
    items: {
      type: Object,
    },
  })
  function formatPrice(num) {
    return parseFloat(num).toFixed(2)
  }
</script>
<template>
  <CartaAccordion>
    <template #header
      ><h3><slot></slot></h3
    ></template>
    <template #default>
      <div v-if="items.tipo.producto !== null" class="py-3">
        <div v-for="item in items.tipo.producto" :key="item.slug" class="items">
          <div class="item-precio">
            <div v-if="item.title === undefined" class="item">
              {{ item.item.title }}
              <span v-if="item.solidario !== false" class="solidario">
                <NuxtIcon name="MaterialSymbolsStars" size="32" />
              </span>
            </div>
            <div v-else class="item">
              {{ item.title }}
            </div>
            <div class="precio">
              <div v-if="item.precio === undefined">
                <span v-if="item.item.precio">
                  {{ formatPrice(item.item.precio) }}€</span
                >
                <span v-else><i>s/peso</i></span>
              </div>
              <div v-else>
                <span> {{ formatPrice(item.precio) }}€</span>
              </div>
            </div>
          </div>
          <div v-if="item.do || item.variedades" class="misc">
            <div class="do">
              <abbr title="Denominación de Origen">D.O.</abbr>{{ item.do.do }}
            </div>
            <div class="variedad">
              <div v-for="variedad in item.variedad" :key="variedad.id">
                {{ variedad.variedad }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="py-3 text-base-content">
        <i>Por el momento no disponemos este producto.</i>
      </div>
    </template>
  </CartaAccordion>
</template>
<style lang="postcss" scoped>
  h3 {
    @apply font-mono
    text-6xl/tight
    md:text-7xl
    tracking-widest
    align-middle
    lowercase
    flex
    items-center
    lg:px-2;
  }
  .items {
    @apply mb-2 px-2 lg:px-3;
    .item-precio {
      @apply flex px-0;
      .item {
        @apply font-sans
        leading-normal
        w-full
        flex
        items-start
        justify-start
        pr-5;
        .solidario {
          @apply ml-5 flex items-center dark:bg-transparent;
        }
      }

      .precio {
        @apply ml-auto font-sans;
      }
    }
    .misc {
      @apply w-full flex flex-col;
      .do {
        @apply font-typewriter;

        abbr {
          @apply no-underline mr-1;
        }
      }
      .variedad {
        @apply flex flex-wrap w-9/12;
        div {
          @apply flex
          items-center
          content-after
          font-typewriter
          italic;

          &:after {
            @apply block
            mx-2
            h-1
            w-1
            rounded-full;
          }

          &:last-child:after {
            @apply hidden;
          }
        }
      }
    }
  }
</style>
