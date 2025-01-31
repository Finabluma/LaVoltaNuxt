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
        <MdiHeart />
      </div>
    </div>

    <div class="content">
      <h2>{{ optional.title }}</h2>
      <div v-if="optional.banner" class="inner-content">
        {{ optional.banner }}
      </div>
      <div v-if="optional.enlace" class="enlace">
        <div v-if="optional.enlace.linkTarget.slug">
          <NuxtLink
            :to="`revista/${optional.enlace.linkTarget.slug}`"
            :title="optional.enlace.linkTarget.title"
            >{{
              optional.enlace.title !== null
                ? optional.enlace.title
                : optional.enlace.linkTarget.title
            }}</NuxtLink
          >
        </div>
        <div v-else>
          <OptionalLink :link="optional.enlace" />
        </div>
      </div>
    </div>
  </div>
</template>
