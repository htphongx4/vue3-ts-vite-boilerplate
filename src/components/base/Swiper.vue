<template>
  <div class="thumb-example">
    <swiper
      :modules="modules"
      :pagination="{ clickable: true }"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
    >
      <swiper-slide v-for="image in images" :key="image">
        <img :src="image" :alt="image" class="tw-w-full" />
      </swiper-slide>
    </swiper>
    <swiper
      class="thumbs-swiper"
      :modules="modules"
      :space-between="10"
      :slides-per-view="4"
      :watch-slides-progress="true"
      :prevent-clicks="false"
      :prevent-clicks-propagation="false"
      @swiper="setThumbsSwiper"
    >
      <swiper-slide class="slide" v-for="(image, index) in images" :key="image">
        <img :src="image" :alt="image" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import SwiperClass, { Pagination, Navigation, Thumbs } from "Swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
interface IProps {
  images: string[];
}
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const modules = [Pagination, Navigation, Thumbs];
const thumbsSwiper = ref<SwiperClass>();
const setThumbsSwiper = (swiper: SwiperClass) => {
  thumbsSwiper.value = swiper;
};
const { images } = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.thumb-example {
  background: black;
}

.top-swiper,
.thumbs-swiper {
  .slide {
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.top-swiper {
  height: 80%;
  width: 100%;
}

.thumbs-swiper {
  height: 20%;
  box-sizing: border-box;
  padding: gap 0;
  margin: 10px;

  .slide {
    width: 25%;
    height: 100%;
    opacity: 1;
    cursor: pointer;
    &:not(.swiper-slide-thumb-active) {
      opacity: 0.4;
    }
  }
}
</style>
