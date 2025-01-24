<script setup>
  const props = defineProps({
    page: {
      type: Object,
    },
  })
</script>
<template>
  <div v-if="page.optionalContent !== null" class="banner">
    <div class="banner_wrapper">
      <div v-if="page.optionalContent.bannerBody.image" class="image">
        <ElementsMediaImageItem
          :src="page.optionalContent.bannerBody.image.asset._ref"
          :alt="page.optionalContent.bannerBody.image.alt"
          height="150"
          sizes="xs:150px"
          :modifiers="{
            crop: page.optionalContent.bannerBody.image.crop,
            hotspot: page.optionalContent.bannerBody.image.hotspot,
            q: 80,
          }"
          fit="cover"
          format="webp"
        />
      </div>
      <div class="banner_content">
        <h2>{{ page.optionalContent.bannerBody.title }}</h2>
        <div
          v-if="page.optionalContent.bannerBody.banner"
          class="inner-content"
        >
          {{ page.optionalContent.bannerBody.banner }}
        </div>
        <div v-if="page.optionalContent.bannerBody.enlace" class="enlace">
          <div v-if="page.optionalContent.bannerBody.enlace.linkTarget.slug">
            <NuxtLink
              :to="`revista/${page.optionalContent.bannerBody.enlace.linkTarget.slug}`"
              :title="page.optionalContent.bannerBody.enlace.linkTarget.title"
              >{{
                page.optionalContent.bannerBody.enlace.title !== null
                  ? page.optionalContent.bannerBody.enlace.title
                  : page.optionalContent.bannerBody.enlace.linkTarget.title
              }}</NuxtLink
            >
          </div>
          <div v-else>
            <OptionalLink :link="page.optionalContent.bannerBody.enlace" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
