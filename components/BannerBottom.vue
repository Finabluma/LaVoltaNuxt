<script setup>
  const props = defineProps({
    optional: {
      type: Object,
    },
  })
</script>
<template>
  <div class="optional">
    <div class="media">
      <div v-if="optional.image" class="image">
        <ElementsMediaImageItem
          :src="optional.image.asset._ref"
          :alt="optional.image.alt"
          :modifiers="{
            crop: optional.image.crop,
            hotspot: optional.image.hotspot,
            q: 80,
            'max-w': '350',
            'max-h': '350',
          }"
          sizes="xs:150px"
          height="150"
          fit="cover"
          format="webp"
        />
      </div>
      <div v-else class="noImg">
        <Corazon class="w-20" />
      </div>
    </div>
    <div class="content">
      <h2 class="mb-clus3lev">{{ optional.title }}</h2>
      <div v-if="optional.banner || optional.subtitle" class="inner">
        {{ optional.banner || optional.subtitle }}
      </div>
      <div v-if="optional.enlace" class="enlace">
        <div v-if="optional.enlace.slug !== null">
          <NuxtLink
            :to="`/revista/${optional.enlace.slug}`"
            :title="optional.enlace.title"
          >
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
