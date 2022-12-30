<script lang="ts" setup>
import homeBg3 from '@/assets/img/home/home-bg3.png';
import homeBg4 from '@/assets/img/home/home-bg4.png';
import homeBg5 from '@/assets/img/home/home-bg5.png';
import homeBg6 from '@/assets/img/home/home-bg6.png';
// 动态
const trendInfo = {
  title: '动态',
  content: [
    {
      name: '',
      link: 'https://mp.weixin.qq.com/s/zRtQR9hwpTuhY7ucI77gMw',
      status: 'on',
      detail: ['openEuler，我们又玩了点不一样的！'],
      img: homeBg3,
    },
    {
      name: '',
      link: 'https://mp.weixin.qq.com/s/J_QlaVBMjlrvWVM7HvRecA',
      status: 'on',
      detail: ['openEuler of our Own', '你有一份新年礼物，请查收～'],
      img: homeBg4,
    },
    {
      name: '',
      link: 'https://mp.weixin.qq.com/s/yT8asDVF4VaEKy8MbMkeCQ',
      status: 'on',
      detail: ['openEuler虎年表情包来袭～'],
      img: homeBg5,
    },
    {
      name: '',
      link: 'https://mp.weixin.qq.com/s/XI5ibm_TQtfdQ8tEquJjkg',
      status: 'on',
      detail: ['今年过节不扎堆，云端蹦迪牛来嗨！'],
      img: homeBg6,
    },
  ],
};
</script>

<template>
  <div class="home-trend">
    <h2 class="home-trend-title">{{ trendInfo.title }}</h2>
    <div class="home-trend-detail">
      <a
        v-for="item in trendInfo.content"
        :key="item.name"
        class="detail-item"
        :href="item.link"
        arget="_blank"
      >
        <img :src="item.img" />
        <div class="item-card">
          <p class="card-title">{{ item.name }}</p>
          <div class="card-body">
            <p v-for="detail in item.detail" :key="detail" :href="item.link">
              {{ detail }}
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:root.dark {
  .home-trend {
    img {
      filter: brightness(0.8) contrast(1.2);
    }
  }
}
.home-trend {
  .home-trend-title {
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

  .home-trend-detail {
    display: grid;
    margin-top: var(--o-spacing-h2);
    grid-template-columns: 400px 484px 484px;
    grid-template-rows: 156px 320px;
    column-gap: 24px;
    row-gap: 24px;

    @media screen and (max-width: 1440px) {
      margin-top: var(--o-spacing-h3);
    }

    @media screen and (max-width: 1280px) {
      margin-top: var(--o-spacing-h4);
      grid-template-columns: repeat(3, 1fr);
    }

    .detail-item {
      position: relative;
      overflow: hidden;
      background-color: var(--e-color-bg2);
      box-shadow: var(--o-shadow-l2);
      cursor: pointer;

      img {
        position: absolute;
        bottom: 0;
        right: 0;
        transition: transform 0.6s ease;
      }

      &:hover {
        box-shadow: var(--o-shadow-l2_hover);
        img {
          transform: scale(1.1);
        }
      }

      &:nth-child(1) {
        grid-row-start: 1;
        grid-row-end: 3;
        img {
          width: 283px;
          height: 348px;
        }
      }

      &:nth-child(2) {
        grid-column-start: 2;
        grid-column-end: 4;
      }

      &:nth-child(4) {
        img {
          left: 50%;
          transform: translateX(-50%);
        }

        &:hover {
          img {
            transform: scale(1.2) translateX(-42%);
          }
        }
      }

      .item-card {
        position: relative;
        z-index: 1;
        padding: 40px;
        width: 100%;
        height: 100%;
        cursor: pointer;

        .card-title {
          position: relative;
          font-size: var(--e-font_size-h3);
          line-height: var(--e-line_height-h3);

          &::after {
            position: absolute;
            content: '';
            width: 40px;
            height: 6px;
            background-color: var(--e-color-primary1);
            top: 0;
            left: 0;
          }

          @media screen and (max-width: 1440px) {
            font-size: var(--e-font_size-h4);
            line-height: var(--e-line_height-h4);
          }

          @media screen and (max-width: 1280px) {
            font-size: var(--e-font_size-text);
            line-height: var(--e-line_height-text);
          }
        }

        .card-body {
          margin-top: 22px;
          display: inline-block;
          color: var(--e-color-text1);
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
        }
      }
    }
  }
}
</style>
