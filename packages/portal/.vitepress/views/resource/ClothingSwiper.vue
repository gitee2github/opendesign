<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import IconArrowRight from '~icons/app/icon-chevron-right.svg';
import IconArrowLeft from '~icons/app/icon-chevron-left.svg';

SwiperCore.use([Navigation]);

const props = defineProps({
  data: {
    type: Object,
    default() {
      return {};
    },
  },
  active: {
    type: Number,
    default() {
      return 0;
    },
  },
});

const swiperRef = ref(null);
const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
};
const currentIndex = ref(props.active);

const emits = defineEmits(['swiper-click']);
const handerSwiperClick = (index: number) => {
  currentIndex.value = index;
  emits('swiper-click', index);
};

const formatImgUrl = (path: string) =>
  path.replace('/packages/', '/resources/');

watch(
  () => props.active,
  (val) => {
    currentIndex.value = val;
  }
);
</script>

<template>
  <div class="clothing-swiper">
    <swiper
      :slides-per-view="5"
      :slideToClickedSlide="true"
      :space-between="16"
      :navigation="{
        nextEl: '.clothing-button-next',
        prevEl: '.clothing-button-prev',
      }"
      ref="swiperRef"
      @swiper="onSwiper"
    >
      <SwiperSlide
        v-for="(subitem, index) in data"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="handerSwiperClick(index)"
      >
        <img :src="formatImgUrl(subitem.children[0].path)" />
      </SwiperSlide>
    </swiper>
    <div class="clothing-button-prev"><IconArrowLeft /></div>
    <div class="clothing-button-next"><IconArrowRight /></div>
  </div>
</template>

<style lang="scss" scoped>
.clothing-swiper {
  height: 84px;
  width: 484px;
  margin: 0;
  position: relative;
  .swiper-container {
    width: 100%;
  }
  .clothing-button-prev,
  .clothing-button-next {
    position: absolute;
    top: 26px;
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  .swiper-button-disabled {
    cursor: default;
    opacity: 0.5;
  }
  .clothing-button-prev {
    left: -40px;
  }
  .clothing-button-next {
    right: -40px;
  }
  .swiper-slide {
    background-color: var(--o-color-bg2);
    width: 82px;
    height: 82px;
    border: 1px solid var(--o-color-bg4);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-sizing: border-box;
    &.active {
      border-color: var(--o-color-brand1);
    }
  }
  img {
    max-height: 90%;
    object-fit: cover;
  }
}
</style>
