<script setup>
const props = defineProps({
  gallery: {
    type: Object,
  },
  title: {
    type: String,
  },
})
</script>
<template>
  <div class="carrusel my-5">
    <div class="outline-2 outline-offset-2">
      <Swiper :height="450" :auto-height="false" :modules="[SwiperAutoplay, SwiperFreeMode, SwiperPagination]"
        :slides-per-view="1" :space-between="0" :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }" :speed="1000" :free-mode="true" :pagination="{ clickable: true }" :loop="true" :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }">
        <SwiperSlide v-for="image in gallery.images" :key="image.id">
          <ElementsMediaImageItem :src="image.asset._ref" :alt="image.alt" height="300" sizes="xs:100vw" :modifiers="{
            crop: image.crop,
            hotspot: image.hotspot,
            q: 80,
          }" fit="cover" format="webp" />
        </SwiperSlide>
      </Swiper>
    </div>
    <p class="text-center mt-3">{{ title }}</p>
  </div>
</template>
