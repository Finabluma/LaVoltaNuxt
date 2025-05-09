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
          sizes="xs:100vw"
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
      <div class="enlace">
        <div v-if="optional.enlace" >
          <OptionalLink :link="optional.enlace" />
        </div>
        <div v-else>
          <ElementsTextLink
            link-type="internalLinkType"
            route="revista-slug"
            :slug="optional.slug"
          >
            Feliz Lectura
          </ElementsTextLink>
        </div>
      </div>
    </div>
  </div>
</template>
