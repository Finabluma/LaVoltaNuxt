<script setup>
const props = defineProps({
  images: {
    type: Array,
  },
  title: {
    type: String,
  },
})
</script>
<template>
  <div class="bg-white dark:bg-secondark mb-10 max-w-5xl mx-auto px-[2vw]">
    <h2 class="block-title--after l-box l-box--no-border mb-0">
      {{ title }}
    </h2>
    <div class="l-box">
      <Swiper :height="300" :auto-height="false" :modules="[SwiperAutoplay, SwiperFreeMode, SwiperPagination]"
        :slides-per-view="2" :space-between="5" :speed="1000" :free-mode="false" :pagination="{ clickable: true }"
        :loop="true" :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }">
        <SwiperSlide v-for="image in images" :key="image.id" class="outline -outline-offset-2">
          <ElementsMediaImageItem :src="image.asset._ref" :alt="image.alt" height="300" sizes="xs:100vw" :modifiers="{
            crop: image.crop,
            hotspot: image.hotspot,
            q: 80,
          }" fit="cover" format="webp" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
