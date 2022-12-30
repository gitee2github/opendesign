<script lang="ts" setup>
import { ref } from 'vue';
import ResBanner from './components/ResBanner.vue';
import ResDialog from './components/ResDialog.vue';

import bannerImg from '@/assets/img/resource/banner-video.png';
import videoImg1 from '@/assets/img/resource/video1.png';
import videoImg2 from '@/assets/img/resource/video2.png';
import videoImg3 from '@/assets/img/resource/video3.png';
import videoIcon from '@/assets/img/video-icon.png';

const bannerInfo = {
  title: '视频 ',
  text: '汇聚大量高清精美视频，创造全新传播体验',
  cover: bannerImg,
};

interface videoItem {
  name: String;
  url: String;
  cover: String;
  id: Number | String;
  desc: String;
  time: String;
  size: String;
  rite: String;
  duration: String;
}

const PREFIX =
  'https://api.test.osinfra.cn/metadata/v1/metadata/openeuler/opendesign';

const videoList = [
  {
    name: 'MoocStudio',
    url:
      PREFIX +
      '/packages/video/MoocStudio%E7%9A%84%E5%8F%91%E5%B8%83%E8%A7%86%E9%A2%91.mp4',
    cover: videoImg2,
    id: 0,
    desc: 'MoocStudio是openEuler社区集计算机课程编写和学习一体的教育平台，本视频为MoocStudio上线宣传视频，MoocStudio体验链接moocstudio.openeuler.sh',
    time: '2021/05/21',
    size: '82.44 MB',
    rite: '1920 x 1080',
    duration: '00:29',
  },
  {
    name: 'openEuler 2021年跨年视频',
    url:
      PREFIX +
      '/packages/video/openEuler%202021%E5%B9%B4%E8%B7%A8%E5%B9%B4%E8%A7%86%E9%A2%91.mp4',
    cover: videoImg1,
    id: 0,
    desc: '在2020-2021跨年夜，社区为大家奉上最具活力的祝福：2021 – Enjoy Our Community',
    time: '2021/05/21',
    size: '83.88 MB',
    rite: '1920 x 1080',
    duration: '01:17',
  },
  {
    name: '开源男团2021年新春拜年视频',
    url:
      PREFIX +
      '/packages/video/%E5%BC%80%E6%BA%90%E7%94%B7%E5%9B%A22021%E5%B9%B4%E6%96%B0%E6%98%A5%E6%8B%9C%E5%B9%B4%E8%A7%86%E9%A2%91.mp4',
    cover: videoImg3,
    id: 0,
    desc: '2021年新春，开源社区男团给大家奉上一段很“牛”的拜年舞，疫情时期“今年过年不扎堆，云上蹦迪牛起来！',
    time: '2021/05/21',
    size: '49.47 MB',
    rite: '1920 x 1080',
    duration: '00:42',
  },
];

// 弹框
const showDel = ref(false);
function toggleDelDlg(flag: boolean) {
  if (flag === undefined) {
    showDel.value = !showDel.value;
  } else {
    showDel.value = flag;
  }
}

const videoData = ref<any>({});
const videoClick = (item: videoItem) => {
  showDel.value = true;
  videoData.value = item;
};
</script>

<template>
  <div class="video-home">
    <ResBanner :option="bannerInfo"></ResBanner>
    <div class="wrapper">
      <div class="video-panel">
        <div
          class="video-item"
          @click="videoClick(item)"
          v-for="item in videoList"
          :key="item.id"
        >
          <div class="cover">
            <img class="video-icon" :src="videoIcon" :alt="item.name" />
            <img class="video-cover" :src="item.cover" :alt="item.name" />
          </div>
          <p class="title">{{ item.name }}</p>
        </div>
        <!-- 预览弹框 -->
        <ResDialog
          v-if="showDel"
          :show="showDel"
          :close="false"
          @close-click="toggleDelDlg(false)"
        >
          <div class="dlg-body">
            <video class="video" :src="videoData.url" controls></video>
            <div class="info">
              <h3 class="caption">{{ videoData.name }}</h3>
              <ul class="list">
                <li>
                  <span class="label">更新日期：</span>{{ videoData.time }}
                </li>
                <li>
                  <span class="label">视频大小：</span>{{ videoData.size }}
                </li>
                <li>
                  <span class="label">视频尺寸：</span>{{ videoData.rite }}
                </li>
                <li>
                  <span class="label">视频时长：</span>{{ videoData.duration }}
                </li>
                <li>
                  <span class="label">视频说明：</span>{{ videoData.desc }}
                </li>
              </ul>
            </div>
          </div>
        </ResDialog>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-home {
  min-height: calc(100vh - 80px);
  background: var(--o-color-bg1);
  padding-bottom: var(--o-spacing-h1);
  @media screen and (max-width: 1279px) {
    min-height: calc(100vh - 48px);
  }
}

.dlg-body {
  width: 1268px;
  @media screen and (max-width: 1439px) {
    width: 1080px;
  }

  .video {
    height: 440px;
    width: 100%;
    object-fit: contain;
    background: #000;
  }
  .info {
    padding: var(--o-spacing-h2);
    .caption {
      font-size: var(--e-font_size-h1);
      line-height: var(--e-line_height-h1);
      margin-bottom: var(--o-spacing-h4);
      color: var(--o-color-text1);
    }
    li {
      list-style: none;
      font-size: var(--e-font_size-h4);
      line-height: var(--e-line_height-h4);
      color: var(--o-color-text1);
    }
  }
}

.video-panel {
  .video-item {
    margin-bottom: var(--o-spacing-h2);
    cursor: pointer;
    .cover {
      height: 500px;
      margin-bottom: var(--o-spacing-h4);
      position: relative;
      .video-cover {
        height: 500px;
        width: 100%;
        object-fit: cover;
      }
      .video-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 72px;
        height: 72px;
        transform: translate(-50%, -50%);
      }
    }
    .title {
      font-size: var(--e-font_size-h1);
      line-height: var(--e-line_height-h1);
      color: var(--o-color-text1);
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
