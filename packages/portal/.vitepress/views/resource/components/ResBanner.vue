<script lang="ts" setup>
import { ref } from 'vue';
const props = defineProps({
  option: {
    type: Object,
    default: 0,
  },
});
</script>

<template>
  <div class="res-banner">
    <div class="inner">
      <div class="info">
        <h2 class="title">{{ option.title }}</h2>
        <p class="desc">{{ option.text }}</p>
      </div>
      <div class="cover">
        <img :src="option.cover" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.res-banner {
  width: 100%;
  margin-bottom: var(--o-spacing-h1);
  background: var(--o-color-bg2);
  @media screen and (max-width: 1279px) {
    // margin-top: 48px;
    margin-bottom: var(--o-spacing-h2);
  }
  .inner {
    max-width: 1504px;
    padding: 0 44px;
    margin: 0 auto;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info {
      padding-right: 76px;
    }
    .title {
      font-size: var(--e-font_size-display2);
      font-weight: 500;
      color: var(--o-color-text1);
      line-height: var(--e-line_height-display2);
      margin-bottom: var(--o-spacing-h8);
      @media screen and (max-width: 1439px) {
        font-size: var(--e-font_size-display3);
        line-height: var(--e-line_height-display3);
      }

      @media screen and (max-width: 1279px) {
        font-size: var(--e-font_size-display4);
        line-height: var(--e-line_height-display4);
      }
    }
    .desc {
      font-size: var(--e-font_size-h2);
      color: var(--o-color-text1);
      line-height: var(--e-line_height-h2);
      @media screen and (max-width: 1439px) {
        font-size: var(--e-font_size-h4);
        line-height: var(--e-line_height-h4);
      }
    }
    .cover {
      max-width: 542px;
      display: flex;
      height: 100%;
      align-items: flex-end;
      transition: all 0.3s;
      img {
        height: 338px;
        object-fit: cover;
        @media screen and (max-width: 1439px) {
          height: 300px;
        }
        @media screen and (max-width: 1279px) {
          height: 250px;
        }
      }
    }
  }
}
</style>
