<script lang="ts" setup>
import { ref, computed } from 'vue';
import ResDialog from './ResDialog.vue';

import { useCommon } from '@/stores/common';

const props = defineProps({
  option: {
    type: Object,
    default: {},
  },
  type: {
    type: String,
    default: '',
  },
});

const commonStore = useCommon();
const isDark = computed(() => (commonStore.theme === 'dark' ? true : false));

// 弹框
const showDel = ref(false);
function toggleDelDlg(flag: boolean) {
  if (flag === undefined) {
    showDel.value = !showDel.value;
  } else {
    showDel.value = flag;
  }
}

const pngLink = (name: string, type: string) => {
  if (type === 'illustration') {
    return `/resources/illustration/light/png@2x/${name}@2x.png`;
  }

  if (type === 'peripheral') {
    return `/resources/merch/${name}.png`;
  }
};

const illustrationSrc = (path: string) => {
  if (isDark.value) {
    return path.replace('light', 'dark').replace('packages', 'resources');
  } else {
    return path.replace('dark', 'light').replace('packages', 'resources');
  }
};

const formatImgUrl = (path: string) =>
  path.replace('/packages/', '/resources/');

// 格式化周边其他方案下载链接
const formatPeripheral = (path: string) => {
  return path.replace('/png/', '/file/').replace('.png', '.zip');
};
</script>

<template>
  <div class="card" :class="type">
    <template v-if="type === 'icon'">
      <div
        class="icon-show"
        :style="{
          '-webkit-mask-image': `url(${formatImgUrl(option.path)})`,
          'mask-image': `url(${formatImgUrl(option.path)})`,
        }"
      ></div>
    </template>
    <img
      v-if="type === 'peripheral'"
      class="top-img"
      :class="option.name"
      :src="`${formatImgUrl(option.path)}`"
    />
    <img
      v-if="type === 'illustration'"
      class="top-img"
      :class="option.name"
      :src="illustrationSrc(option.path)"
    />

    <p class="name">
      {{ option.name }}
    </p>
    <div class="layer-box" :class="type" @click="showDel = true">
      <i class="icon-download"></i>
    </div>

    <!-- 预览弹框 -->
    <ResDialog
      v-if="showDel"
      :show="showDel"
      :close="true"
      @close-click="toggleDelDlg(false)"
    >
      <template #head>
        <div class="dlg-title">
          {{ option.name }}
        </div>
      </template>
      <div class="dlg-body" :class="type">
        <div
          v-if="type === 'icon'"
          class="icon"
          :style="{
            '-webkit-mask-image': `url(${formatImgUrl(option.path)})`,
            'mask-image': `url(${formatImgUrl(option.path)})`,
          }"
        ></div>
        <img
          v-else
          class="img"
          :alt="props.option.name"
          :src="`${formatImgUrl(option.path)}`"
        />
      </div>
      <div v-if="type === 'peripheral'" class="dlg-desc">
        <div class="dlg-desc-title">{{ option.name }}</div>
        <div class="dividing-line"></div>
      </div>
      <template #foot>
        <div class="dlg-actions">
          <a
            v-if="type === 'icon'"
            :href="formatImgUrl(option.path)"
            :download="option.name"
            target="_blank"
          >
            <o-button>下载 SVG</o-button>
          </a>
          <a
            v-if="type === 'illustration'"
            :href="pngLink(option.name, type)"
            :download="option.name"
            target="_blank"
          >
            <o-button>下载 PNG</o-button>
          </a>
          <a
            v-if="type === 'peripheral'"
            :href="formatPeripheral(formatImgUrl(option.path))"
            :download="option.name"
            target="_blank"
          >
            <o-button>下载 源文件</o-button>
          </a>
        </div>
      </template>
    </ResDialog>
  </div>
</template>

<style lang="scss" scoped>
.card {
  flex: 1;
  position: relative;
  text-align: center;
  background: var(--o-color-bg2);
  .top-img {
    width: var(--o-spacing-h1);
    height: var(--o-spacing-h1);
    margin-top: var(--o-spacing-h5);
  }
  .icon-show {
    width: var(--o-spacing-h1);
    height: var(--o-spacing-h1);
    margin: var(--o-spacing-h5) auto 0;
    -webkit-mask-size: cover;
    background-color: var(--o-color-text1);
  }
  &.illustration {
    .top-img {
      width: auto;
      height: 192px;
      object-fit: cover;
      margin-top: 0;
      padding: 24px 0;
      &.openLooKeng {
        padding: var(--o-spacing-h2);
      }
    }
  }
  &.peripheral {
    background: rgba(255, 255, 255, 0);
    .top-img {
      width: auto;
      height: 192px;
      object-fit: cover;
      margin-top: 0;
    }
  }
  .name {
    font-size: var(--e-font_size-text);
    color: var(--o-color-text1);
    line-height: var(--e-line_height-text);
    padding: var(--o-spacing-h5) 0;
    text-align: center;

    @media screen and (max-width: 1279px) {
      font-size: var(--e-font_size-tip1);
      line-height: var(--e-line_height-tip1);
    }
  }
  .layer-box {
    background: rgba(0, 0, 0, 0.85);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s;
    cursor: pointer;
    .icon-download {
      width: 50px;
      height: 50px;
      background: url(/img/resource/icon-download.png) no-repeat center/cover;
      display: block;
    }
  }
  &:hover {
    .layer-box {
      opacity: 1;
    }
  }
}
.dlg-title {
  text-align: center;
  font-size: var(--e-font_size-h2);
  color: var(--o-color-text1);
  line-height: var(--e-line_height-h2);
  padding: var(--o-spacing-h2) 80px var(--o-spacing-h5);
}
.dlg-body {
  background: var(--o-color-bg1);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 284px;
  margin: 0 80px;
  .icon {
    -webkit-mask-size: cover;
    background-color: var(--o-color-text1);
    height: 250px;
    width: 250px;
  }
  .img {
    height: 100%;
    object-fit: cover;
  }
  &.peripheral {
    background: #e5e8f0;
  }
  &.illustration {
    padding: 24px;
  }
}
.dlg-desc {
  margin: var(--o-spacing-h4) 0 0 80px;
  &-title {
    margin: 0 0 var(--o-spacing-h5) 0;
    font-size: var(--e-font_size-h1);
    line-height: var(--e-line_height-h1);
    font-weight: 0;
    color: var(--o-color-text1);
  }
  &-desc {
    font-size: var(--e-font_size-text);
    line-height: var(--e-line_height-h4);
    margin: 0 0 var(--o-spacing-h2) 0;
    color: var(--o-color-neutral5);
  }
  .dividing-line {
    height: 1px;
    margin: 0 80px 0 0;
    background: var(--o-color-division1);
  }
}
.dlg-actions {
  display: flex;
  justify-content: center;
  gap: var(--o-spacing-h4);
  padding: var(--o-spacing-h2);
}
</style>
