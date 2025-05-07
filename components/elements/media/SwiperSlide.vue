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
  <div class="my-5 lg:my-10">
    <p class="text-center text-sm">{{ title }}</p>
    <div class="carrusel-wrapper">
      <div class="wrapper">
        <Swiper
          :height="450"
          :auto-height="false"
          :modules="[SwiperAutoplay, SwiperFreeMode, SwiperPagination]"
          :slides-per-view="1"
          :space-between="0"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :speed="1000"
          :free-mode="true"
          :pagination="{ clickable: true }"
          :loop="true"
          :breakpoints="{
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
          }"
        >
          <SwiperSlide
            v-for="image in gallery.images"
            :key="image.id"
            class="gallery"
          >
            <ElementsMediaImageItem
              :src="image.asset._ref"
              :alt="image.alt"
              height="300"
              sizes="xs:100vw"
              :modifiers="{
                crop: image.crop,
                hotspot: image.hotspot,
                q: 80,
              }"
              fit="cover"
              format="webp"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
  .carrusel-wrapper {
    .wrapper {
      @apply p-1
      border
      mb-clus2lev;
    }
  }
  .gallery {
    @apply relative content-before mx-auto;

    &:before {
      @apply w-full
        h-full
        absolute
        top-0
        left-0;
    }
  }
</style>
