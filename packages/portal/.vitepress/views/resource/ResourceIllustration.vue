<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getPackages } from '@/api';
import ResBanner from './components/ResBanner.vue';
import ResCard from './components/ResCard.vue';
import { formatPeripheralData } from './components/utils';

import bannerImg from '@/assets/img/resource/banner-illustration.png';

// 获取数据
const illustration = '/packages/illustration/light/png/';
const illustrationData = ref<any>([]);

async function getList() {
  try {
    const res = await getPackages(illustration);
    formatPeripheralData(res, 'png">', illustrationData.value, illustration);
  } catch (error) {
    console.error('授权获信息失败', error);
  }
}

onMounted(() => {
  getList();
});

const bannerInfo = {
  title: '插画 ',
  text: '内容信息的补充说明，同时增强视觉感观，使文字意念变得更明确清晰',
  cover: bannerImg,
};
</script>

<template>
  <div class="illustration-home">
    <ResBanner :option="bannerInfo"></ResBanner>
    <div class="wrapper">
      <div class="illustration-panel">
        <ResCard
          v-for="item in illustrationData"
          :key="item.id"
          :option="item"
          type="illustration"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.illustration-home {
  min-height: calc(100vh - 80px);
  background: var(--o-color-bg1);
  padding-bottom: 64px;
}
.illustration-panel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--o-spacing-h4);
}
</style>
