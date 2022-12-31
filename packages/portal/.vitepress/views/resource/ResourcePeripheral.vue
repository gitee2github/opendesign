<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { getPackages } from '@/api';
import ResBanner from './components/ResBanner.vue';
import ResCard from './components/ResCard.vue';
import { formatPeripheralData } from './components/utils';
import ClothingSwiper from './ClothingSwiper.vue';

import bannerImg from '@/assets/img/resource/banner-peripheral.png';

const bannerInfo = {
  title: '开源周边',
  text: '集潮流和设计于一身的产品，给你来一次线上遨游',
  cover: bannerImg,
};
const classifyInfo = {
  title: '其他方案',
  discribe: '全方位探索设计领域，共创共享创新设计思维',
};

const clothingItem = {
  title: '衣服方案',
  discribe: '全方位探索设计领域，共创共享创新设计思维',
  text: '款式选择',
  btn: '周边方案下载',
};

// 获取数据
const merch = '/packages/merch/other/png/';
const tShirt = '/packages/merch/clothing/tShirt/png/';
const hoodie = '/packages/merch/clothing/hoodie/png/';

const otherData = ref<any>([]);
const clothingData = ref<any>([
  {
    title: '卫衣',
    data: [],
  },
  {
    title: 'T恤',
    data: [],
  },
]);

async function getList() {
  try {
    Promise.all([
      getPackages(merch),
      getPackages(tShirt),
      getPackages(hoodie),
    ]).then((res) => {
      formatPeripheralData(res[0], 'png">', otherData.value, merch);

      formatClothingData(res[2], 'png">', clothingData.value[0].data, hoodie);
      formatClothingData(res[1], 'png">', clothingData.value[1].data, tShirt);
    });
  } catch (error) {
    console.error('授权获信息失败', error);
  }
}
// 衣服数据分类
function formatClothingData(
  res: string,
  type: string,
  data: any,
  path: string
) {
  const formatData = res && (res.split('</a>').slice(0, -1) as any);

  const checkFlag = ref(false);
  formatData.forEach((el: string, index: number) => {
    const arr = el.split(type)[1];
    const group = arr.split('-');
    if (index) {
      checkFlag.value = false;
      data.forEach((item: any) => {
        if (group[2] === item.id) {
          checkFlag.value = true;
          item.children.push({
            path: path + arr,
            color: group[3].split('.')[0],
          });
        }
      });
      if (!checkFlag.value) {
        data.push({
          id: group[2],
          name: group[0] + group[1],
          community: group[0],
          children: [
            {
              path: path + arr,
              color: group[3].split('.')[0],
            },
          ],
        });
      }
    } else {
      data.push({
        id: group[2],
        name: group[0] + group[1],
        community: group[0],
        children: [
          {
            path: path + arr,
            color: group[3].split('.')[0],
          },
        ],
      });
    }
  });
}

const clothingTabActive = ref(0);
const clothingIndexActive = ref(0);
const clothingColorActive = ref(0);

const clothingActiveImg = computed(() => {
  if (clothingData.value[clothingTabActive.value].data.length > 0) {
    return clothingData.value[clothingTabActive.value].data[
      clothingIndexActive.value
    ].children[clothingColorActive.value].path.replace(
      '/packages/',
      '/resources/'
    );
  }
});

onMounted(() => {
  getList();
});

// 切换产品
const changeClothingTabs = (index: number) => {
  clothingTabActive.value = index;
  clothingIndexActive.value = 0;
  clothingColorActive.value = 0;
};
// 切换产品列表
const changeClothingImg = (index: number) => {
  clothingIndexActive.value = index;
  clothingColorActive.value = 0;
};
// 切换衣服颜色
const changeSwitchColor = (index: number) => {
  clothingColorActive.value = index;
};

const formatImgUrl = (path: string) =>
  path.replace('/packages/', '/resources/');

// 衣服下载链接格式化
const clothingDownloadPath = (path: string) => {
  const pathArr = path.replace('/png/', '/file/').split('-');
  return `${pathArr[0] + '-' + pathArr[1] + '-' + pathArr[2]}.zip`;
};
</script>

<template>
  <div class="peripheral-home">
    <ResBanner :option="bannerInfo"></ResBanner>
    <div class="wrapper">
      <div
        v-if="clothingData[clothingTabActive].data.length > 0"
        class="clothing-content"
      >
        <div class="peripheral-bar">
          <div class="title">{{ clothingItem.title }}</div>
          <div class="desc">
            {{ clothingItem.discribe }}
          </div>
        </div>
        <div class="clothing-item">
          <div class="clothing-cover">
            <div
              v-if="
                clothingData[clothingTabActive].data[clothingIndexActive]
                  .children.length > 1
              "
              class="switch-color"
            >
              <span
                v-for="(item, index) in clothingData[clothingTabActive].data[
                  clothingIndexActive
                ].children"
                :key="item.color"
                @click="changeSwitchColor(index)"
                :class="{ active: clothingColorActive === index }"
                :style="{ backgroundColor: item.color }"
              ></span>
            </div>
            <img :src="clothingActiveImg" class="cover" alt="" />
          </div>
          <div class="clothing-box">
            <ul class="clothing-tabs">
              <li
                v-for="(item, index) in clothingData"
                :class="{ active: clothingTabActive === index }"
                :key="item.title"
                @click="changeClothingTabs(index)"
              >
                <div v-if="item.data.length > 0" class="img-cover">
                  <img :src="formatImgUrl(item.data[0].children[0].path)" />
                </div>
                <p>{{ item.title }}</p>
              </li>
            </ul>
            <p class="text">{{ clothingItem.text }}</p>

            <ClothingSwiper
              :data="clothingData[clothingTabActive].data"
              :active="clothingIndexActive"
              @swiper-click="changeClothingImg"
            />
            <a :href="clothingDownloadPath(clothingActiveImg)" download>
              <o-button class="product-down" type="primary" size="small">{{
                clothingItem.btn
              }}</o-button>
            </a>
          </div>
        </div>
      </div>

      <div class="classify-item" v-if="otherData.length > 0">
        <div class="peripheral-bar">
          <div class="title">{{ classifyInfo.title }}</div>
          <div class="desc">
            {{ classifyInfo.discribe }}
          </div>
        </div>
        <div class="illustration-panel">
          <ResCard
            v-for="object in otherData"
            :key="object.id"
            :option="object"
            type="peripheral"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.clothing-item {
  display: flex;
  justify-content: space-between;
  gap: 98px;
  margin: var(--o-spacing-h2) 0 var(--o-spacing-h1);
  .clothing-cover {
    width: 794px;
    height: 366px;
    background: var(--o-color-bg2);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    .switch-color {
      position: absolute;
      top: 24px;
      right: 24px;
      display: flex;
      gap: 8px;
      span {
        width: 24px;
        height: 24px;
        display: block;
        border-radius: 50%;
        border: 2px solid var(--o-color-text5);
        cursor: pointer;
        &.active {
          border-color: var(--o-color-brand1);
        }
      }
    }
    .cover {
      max-height: 100%;
      object-fit: cover;
      user-select: none;
    }
  }
  .clothing-box {
    flex: 1;
    .clothing-tabs {
      display: flex;
      gap: 24px;
      li {
        border-bottom: 2px solid transparent;
        padding-bottom: 10px;
        list-style: none;
        cursor: pointer;
        &.active {
          border-bottom-color: var(--o-color-brand1);
          p {
            color: var(--o-color-brand1);
          }
        }
        .img-cover {
          background-color: var(--o-color-bg2);
          width: 84px;
          height: 84px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 11px;
          img {
            max-width: 100%;
            object-fit: cover;
          }
        }
        p {
          font-size: var(--e-font_size-text);
          line-height: var(--e-line_height-text);
          color: var(--o-color-text4);
          text-align: center;
          margin-top: 8px;
        }
      }
    }
    .text {
      margin: var(--o-spacing-h2) 0 var(--o-spacing-h5);
      font-size: var(--e-font_size-text);
      line-height: var(--e-line_height-text);
      color: var(--o-color-text4);
    }
    .product-content {
      .product-list {
        display: flex;
        gap: var(--o-spacing-h5);
        li {
          list-style: none;
          background-color: var(--o-color-bg2);
          width: 84px;
          height: 84px;
          border: 1px solid var(--o-color-bg4);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          img {
            max-height: 90%;
            object-fit: cover;
          }
          &.active {
            border-color: var(--o-color-brand1);
          }
        }
      }
    }
    .product-down {
      width: 484px;
      justify-content: center;
      margin-top: 36px;
    }
  }
}
.peripheral-home {
  min-height: calc(100vh - 80px);
  background: var(--o-color-bg1);
  padding-bottom: var(--o-spacing-h1);
}
.illustration-panel {
  margin: var(--o-spacing-h2) 0 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--o-spacing-h4);
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
.peripheral-bar {
  .title {
    font-size: var(--e-font_size-display3);
    color: var(--o-color-text1);
    line-height: var(--e-line_height-display3);
    font-weight: normal;
  }
  .desc {
    margin-top: var(--o-spacing-h5);
    font-size: var(--e-font_size-h3);
    color: var(--o-color-text4);
    line-height: var(--e-line_height-h4);
  }
}
</style>
