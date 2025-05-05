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
              {{ item.title }}
              <span v-if="item.solidario !== false" class="solidario">
                <NuxtIcon name="Star" size="32" />
              </span>
            </div>
            <div v-else class="item">
              {{ item.title }}
            </div>
            <div class="precio">
              <div v-if="item.precio === null">
                <span v-if="item.precio"> {{ formatPrice(item.precio) }}€</span>
                <span v-else class="font-bold">s/peso</span>
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
      <div v-else class="py-3 text-primary font-coordinates font-bold">
        <i>Por el momento no disponemos este producto.</i>
      </div>
    </template>
  </CartaAccordion>
</template>
<style lang="postcss" scoped>
  h3 {
    @apply font-coordinates
    text-6xl/tight
    md:text-7xl
    tracking-wider
    align-middle
    lowercase
    flex
    items-center
    lg:px-2;
  }
  .items {
    @apply font-bold
    /* text-primary
    dark:text-[#A8B2BB] */
    mb-2 
    px-2 
    lg:px-3;
    .item-precio {
      @apply flex px-0;
      .item {
        @apply leading-normal
        w-full
        flex
        items-start
        justify-start
        pr-5;
        .solidario {
          @apply ml-5 
          flex 
          items-center 
          dark:bg-transparent;
        }
      }

      .precio {
        @apply ml-auto font-bold;
      }
    }
    .misc {
      @apply w-full 
      flex 
      flex-col;
      .do {
        @apply font-coordinates
        font-normal;

        abbr {
          @apply no-underline 
          mr-1;
        }
      }
      .variedad {
        @apply w-9/12
        flex 
        flex-wrap;

        div {
          @apply flex
          items-center
          content-after
          font-coordinates
          font-normal
          italic;

          &:after {
            @apply content-['']
            block
            mx-2
            h-1
            w-1
            rounded-full
            /* bg-primary
            dark:bg-[#A8B2BB]; */;
          }

          &:last-child:after {
            @apply hidden;
          }
        }
      }
    }
  }
</style>
