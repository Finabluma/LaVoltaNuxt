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
  <div class="carrusel">
    <h2 class="title_tracked">{{ title }}</h2>
    <div class="carrusel-wrapper">
      <div class="wrapper">
        <Swiper
          :height="300"
          :auto-height="false"
          :modules="[SwiperAutoplay, SwiperFreeMode, SwiperPagination]"
          :slides-per-view="1"
          :space-between="10"
          :speed="1000"
          :free-mode="false"
          :pagination="{ clickable: true }"
          :loop="true"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
          }"
        >
          <SwiperSlide v-for="image in images" :key="image.id" class="image">
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
  .carrusel {
    @apply relative
    z-20
    w-screen
    mx-auto
    md:py-10
    bg-white
    dark:bg-[#4A647D];

    h2{
      @apply text-base
    }

    .carrusel-wrapper {
      @apply mx-auto
      w-11/12
      sm:w-10/12
      md:w-11/12;
      .image {
        @apply relative
        overflow-hidden;
      }
    }
  }
</style>
