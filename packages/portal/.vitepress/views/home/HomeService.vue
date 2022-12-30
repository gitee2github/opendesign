<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { useCommon } from '@/stores/common';

import eulerLogo_light from '@/assets/img/home/logo-euler_light.png';
import eulerLogo_dark from '@/assets/img/home/logo-euler_dark.png';
import moocstudioLogo_light from '@/assets/img/home/logo-moocstudio_light.png';
import moocstudioLogo_dark from '@/assets/img/home/logo-moocstudio_dark.png';
import quickIssueLogo_light from '@/assets/img/home/logo-quickissue_light.png';
import quickIssueLogo_dark from '@/assets/img/home/logo-quickissue_dark.png';
import datastatLogo_light from '@/assets/img/home/logo-datastat_light.png';
import datastatLogo_dark from '@/assets/img/home/logo-datastat_dark.png';

const isDark = computed(() => {
  return commonStore.theme === 'dark';
});

const eulerLogo = computed(() => {
  return isDark.value ? eulerLogo_dark : eulerLogo_light;
});

const moocStudioLogo = computed(() => {
  return isDark.value ? moocstudioLogo_dark : moocstudioLogo_light;
});

const quickIssueLogo = computed(() => {
  return isDark.value ? quickIssueLogo_dark : quickIssueLogo_light;
});

const datastatLogo = computed(() => {
  return isDark.value ? datastatLogo_dark : datastatLogo_light;
});

const commonStore = useCommon();
// 服务
const serviceInfo = reactive({
  title: '服务',
  description: '',
  content: [
    {
      name: 'openEuler',
      img: eulerLogo,
      link: 'https://www.openeuler.org/',
    },
    {
      name: 'MoocStudio',
      img: moocStudioLogo,
      link: 'https://moocstudio.openeuler.org/',
    },
    {
      name: 'QuickIssue',
      img: quickIssueLogo,
      link: 'https://quickissue.openeuler.org/',
    },
    {
      name: 'Datastat',
      img: datastatLogo,
      link: 'https://datastat.openeuler.org/',
    },
  ],
});
</script>

<template>
  <div class="home-service">
    <p v-if="serviceInfo.title" class="home-service-title">
      {{ serviceInfo.title }}
    </p>
    <div class="home-service-detail">
      <a
        v-for="item in serviceInfo.content"
        :key="item.name"
        class="detail-item"
        :href="item.link"
        target="_blank"
      >
        <img :src="item.img" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:root.dark {
  .home-service {
    img {
      filter: brightness(0.8) contrast(1.2);
    }
  }
}
.home-service {
  .home-service-title {
    font-size: var(--e-font_size-display2);
    line-height: var(--e-line_height-display2);
    font-weight: 500;
    @media screen and (max-width: 1440px) {
      font-size: var(--e-font_size-display3);
      line-height: var(--e-line_height-display3);
    }

    @media screen and (max-width: 1280px) {
      font-size: var(--e-font_size-display4);
      line-height: var(--e-line_height-display4);
    }
  }

  .home-service-detail {
    display: grid;
    margin-top: var(--o-spacing-h2);
    grid-template-columns: repeat(4, 1fr);
    column-gap: 24px;
    row-gap: 24px;

    @media screen and (max-width: 1439px) {
      margin-top: var(--o-spacing-h3);
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 1279px) {
      margin-top: var(--o-spacing-h4);
      grid-template-columns: repeat(2, 1fr);
    }

    .detail-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--e-color-bg2);
      box-shadow: var(--o-shadow-l1);
      padding: 24px;
      img {
        width: 100%;
        height: 100%;

        max-height: 92px;
        max-width: 288px;
      }
    }
  }
}
</style>
