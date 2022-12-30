<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
const siderbarRef = ref<HTMLElement>();
const setHeader = () => {
  const scrollLeft = document.documentElement.scrollLeft;
  if (siderbarRef.value) {
    siderbarRef.value.style.left = `-${scrollLeft}px`;
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
  <aside class="sidebar" ref="siderbarRef">
    <slot></slot>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 80px;
  width: 260px;
  padding: 0 12px;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  color: var(--o-color-text1);
  background-color: var(--o-color-bg2);
  border-right: 1px solid var(--o-color-division1);
  font-weight: normal;
  // transition: all 0.3s;

  // @media screen and (max-width: 768px) {
  //   transform: translateX(-100%);
  // }

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: var(--o-color-division1);
    background-clip: content-box;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0;
    box-shadow: none;
    background: var(--o-color-bg2);
    // background:transparent;
  }

  &-title + .sidebar-title {
    margin-top: 28px;
  }
}
</style>
