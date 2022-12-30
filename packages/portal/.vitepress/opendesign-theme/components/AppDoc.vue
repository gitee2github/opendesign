<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useData, useRouter, useRoute } from 'vitepress';

import SideBar from './SideBar.vue';
import SideBarMenu from './SideBarMenu.vue';
import TheDocAnchor from './TheDocAnchor.vue';

const { theme, frontmatter } = useData();

const router = useRouter();
const route = useRoute();

const path = route.path;
const routeName = path.split('/')[2];

const sidebarInfo = computed(() => {
  return theme.value.sidebar.find((info: any) => {
    return frontmatter.value.category === info.id;
  });
});

const activeLinkId = ref(routeName);

const handleItemClick = (id: string) => {
  const newHref = `${path
    .substring(0, path.length - 1)
    .replace(/(?<=\/)(?![\w\W]*?\/)[\w\W]*/g, id)}/`;
  router.go(newHref);
};

watch(
  () => {
    return route.path;
  },
  () => {
    const arr: string[] = route.path.split('/');
    activeLinkId.value = arr[arr.length - 2];
  }
);
</script>

<template>
  <SideBar>
    <side-bar-menu
      v-for="item in sidebarInfo.config"
      :info="item"
      :active-id="activeLinkId"
      @item-click="handleItemClick"
    ></side-bar-menu>
  </SideBar>
  <main class="md">
    <Content class="content" />
    <TheDocAnchor />
  </main>
</template>

<style lang="scss" scoped>
main {
  min-width: 1080px;
  display: flex;
  justify-content: center;
  margin-left: 260px;
  min-height: calc(100vh - 80px - 238px);
  padding: 80px 16px 64px;
  @media screen and (max-width: 768px) {
    // margin-left: 0;
    transition: all 0.3s;
  }
  .content {
    max-width: 960px;
    width: 100%;
  }
}
</style>
