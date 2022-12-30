<script lang="ts" setup>
import { computed, ref } from 'vue';
import IconArrow from './icons/IconArrow.vue';

const props = defineProps({
  info: {
    type: Object,
    default: () => {
      return {};
    },
  },
  activeId: {
    type: String,
    default: '',
  },
});
const isOpen = ref(true);

const isActive = computed(() => {
  return props.info.children.some((item: any) => {
    return item.link === props.activeId;
  });
});

const emit = defineEmits(['item-click']);

const toggleVisible = (flag: boolean | undefined) => {
  if (flag === undefined) {
    isOpen.value = !isOpen.value;
  } else {
    isOpen.value = flag;
  }
};

const onClick = (id: string) => {
  emit('item-click', id);
};

const beforeEnter = (el: HTMLUListElement) => {
  el.style.height = '0px';
};
const enter = (el: HTMLUListElement) => {
  const height = el.scrollHeight;
  el.style.height = `${height}px`;
};
const beforeLeave = (el: HTMLUListElement) => {
  el.style.height = `${el.offsetHeight}px`;
};
const leave = (el: HTMLUListElement) => {
  el.style.height = '0px';
};
</script>

<template>
  <div class="sidebar-menu">
    <div
      class="menu-title"
      @click="toggleVisible(!isOpen)"
      :class="{ open: isOpen, active: isActive }"
    >
      {{ info.name }}
      <IconArrow class="menu-title-icon" />
    </div>
    <transition
      name="menu"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <ul class="menu-list" v-show="isOpen">
        <li
          class="menu-item"
          :class="{ active: activeId === item.link }"
          v-for="item in info.children"
          @click="onClick(item.link)"
        >
          {{ item.name }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-menu {
  position: relative;
  padding: 20px 0;
  .menu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 12px 0 20px;
    font-size: var(--e-font_size-text);
    line-height: var(--e-line_height-text);
    cursor: pointer;

    &-icon {
      transform: rotate(0);
      transition: 0.3s transform cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &:hover {
      color: var(--o-color-brand1);
    }

    &.active {
      color: var(--o-color-brand1);
    }

    &.open {
      .menu-title-icon {
        transform: rotate(90deg);
      }
    }
  }

  .menu-list {
    overflow-y: hidden;
    transition: 0.3s height cubic-bezier(0.645, 0.045, 0.355, 1);
    .menu-item {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 20px 0 36px;
      font-size: var(--e-font_size-text);
      line-height: var(--e-line_height-text);
      cursor: pointer;

      & + .menu-item {
        margin-top: 8px;
      }

      &:hover {
        background-color: var(--o-color-bg23);
        color: var(--o-color-brand1);
      }

      &.active {
        background-color: var(--o-color-bg23);
        color: var(--o-color-brand1);
      }
    }
  }

  & + .sidebar-menu {
    &::before {
      position: absolute;
      content: '';
      top: 0;
      right: -12px;
      width: 100%;
      height: 1px;
      background-color: var(--o-color-division1);
    }
  }
}
</style>
