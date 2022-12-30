<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { getPackages } from '@/api';
import ResBanner from './components/ResBanner.vue';
import ResCard from './components/ResCard.vue';
import { formatPeripheralData } from './components/utils';
import NotFound from '@/opendesign-theme/NotFound.vue';

import bannerImg from '@/assets/img/resource/banner-icon.png';

const bannerInfo = {
  title: '图标 ',
  text: '用户通读性语言，使得设计师与用户跨越语言障碍，同时帮助页面节省空间',
  cover: bannerImg,
};

// 获取数据
const getBaseData = ref<any>([]);
const getBusinessData = ref<any>([]);
const basePath = '/packages/icon/base/';
const businessPath = '/packages/icon/business/';

function getList() {
  Promise.all([getPackages(basePath), getPackages(businessPath)])
    .then((res) => {
      formatPeripheralData(res[0], 'svg">', getBaseData.value, basePath);
      formatPeripheralData(
        res[1],
        'svg">',
        getBusinessData.value,
        businessPath
      );
    })
    .catch((e) => {
      console.error('授权获信息失败', e);
    });
}

onMounted(() => {
  getList();
});

const getData = computed(() => {
  return [...getBaseData.value, ...getBusinessData.value];
});

const isActive = ref('all');
const allData = computed(() => {
  switch (isActive.value) {
    case 'base':
      return getBaseData.value;
    case 'business':
      return getBusinessData.value;
    default:
      return getData.value;
  }
});

// 图标筛选
const filterList = [
  {
    id: 'all',
    name: '全部',
  },
  {
    id: 'base',
    name: '基础图标',
  },
  {
    id: 'business',
    name: '业务图标',
  },
];

const filterClick = (id: string) => {
  isActive.value = id;
};
</script>

<template>
  <div class="icon-home">
    <ResBanner :option="bannerInfo"></ResBanner>
    <div class="wrapper">
      <div class="resource-filter">
        <div class="filter-box">
          <p class="label">类别</p>
          <a
            href="javascript:;"
            v-for="(item, index) in filterList"
            :key="index"
            class="link"
            :class="{ active: item.id === isActive }"
            @click="filterClick(item.id)"
            >{{ item.name }}</a
          >
        </div>
      </div>
      <div class="icon-panel" v-if="allData.length > 0">
        <ResCard
          v-for="(item, index) in allData"
          :key="index"
          :option="item"
          type="icon"
        />
      </div>
      <template v-else><NotFound /></template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-home {
  min-height: calc(100vh - 80px);
  background: var(--o-color-bg1);
  padding-bottom: var(--o-spacing-h1);
}

.icon-panel {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: var(--o-spacing-h4);
  @media screen and (max-width: 1439px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media screen and (max-width: 1279px) {
    grid-template-columns: repeat(6, 1fr);
  }
}

.resource-filter {
  display: flex;
  margin-bottom: var(--o-spacing-h2);
  .filter-box {
    display: flex;
    align-items: center;
    .label {
      font-size: var(--e-font_size-text);
      line-height: var(--e-line_height-h2);
      color: var(--o-color-text1);
      width: 56px;
    }
    .link {
      font-size: var(--e-font_size-text);
      line-height: var(--e-line_height-h2);
      color: var(--o-color-text1);
      border: 1px solid transparent;
      transition: all 0.3s;
      padding: 0 12px;
      &.active {
        color: var(--o-color-brand1);
        border-color: var(--o-color-brand1);
      }
    }
  }
}
</style>
