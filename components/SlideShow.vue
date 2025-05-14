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
  <div class="bg-white dark:bg-secondark mb-10 l-center xl:px-[10vw]">
    <h2 class="title-block l-box px-7 l-box--no-border mb-0">
      {{ title }}
    </h2>
    <div>
      <div class="wrapper">
        <Swiper
          :height="300"
          :auto-height="false"
          :modules="[SwiperAutoplay, SwiperFreeMode, SwiperPagination]"
          :slides-per-view="2"
          :space-between="5"
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
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }"
        >
          <SwiperSlide v-for="image in images" :key="image.id" class="border">
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
