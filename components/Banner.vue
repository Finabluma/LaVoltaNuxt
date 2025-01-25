<script setup>
  const props = defineProps({
    anuncio: {
      type: Object,
    },
  })
</script>
<template>
  <div class="anuncio">
    <div v-if="anuncio.image" class="image">
      <ElementsMediaImageItem
        :src="anuncio.image.asset._ref"
        :alt="anuncio.image.alt"
        height="150"
        sizes="xs:150px"
        :modifiers="{
          crop: anuncio.image.crop,
          hotspot: anuncio.image.hotspot,
          q: 80,
        }"
        fit="cover"
        format="webp"
      />
    </div>
    <div class="banner_content">
      <h2>{{ anuncio.title }}</h2>
      <div v-if="anuncio.banner" class="inner-content">
        {{ anuncio.banner }}
      </div>
      <div v-if="anuncio.enlace" class="enlace">
        <div v-if="anuncio.enlace.linkTarget.slug">
          <NuxtLink
            :to="`revista/${anuncio.enlace.linkTarget.slug}`"
            :title="anuncio.enlace.linkTarget.title"
            >{{
              anuncio.enlace.title !== null
                ? anuncio.enlace.title
                : anuncio.enlace.linkTarget.title
            }}</NuxtLink
          >
        </div>
        <div v-else>
          <OptionalLink :link="anuncio.enlace" />
        </div>
      </div>
    </div>
  </div>
</template>
