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
      <h3 class="font-bold text-fluid-hero/none capitalize flex items-center">
        <slot></slot>
      </h3>
    </template>
    <template #default>
      <div v-if="items.tipo.producto !== null" class="py-3">
        <div v-for="item in items.tipo.producto" :key="item.id" class="mb-2 px-2">
          <div class="flex px-0 text-fluid-body-lg">
            <div v-if="item.title === undefined" class="font-bold flex pr-5">
              {{ item.title }}
              <span v-if="item.solidario !== false" class="ml-5 flex items-center        dark:bg-transparent">
                <NuxtIcon name="Star" size="32" />
              </span>
            </div>
            <div v-else class="font-bold flex pr-5">
              {{ item.title }}
            </div>
            <div class="ml-auto">
              <div v-if="item.precio === null">
                <span v-if="item.precio"> {{ formatPrice(item.precio) }}€</span>
                <span v-else>s/peso</span>
              </div>
              <div v-else>
                <span> {{ formatPrice(item.precio) }}€</span>
              </div>
            </div>
          </div>
          <div v-if="item.do || item.variedades" class="text-fluid-base w-full flex flex-col">
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
        <p class="text-fluid-body-lg">Por el momento no disponemos este producto.</p>
      </div>
    </template>
  </CartaAccordion>
</template>