<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vitepress';
import { useCommon } from '@/stores/common';

import bannerVideoLight from '@/assets/video/banner-light.mp4';
import bannerVideoDark from '@/assets/video/banner-dark.mp4';

import HomeResource from './HomeResource.vue';
import HomeService from './HomeService.vue';
import HomeQuickStart from './HomeQuickStart.vue';
import HomeTrend from './HomeTrend.vue';

const commonStore = useCommon();
const router = useRouter();

const isDark = computed(() => {
  return commonStore.theme === 'dark';
});

const bannerVideo = computed(() => {
  return isDark.value ? bannerVideoDark : bannerVideoLight;
});
</script>

<template>
  <div class="home">
    <div class="home-banner">
      <video
        class="home-video"
        muted
        autoplay
        loop
        playsinline
        :src="bannerVideo"
      ></video>
      <div class="wrap">
        <div class="home-slogan">
          <h1>OpenDesign SIG</h1>
          <h1>打造服务开源社区的开源体验系统</h1>
        </div>
      </div>
    </div>
    <div class="home-content">
      <!-- 资源下载入口 -->
      <HomeResource class="content-area" />

      <!-- 动态入口 -->
      <HomeTrend class="content-area" />

      <!-- 服务入口 -->
      <HomeService class="content-area" />

      <!-- 快速入口 -->
      <HomeQuickStart class="content-area" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  color: var(--e-color-text1);

  h1 {
    font-size: var(--e-font_size-display1);
    line-height: var(--e-line_height-display1);
    & + h1 {
      margin-top: 24px;
    }

    @media screen and (max-width: 1440px) {
      font-size: var(--e-font_size-display2);
      line-height: var(--e-line_height-display2);
    }

    @media screen and (max-width: 1280px) {
      font-size: var(--e-font_size-display3);
      line-height: var(--e-line_height-display3);
    }
  }

  .home-banner {
    position: relative;
    height: calc(100vh - 80px);

    .home-video {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      object-fit: contain;
      pointer-events: none;
    }

    .wrap {
      position: relative;
      max-width: 1504px;
      margin: 0 auto;
      height: 100%;
      padding-top: 36vh;
      padding-right: 44px;
      padding-bottom: 0;
      padding-left: 44px;
      z-index: 1;
    }
  }

  .home-content {
    max-width: 1504px;
    margin: 0 auto;
    padding: 0 44px 96px 44px;

    .content-area {
      & + .content-area {
        margin-top: 96px;
      }
    }
  }
}
</style>
