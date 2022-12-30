<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';

import AppHeader from './components/AppHeader.vue';
import AppDoc from './components/AppDoc.vue';
import AppFooter from './components/AppFooter.vue';

const { theme, frontmatter } = useData();

const docArr = theme.value.doc || [];
const isDoc = computed(() => {
  return docArr.indexOf(frontmatter.value.category) !== -1;
});
</script>

<template>
  <AppHeader :class="{ doc: isDoc }" />

  <!-- 设计规范，组件文档 -->
  <AppDoc v-if="isDoc"> </AppDoc>

  <!-- 其他页面 -->
  <main v-else>
    <Content />
  </main>

  <AppFooter :class="{ doc: isDoc }" />
</template>

<style lang="scss" scoped>
main {
  min-width: 1080px;
  padding-top: 80px;
  background-color: var(--e-color-bg1);
  min-height: calc(100vh - 318px);
}
</style>
