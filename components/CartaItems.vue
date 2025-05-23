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
    <template #header>
      <h3 class="font-coordinates font-semibold text-5xl/tight capitalize flex items-center md:text-6xl lg:text-7xl">
        <slot></slot>
      </h3>
    </template>
    <template #default>
      <div v-if="items.tipo.producto !== null" class="py-3">
        <div v-for="item in items.tipo.producto" :key="item.slug" class="font-bold mb-2 px-2 md:text-lg">
          <div class="item-precio flex px-0">
            <div v-if="item.title === undefined" class="flex pr-5">
              {{ item.title }}
              <span v-if="item.solidario !== false" class="ml-5 flex items-center        dark:bg-transparent">
                <NuxtIcon name="Star" size="32" />
              </span>
            </div>
            <div v-else class="flex pr-5">
              {{ item.title }}
            </div>
            <div class="ml-auto font-bold">
              <div v-if="item.precio === null">
                <span v-if="item.precio"> {{ formatPrice(item.precio) }}€</span>
                <span v-else class="font-bold">s/peso</span>
              </div>
              <div v-else>
                <span> {{ formatPrice(item.precio) }}€</span>
              </div>
            </div>
          </div>
          <div v-if="item.do || item.variedades" class="misc w-full flex flex-col">
            <div class="font-coordinates font-normal">
              <abbr title="Denominación de Origen" class="no-underline mr-1">D.O.</abbr>{{ item.do.do }}
            </div>
            <div class="variedad w-9/12 flex flex-wrap">
              <div v-for="variedad in item.variedad" :key="variedad.id"
                class="flex items-center font-coordinates font-normal italic after:mx-1 after:h-1 after:w-1 after:rounded-full after:bg-current after:block last:after:content-none">
                {{ variedad.variedad }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="p-3 font-coordinates">
        <p>Por el momento no disponemos este producto.</p>
      </div>
    </template>
  </CartaAccordion>
</template>