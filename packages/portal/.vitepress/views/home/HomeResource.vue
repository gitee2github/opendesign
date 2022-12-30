<script lang="ts" setup>
import homeBg1 from '@/assets/img/home/home-bg1.png';
import homeBg2 from '@/assets/img/home/home-bg2.png';

// 资源下载
const resourceInfo = {
  title: 'Community Goes Better with OpenDesign',
  content: [
    {
      name: '设计资源',
      detail: [
        {
          text: '官方图标库',
          link: 'https://gitee.com/openeuler/opendesign-resources/tree/master/packages/icon',
        },
        {
          text: '官方插画库',
          link: 'https://gitee.com/openeuler/opendesign-resources/tree/master/packages/illustration',
        },
      ],
      img: homeBg1,
    },
    {
      name: '开发资源',
      detail: [
        {
          text: 'Gitee代码仓库',
          link: 'https://gitee.com/openeuler/community/tree/master/sig/sig-OpenDesign',
        },
        {
          text: '页面模板',
          link: '/templates/zh/news/',
        },
      ],
      img: homeBg2,
    },
  ],
};
</script>

<template>
  <div class="home-resource">
    <h2 class="home-resource-title">
      {{ resourceInfo.title }}
    </h2>
    <div class="home-resource-detail">
      <div
        v-for="item in resourceInfo.content"
        :key="item.name"
        class="detail-item"
      >
        <img :src="item.img" />
        <div class="item-card">
          <p class="card-title">{{ item.name }}</p>
          <div class="card-body">
            <a
              v-for="detail in item.detail"
              :key="detail.text"
              class="card-detail"
              :href="detail.link"
              target="_blank"
            >
              {{ detail.text }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:root.dark {
  .home-resource {
    img {
      filter: brightness(0.8) contrast(1.2);
    }
  }
}

.home-resource {
  .home-resource-title {
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

  .home-resource-detail {
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
        transform: scale(1);
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
        min-height: 500px;
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

          .card-detail {
            display: block;
            color: var(--e-color-text1);
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
