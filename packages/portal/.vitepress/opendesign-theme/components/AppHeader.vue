<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useData, useRoute, useRouter } from 'vitepress';
import { useCommon } from '@/stores/common';

import IconLight from './icons/IconLight.vue';
import IconDark from './icons/IconDark.vue';
import IconMore from './icons/IconMore.vue';

import logoLight from '@/assets/logo-light.png';
import logoDark from '@/assets/logo-dark.png';

interface NavItem {
  id: string;
  name: string;
  link: string;
}

const router = useRouter();
const route = useRoute();
const { theme, frontmatter } = useData();

const navConfig = theme.value.nav || [];
const routeName = route.path.split('/')[1] || 'home';
const activeNav = ref(routeName);

// 风格切换
const APPEARANCE_KEY = 'vitepress-theme-appearance';
const commonStore = useCommon();
const isDark = computed(() => (commonStore.theme === 'dark' ? true : false));

const isHome = computed(() => {
  return frontmatter.value.home;
});

const logo = computed(() => {
  return isDark.value ? logoDark : logoLight;
});

const handleNavClick = (item: NavItem) => {
  activeNav.value = item.id;
  isMobile.value = false;
  isMobileActive.value = false;
  router.go(item.link);
};

const handleLogoClick = () => {
  router.go('/');
};

// 导航切换
watch(
  () => {
    return route.path;
  },
  () => {
    if (route.path === '/') {
      activeNav.value = 'home';
    } else {
      activeNav.value = route.path.split('/')[1];
    }
  },
  { immediate: true }
);

const changeTheme = () => {
  const theme = commonStore.theme === 'dark' ? 'light' : 'dark';
  commonStore.theme = theme;
  localStorage.setItem(APPEARANCE_KEY, theme);
};

onMounted(() => {
  const theme = localStorage.getItem(APPEARANCE_KEY);
  commonStore.theme = theme === 'dark' ? 'dark' : 'light';
});

watch(
  () => {
    return commonStore.theme;
  },
  (val) => {
    const documentElement = document.documentElement;
    val === 'light' && documentElement.classList.remove('dark');
    val === 'dark' && documentElement.classList.add(val);
    localStorage.setItem(APPEARANCE_KEY, val);
  }
);

const isMobile = ref(false);
const isMobileActive = ref(false);
const mobileNavClick = () => {
  isMobile.value = !isMobile.value;
  isMobileActive.value = !isMobileActive.value;
};

const headerRef = ref<HTMLHeadElement>();
const setHeader = () => {
  const scrollLeft = document.documentElement.scrollLeft;
  if (headerRef.value) {
    headerRef.value.style.left = `-${scrollLeft}px`;
  }
};
onMounted(() => {
  setHeader();
  window.addEventListener('scroll', setHeader);
});

onUnmounted(() => {
  window.removeEventListener('scroll', setHeader);
});
</script>

<template>
  <header class="app-header" :class="{ home: isHome }" ref="headerRef">
    <IconMore
      class="mobile-icon"
      :class="{ active: isMobileActive }"
      @click="mobileNavClick"
      size="medium"
    />
    <img
      class="header-logo"
      :src="logo"
      alt="opendesign"
      @click="handleLogoClick"
    />
    <div class="header-tool" :class="{ 'is-mobile': isMobile }">
      <div class="header-nav">
        <div
          v-for="item in navConfig"
          :key="item.id"
          class="nav-item"
          :class="{ active: item.id == activeNav }"
          @click="handleNavClick(item)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="header-theme" @click="changeTheme">
        <IconLight v-if="isDark" size="medium" />
        <IconDark v-else size="medium" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.dark .mobile-icon {
  color: #fff;
}
.app-header {
  min-width: 1080px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 44px;
  background-color: var(--o-color-bg2);
  z-index: 99;
  .mobile-icon {
    display: none;
  }
  &::after {
    display: none;
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--o-color-division1);
  }

  &.home {
    background-color: var(--o-color-bg1);
  }

  &.doc {
    &::after {
      display: block;
    }
  }

  .header-logo {
    height: 100%;
    padding: 16px 0;
    cursor: pointer;
    object-fit: fill;
  }

  .header-tool {
    display: flex;
    height: 100%;
    position: relative;
    z-index: 1;
    .header-nav {
      display: flex;
      height: 100%;

      .nav-item {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 22px;
        font-size: var(--e-font_size-h3);
        line-height: var(--e-line_height-h3);
        font-weight: normal;
        color: var(--o-color-text1);
        cursor: pointer;

        &::after {
          position: absolute;
          left: 22px;
          bottom: 0;
          content: '';
          width: calc(100% - 44px);
          height: 2px;
          transition: 0.3s background-color cubic-bezier(0.645, 0.045, 0.355, 1);
          background-color: var(--o-color-transparent);
        }

        &:hover {
          color: var(--o-color-brand1);
        }

        &.active {
          color: var(--o-color-brand1);
          &::after {
            background-color: var(--o-color-brand1);
          }
        }
      }
    }

    .header-theme {
      display: flex;
      align-items: center;
      height: 100%;
      margin-left: 12px;
      cursor: pointer;
    }
  }
}
// @media (max-width: 1280px) {
//   .app-header {
//     display: block;
//     text-align: center;
//     .header-logo {
//       padding: 12px 0;
//     }
//     .mobile-icon {
//       position: absolute;
//       left: 44px;
//       top: 50%;
//       transform: translateY(-50%);
//       display: block;
//       cursor: pointer;
//       &.active {
//         color: var(--o-color-brand1);
//       }
//     }
//     .header-tool {
//       position: absolute;
//       height: calc(100vh - 80px);
//       top: 80px;
//       left: 0;
//       right: 100%;
//       bottom: 0;
//       display: block;
//       background: var(--o-color-bg1);
//       opacity: 0;
//       transition: all 0.3s;
//       &.is-mobile {
//         right: 0;
//         opacity: 1;
//       }
//       .header-nav {
//         display: block;
//         height: auto;
//         padding: 24px 0;
//         .nav-item {
//           display: block;
//           height: 48px;
//           line-height: 48px;
//           text-align: left;
//           padding: 0 44px;
//           &::before {
//             position: absolute;
//             left: 44px;
//             bottom: 0;
//             content: '';
//             width: calc(100% - 88px);
//             height: 2px;
//             transition: 0.3s background-color
//               cubic-bezier(0.645, 0.045, 0.355, 1);
//             background-color: var(--o-color-division1);
//           }
//           &.active::after {
//             width: 40px !important;
//             width: calc(100% - 44px);
//             left: 44px;
//           }
//         }
//       }
//       .header-theme {
//         height: auto;
//         margin-left: 44px;
//         &::before {
//           content: '切换主题：';
//           color: var(--o-color-text1);
//         }
//       }
//     }
//   }
// }
</style>
