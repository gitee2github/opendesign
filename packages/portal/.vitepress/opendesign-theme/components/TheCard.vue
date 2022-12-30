<script lang="ts" setup>
import IconRight from './icons/IconRight.vue';
const cardDataSizeS = [
  {
    bodyText: '图片规格 336*136',
    title: '标题文本',
    content: '内容文本',
  },
  {
    bodyText: '',
    title: '标题文本',
    content: '内容文本',
  },
  {
    bodyText: '',
    title: '标题文本',
    content: '内容文本',
  },
  {
    bodyText: '',
    title: '标题文本',
    content: '内容文本文本文本文本文本文本文本',
  },
];
const cardDataSizeM = [
  {
    bodyText: '图片规格 336*188（16:9）',
    title: '标题文本',
    content: '内容文本',
  },
  {
    bodyText: '',
    title: '标题文本',
    content: '内容文本',
  },
  {
    bodyText: '',
    title: '标题文本',
    content: '内容文本',
  },
  {
    bodyText: '',
    title: '标题文本',
    content: '内容文本',
  },
];
const cardDataSizeL = [
  {
    bodyText: '图片规格 452*260（16:9）',
    title: '标题文本',
    content: '内容文本',
  },
  {
    bodyText: '',
    title: '标题文本',
    content: '内容文本',
  },
  {
    bodyText: '',
    title: '标题文本',
    content: '内容文本文本文本文本文本文本',
  },
];
const cardDataSizeWithBtn = [
  {
    bodyText: '图片规格 456*188',
    title: '标题文本',
    content: '内容文本',
    button: '了解更多',
  },
  {
    bodyText: '',
    title: '标题文本',
    content: '内容文本',
    button: '了解更多',
  },
  {
    bodyText: '',
    title: '标题文本',
    content: '内容文本文本文本文本文本文本',
    button: '了解更多',
  },
];
const cardDataSizeRow2 = [
  {
    bodyText: '图片规格 696*188',
    title: '标题文本',
    content: '内容文本文本文本',
    button: '了解更多',
  },
  {
    bodyText: '',
    title: '标题文本',
    content: '内容文本文本文本',
    button: '了解更多',
  },
];
const cardDataSizeRow1 = [
  {
    bodyText: '图片规格 456*160',
    title: '标题文本',
    content:
      '内容文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
    button: '了解更多',
  },
];
const cardDataSizeRow1B = [
  {
    bodyText: '图片规格 936*592',
    title: '标题文本标题文本标题文本标题文本标题文本',
    content:
      '内容文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
    button: '了解更多',
  },
];
</script>
<template>
  <div class="card-page">
    <h3>图片+文本卡片</h3>
    <p>
      使用规则：卡片宽度及图片尺寸固定，文本区据内容选取相关文本组件，内容高度自适应
    </p>
    <div class="row-4 margin-s3">
      <div
        v-for="item in cardDataSizeM"
        class="card-item card-size-m"
        :key="item.title"
      >
        <div class="card-top">{{ item.bodyText }}</div>
        <div class="card-bottom">
          <div class="card-title">
            {{ item.title }}
          </div>
          <p class="text-content"></p>
        </div>
      </div>
    </div>
    <p class="margin-s2" style="font-size: 12px">
      一排支持4个卡片，卡片尺寸336*260，图片尺寸336*188，标题字体方正兰亭黑简体
      18字号 颜色000000
    </p>
    <!-- -------------------- -->
    <div class="row-4 margin-m">
      <div
        v-for="item in cardDataSizeS"
        class="card-item card-size-s"
        :key="item.title"
      >
        <div class="card-top">{{ item.bodyText }}</div>
        <div class="card-bottom">
          <div class="card-title">
            {{ item.title }}
          </div>
          <p class="text-content">{{ item.content }}</p>
        </div>
      </div>
    </div>
    <p class="margin-s2" style="font-size: 12px">
      一排支持4个卡片，卡片尺寸336*236，图片尺寸336*136，标题字体方正兰亭黑简体
      18字号 颜色000000，内容文本字体方正兰亭黑简体 14字号 颜色707070
    </p>
    <!-- ---------------------- -->
    <div class="row-3 margin-m">
      <div
        v-for="item in cardDataSizeL"
        class="card-item card-size-l"
        :key="item.title"
      >
        <div class="card-top">{{ item.bodyText }}</div>
        <div class="card-bottom">
          <div class="card-title">
            {{ item.title }}
          </div>
          <p class="text-content">{{ item.content }}</p>
        </div>
      </div>
    </div>
    <p class="margin-s2" style="font-size: 12px">
      一排支持3个卡片，卡片尺寸456*360，图片尺寸456*260，标题字体方正兰亭黑简体
      18字号 颜色000000，内容文本字体方正兰亭黑简体 14字号 颜色707070
    </p>
    <!-- ------------------------- -->
    <div class="row-3 margin-m">
      <div
        v-for="item in cardDataSizeWithBtn"
        class="card-item card-size-m"
        :key="item.title"
      >
        <div class="card-top">{{ item.bodyText }}</div>
        <div class="card-bottom">
          <div class="card-title">
            {{ item.title }}
          </div>
          <p class="text-content">{{ item.content }}</p>
          <div class="link-button">
            <p class="button-text">{{ item.button }}</p>
            <div class="button-icon"><IconRight /></div>
          </div>
        </div>
      </div>
    </div>
    <p class="margin-s2" style="font-size: 12px">
      一排支持3个卡片，卡片尺寸456*340，图片尺寸456*188，标题字体方正兰亭黑简体
      18字号 颜色000000，内容文本字体方正兰亭黑简体 14字号 颜色707070
    </p>
    <!-- ------------------------- -->
    <div class="row-2 margin-m">
      <div
        v-for="item in cardDataSizeRow2"
        class="card-item card-size-m"
        :key="item.title"
      >
        <div class="card-top">{{ item.bodyText }}</div>
        <div class="card-bottom">
          <div class="card-title">
            {{ item.title }}
          </div>
          <p class="text-content">{{ item.content }}</p>
        </div>
      </div>
    </div>
    <p class="margin-s2" style="font-size: 12px">
      一排支持2个卡片，卡片尺寸696*308，图片尺寸696*188，标题字体方正兰亭黑简体
      18字号 颜色000000，内容文本字体方正兰亭黑简体 14字号 颜色707070
    </p>
    <!-- -------------------- -->
    <div class="row-1 margin-m">
      <div
        v-for="item in cardDataSizeRow1"
        class="card-item card-size-r1"
        :key="item.title"
      >
        <div class="card-top">{{ item.bodyText }}</div>
        <div class="card-bottom">
          <div class="card-title">
            {{ item.title }}
          </div>
          <p class="text-content">{{ item.content }}</p>
        </div>
      </div>
    </div>
    <p class="margin-s2" style="font-size: 12px">
      一排支持1个卡片，卡片尺寸456*160，图片尺寸1416*160，标题字体方正兰亭中黑简体
      24字号 颜色000000，内容文本字体方正兰亭黑简体 14字号 颜色707070
    </p>
    <!-- -------------------------- -->
    <div class="row-1 margin-m">
      <div
        v-for="item in cardDataSizeRow1B"
        class="card-item card-size-r1b"
        :key="item.title"
      >
        <div class="card-top">{{ item.bodyText }}</div>
        <div class="card-bottom">
          <div class="card-title">
            {{ item.title }}
          </div>
          <p class="text-content">{{ item.content }}</p>
        </div>
      </div>
    </div>
    <p class="margin-s2" style="font-size: 12px">
      一排支持1个卡片，卡片尺寸936*592，图片尺寸1416*592，标题字体方正兰亭中黑简体
      28字号 颜色000000，内容文本字体方正兰亭黑简体 14字号 颜色707070
    </p>
    <!-- ------------------------- -->
  </div>
</template>

<style lang="scss">
.card-item {
  width: 100%;
  box-shadow: var(--o-shadow-l2);
  .card-top {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--o-color-neutral5);
    // background-color: var(--o-color-bg24);
    background-color: #d8d8d8;
  }
  .card-bottom {
    .card-title {
      font-size: var(--e-font_size-h4);
      font-weight: 600;
      color: var(--o-color-text1);
    }
    .text-content {
      font-size: var(--e-font_size-tip1);
    }
    .link-button {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: var(--o-spacing-h8);
      .button-text {
        font-size: var(--e-font_size-tip1);
        color: var(--o-color-text1);
      }
      .button-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3px;
        margin-left: 3px;
      }
    }
    padding: var(--o-spacing-h5) var(--o-spacing-h8);
  }
}
.card-size-s {
  .card-top {
    min-height: 91px;
    font-size: var(--e-font_size-tip1);
  }
}
.card-size-m {
  .card-top {
    min-height: 126px;
    font-size: var(--e-font_size-tip1);
  }
}
.card-size-l {
  .card-top {
    min-height: 174px;
    font-size: var(--e-font_size-tip1);
  }
}
.card-size-r1 {
  display: flex;
  flex-direction: row;
  .card-top {
    min-height: 160px;
    min-width: 456px;
  }
}
.card-size-r1b {
  display: flex;
  flex-direction: row;
  .card-top {
    min-height: 397px;
    min-width: 628px;
  }
}
</style>
