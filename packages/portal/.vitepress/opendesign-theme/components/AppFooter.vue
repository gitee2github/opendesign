<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

import logo from '@/assets/logo-dark.png';
import qrcode from '@/assets/qrcode.png';
import bg from '@/assets/footer-bg.png';

const data = useData();

// footer
const footerOptions = {
  copyright: '版权所有 © 2022 openEuler 保留一切权利',
  email: 'contact@opendesign.org',
  link: [
    {
      id: 'privacypolicy',
      label: '隐私政策',
      path: 'https://www.openeuler.org/zh/other/privacy/',
    },
    {
      id: 'legalnotice',
      label: '法律声明',
      path: 'https://www.openeuler.org/zh/other/legal/',
    },
  ],
  code: {
    text: '扫码关注公众号',
    code_img: qrcode,
  },
};
</script>

<template>
  <footer class="app-footer" :style="{ backgroundImage: 'url(' + bg + ')' }">
    <div class="footer-wrapper">
      <div class="footer-logo">
        <img :src="logo" alt="" />
        <p>
          <a
            class="email"
            :href="'mailto:' + footerOptions.email"
            target="_blank"
            >{{ footerOptions.email }}</a
          >
        </p>
      </div>
      <div class="footer-link">
        <div class="footer-link-item">
          <a
            v-for="link in footerOptions.link"
            :key="link.id"
            :href="link.path"
            class="link"
            target="_blank"
            >{{ link.label }}</a
          >
        </div>
        <p class="copyright">{{ footerOptions.copyright }}</p>
      </div>
      <div class="footer-right">
        <img :src="footerOptions.code.code_img" class="footer-qrcode" />
        <p class="text">{{ footerOptions.code.text }}</p>
      </div>
    </div>
  </footer>
</template>

<style>
:root {
  --o-footer-text: #fff;
}
</style>
<style lang="scss" scoped>
.app-footer {
  height: 238px;
  background: no-repeat top center/cover;

  .footer-wrapper {
    max-width: 1504px;
    padding: 62px 44px;
    margin: 0 auto;
    padding-top: 62px;
    padding-bottom: 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--o-footer-text);
    .footer-logo {
      img {
        height: 48px;
        margin-bottom: 16px;
      }
    }

    .footer-link {
      text-align: center;
      &-item {
        margin-bottom: 12px;
      }
      .link {
        color: var(--o-footer-text);
        font-size: var(--e-font_size-text);
        line-height: var(--e-line_height-text);
        display: inline-block;
        padding: 0 12px;
        border-right: 1px solid var(--o-color-division1);
        &:last-child {
          border-right: 0;
        }
      }

      .copyright {
        margin-top: 10px;
      }
    }

    .footer-right {
      text-align: center;
      .text {
        font-size: var(--e-font_size-tip1);
        line-height: var(--e-line_height-tip1);
        margin-top: 9px;
      }
      .footer-qrcode {
        width: 78px;
        height: 78px;
      }
    }

    .link,
    .email,
    .copyright {
      color: var(--o-footer-text);
      font-size: var(--e-font_size-tip1);
    }
  }

  &.doc {
    margin-left: 260px;
    .footer-wrapper {
      @media screen and (max-width: 768px) {
        margin-left: 0;
        transition: all 0.3s;
      }
    }
  }
}
</style>
