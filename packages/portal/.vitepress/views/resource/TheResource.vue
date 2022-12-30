<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { getPackages } from '@/api';
import ResBanner from './components/ResBanner.vue';
import { formatPeripheralData } from './components/utils';

import bannerCover from '@/assets/img/resource/banner.png';
import iconCover from '@/assets/img/resource/icon-cover.png';
import illustrationCover from '@/assets/img/resource/illustration-cover.png';
import videoCover from '@/assets/img/resource/video-cover.png';
import otherCover from '@/assets/img/resource/other-cover.png';
import gameCover from '@/assets/img/resource/game-cover.png';

const bannerInfo = {
  title: '开源设计资源共享',
  text: '提供开源中一系列的设计资源，以保障设计质量的一致性，让设计师与开发者更聚焦于业务逻辑、用户体验和商业价值的创造',
  cover: bannerCover,
};

// 获取数据
const baseIcon = '/packages/icon/base/';
const businessIcon = '/packages/icon/business/';
const getBaseIcon = ref<any>([]);
const getBusinessIcon = ref<any>([]);
const illustration = '/packages/illustration/light/png/';
const illustrationData = ref<any>([]);

const paramsMerch = '/packages/merch/other/png/';
const paramsMerchTShirt = '/packages/merch/clothing/tShirt/png/';
const paramsMerchHoodie = '/packages/merch/clothing/hoodie/png/';
const getPeripheral = ref<any>([]);
const getPeripheralTShirt = ref<any>([]);
const getPeripheralHoodie = ref<any>([]);

function getList() {
  Promise.all([
    getPackages(baseIcon),
    getPackages(businessIcon),
    getPackages(illustration),
    getPackages(paramsMerch),
    getPackages(paramsMerchTShirt),
    getPackages(paramsMerchHoodie),
  ])
    .then((res) => {
      formatPeripheralData(res[0], 'svg">', getBaseIcon.value, baseIcon);
      formatPeripheralData(
        res[1],
        'svg">',
        getBusinessIcon.value,
        businessIcon
      );
      formatPeripheralData(
        res[2],
        'png">',
        illustrationData.value,
        illustration
      );
      // 周边
      formatPeripheralData(res[3], 'png">', getPeripheral.value, paramsMerch);
      formatPeripheralData(
        res[4],
        'png">',
        getPeripheralTShirt.value,
        paramsMerchTShirt
      );
      formatPeripheralData(
        res[5],
        'png">',
        getPeripheralHoodie.value,
        paramsMerchHoodie
      );
    })
    .catch((error) => {
      console.error('授权获信息失败', error);
    });
}

// 计算图标数量
const Iconlength = computed(() => {
  return getBaseIcon.value.length + getBusinessIcon.value.length;
});

// 计算周边数量
const Peripherallength = computed(() => {
  return (
    getPeripheral.value.length +
    getPeripheralTShirt.value.length +
    getPeripheralHoodie.value.length
  );
});

onMounted(() => {
  getList();
});

const resourceList = computed(() => {
  return [
    {
      name: '图标',
      desc: '共享开源社区全量图标，提升简洁美化的设计',
      total: '图标 / ' + Iconlength.value,
      cover: iconCover,
      path: '/resource/icon/',
    },
    {
      name: '插画',
      desc: '多元化具象插画，多方位表达形象含义',
      total: '插画 / ' + illustrationData.value.length,
      cover: illustrationCover,
      path: '/resource/illustration/',
    },
    {
      name: '视频',
      desc: '精美视频的聚集地，创造全新传播体验',
      total: '视频 / 3',
      cover: videoCover,
      path: '/resource/video/',
    },
    {
      name: '周边',
      desc: '集潮流和设计于一身的产品，给你来一次线上遨游',
      total: '周边 / ' + Peripherallength.value,
      cover: otherCover,
      path: '/resource/peripheral/',
    },
    {
      name: 'GAME',
      desc: '随时随地畅游的小游戏，开启趣味性体验',
      total: '',
      cover: gameCover,
      path: '/resource/game/',
    },
  ];
});
</script>

<template>
  <div class="resource-home">
    <ResBanner class="res-banner" :option="bannerInfo"></ResBanner>
    <div class="wrapper">
      <div class="resource-panel">
        <div
          class="resource-panel-item"
          v-for="(item, index) in resourceList"
          :key="index"
        >
          <a :href="item.path">
            <div class="cover">
              <img :src="item.cover" />
            </div>
            <div class="box">
              <div class="info">
                <p class="title">{{ item.name }}</p>
                <p class="len">{{ item.total }}</p>
              </div>
              <p class="desc">{{ item.desc }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:root.dark {
  // 深色模式图片亮度调度，对比图调高
  .resource-home {
    img {
      filter: brightness(0.8) contrast(1.2);
    }
  }
}

.resource-home {
  min-height: calc(100vh - 80px);
  background: var(--o-color-bg1);
  padding-bottom: var(--o-spacing-h1);

  .resource-panel {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--o-spacing-h4);
    &-item {
      background: var(--o-color-bg2);
      min-height: 577px;
      box-shadow: var(--o-shadow-l2);
      &:hover {
        box-shadow: var(--o-shadow-l2_hover);
      }
      .cover {
        width: 100%;
        height: 340px;
        text-align: center;
        overflow: hidden;
        img {
          max-width: 100%;
          object-fit: cover;
          height: 340px;
          transition: transform 0.8s ease;
          transform: scale(1);
        }
      }
      &:hover {
        .cover img {
          transform: scale(1.3);
        }
      }
      .box {
        padding: var(--o-spacing-h2);
        @media screen and (max-width: 1439px) {
          padding: var(--o-spacing-h3);
        }

        .info {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding-bottom: var(--o-spacing-h4);
          margin-bottom: var(--o-spacing-h4);
          border-bottom: 1px solid var(--o-color-division1);
          .title {
            font-size: var(--e-font_size-display2);
            color: var(--o-color-text1);
            line-height: var(--e-line_height-display2);
            @media screen and (max-width: 1439px) {
              font-size: var(--e-font_size-display3);
              line-height: var(--e-line_height-display3);
            }

            @media screen and (max-width: 1279px) {
              font-size: var(--e-font_size-display4);
              line-height: var(--e-line_height-display4);
            }
          }
        }
        .desc,
        .len {
          font-size: var(--e-font_size-h1);
          color: var(--o-color-text1);
          line-height: var(--e-line_height-h1);
          @media screen and (max-width: 1439px) {
            font-size: var(--e-font_size-h3);
            line-height: var(--e-line_height-h3);
          }
        }
      }
    }
  }
}
</style>
