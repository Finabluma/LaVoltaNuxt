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
    <h2>{{ title }}</h2>
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
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
          }"
        >
          <SwiperSlide v-for="image in images" :key="image.id" class="gallery">
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
    py-8;

    h2 {
      @apply text-lg
      py-2
      absolute
      w-auto
      top-[12%]
      right-0
      left-10
      md:left-1/4
      z-30
      font-cameo
      text-slate-300
      dark:text-slate-600;
    }

    .carrusel-wrapper {
      @apply mx-auto
      /* sm:border */
      /* sm:border-slate-600/50
      sm:bg-slate-100/75
      sm:dark:bg-slate-300/75
      sm:dark:border-slate-800/80 */
      md:w-full
      md:py-1;

      /* .wrapper {
        @apply sm:p-1
        sm:bg-slate-600
        sm:dark:bg-slate-500;
      } */
      .gallery {
        @apply relative content-before;

        &:before {
          @apply w-full
          h-full
          absolute
          top-0
          left-0
          bg-gradient-to-b
          from-slate-600/20
          to-slate-600/40
          dark:from-slate-600/10
          dark:to-slate-600/50;
        }
      }
    }
  }
</style>
