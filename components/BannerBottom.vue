<script setup>
const props = defineProps({
  optional: {
    type: Object,
  },
})
</script>
<template>
  <div class="optional">
    <div class="flex justify-center">
      <div v-if="optional.image" class="image">
        <ElementsMediaImageItem :src="optional.image.asset._ref" :alt="optional.image.alt" :modifiers="{
          crop: optional.image.crop,
          hotspot: optional.image.hotspot,
          q: 80,
          'max-w': '350',
          'max-h': '350',
        }" sizes="xs:150px md:150px lg:150px" height="150" fit="cover" format="webp" />
      </div>
      <div v-else class="noImg flex    justify-center items-center        overflow-hidden bg-white/30">
        <Corazon class="w-20" />
      </div>
    </div>
    <div class="text-center flex flex-col items-center lg:min-h-64 lg:px-8">
      <h2 class="mb-5 text-fluid-2xl/tight">{{ optional.title }}</h2>
      <div v-if="optional.banner || optional.subtitle" class="text-balance text-fluid-base">
        {{ optional.banner || optional.subtitle }}
      </div>
      <div v-if="optional.enlace">
        <div v-if="optional.enlace.slug !== null">
          <NuxtLink :to="`/revista/${optional.enlace.slug}`" :title="optional.enlace.title" aria-label="Enlace"
            class="custom-btn text-fluid-base">
            {{ optional.enlace.title }}
          </NuxtLink>
        </div>
        <div v-else>
          <OptionalLink :link="optional.enlace" />
        </div>
      </div>
    </div>
  </div>
</template>
