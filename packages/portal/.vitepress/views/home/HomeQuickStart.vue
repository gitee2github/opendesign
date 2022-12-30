<script lang="ts" setup>
import { useRouter } from 'vitepress';

import homeBg7 from '@/assets/img/home/home-bg7.png';
import homeBg8 from '@/assets/img/home/home-bg8.png';

const router = useRouter();

// 快速开始
const quickstartInfo = {
  title: '即刻开启您的体验旅程',
  content: [
    {
      name: '我是设计师',
      link: '',
      status: 'on',
      detail: ['使用 OpenDesign 资源库享受您的设计'],
      img: homeBg7,
      click: (): void => {
        router.go('/design/layout/');
      },
    },

    {
      name: '我是程序员',
      link: '',
      status: 'off',
      detail: ['使用 OpenDesign 组件库开始更高效的开发'],
      img: homeBg8,
      click: (): void => {
        window.open(
          'https://gitee.com/openeuler/opendesign-components/tree/dev/',
          '_blank'
        );
      },
    },
  ],
};
</script>

<template>
  <div class="home-quickstart">
    <h2 class="home-quickstart-title">
      {{ quickstartInfo.title }}
    </h2>
    <div class="home-quickstart-detail">
      <div
        v-for="item in quickstartInfo.content"
        :key="item.name"
        class="detail-item"
      >
        <img :src="item.img" />
        <div class="item-card" @click="item?.click()">
          <p class="card-title">{{ item.name }}</p>
          <div class="card-body">
            <p v-for="detail in item.detail" :key="detail" class="card-detail">
              {{ detail }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:root.dark {
  .home-quickstart {
    img {
      filter: brightness(0.8) contrast(1.2);
    }
  }
}

.home-quickstart {
  .home-quickstart-title {
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

  .home-quickstart-detail {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: var(--e-gap-5);
    margin-top: var(--o-spacing-h2);

    @media screen and (max-width: 1440px) {
      margin-top: var(--o-spacing-h3);
    }

    @media screen and (max-width: 1280px) {
      margin-top: var(--o-spacing-h4);
    }

    .detail-item {
      position: relative;
      overflow: hidden;
      background-color: var(--e-color-bg2);
      box-shadow: var(--o-shadow-l2);

      img {
        position: absolute;
        bottom: 0;
        right: 0;
        object-fit: contain;
        transition: transform 0.6s ease;
        pointer-events: none;
      }

      &:hover {
        box-shadow: var(--o-shadow-l2_hover);
        img {
          transform: scale(1.1);
        }
      }
      .item-card {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        padding: 80px;
        min-height: 560px;
        cursor: pointer;

        @media screen and (max-width: 1440px) {
          padding: 60px;
        }

        @media screen and (max-width: 1280px) {
          padding: 40px;
        }

        .card-title {
          position: relative;
          font-size: var(--e-font_size-display4);
          line-height: var(--e-line_height-display4);
          font-weight: 500;

          @media screen and (max-width: 1440px) {
            font-size: var(--e-font_size-h1);
            line-height: var(--e-line_height-h1);
          }

          @media screen and (max-width: 1280px) {
            font-size: var(--e-font_size-h2);
            line-height: var(--e-line_height-h2);
          }

          &::after {
            position: absolute;
            content: '';
            width: 80px;
            height: 10px;
            background-color: var(--e-color-primary1);
            bottom: -26px;
            left: 0;
          }
        }

        .card-body {
          margin-top: 66px;
          .card-detail {
            font-size: var(--e-font_size-h3);
            line-height: var(--e-line_height-h3);

            @media screen and (max-width: 1440px) {
              font-size: var(--e-font_size-h4);
              line-height: var(--e-line_height-h4);
            }

            @media screen and (max-width: 1280px) {
              font-size: var(--e-font_size-h5);
              line-height: var(--e-line_height-h5);
            }

            & + .card-detail {
              margin-top: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
