<script setup lang="ts">
import { useAttrs, ref, watch } from 'vue';
import useClickOutside from '@/opendesign-theme/composables/useClickOutside';
import IconClose from '@/opendesign-theme/components/icons/IconClose.vue';

const props = defineProps({
  close: {
    type: Boolean,
    default: true,
  },
  show: {
    type: Boolean,
    default: false,
  },
});
const attrs = useAttrs();

//点击阴影关闭弹框
const dialogMask = ref(null);
const isClickOutside = useClickOutside(dialogMask);

watch(
  () => {
    return isClickOutside.value;
  },
  (val) => {
    if (props.show && !val) {
      onCloseClick();
    }
  }
);

const emit = defineEmits(['close-click']);

function onCloseClick() {
  emit('close-click');
}
</script>

<template>
  <teleport to="body">
    <div class="o-dialog" :class="{ show: show, hide: !show }" v-bind="attrs">
      <div class="o-dialog-mask" ref="dialogMask"></div>
      <div class="o-dialog-wrap">
        <div v-if="close" class="o-dialog-close-btn" @click="onCloseClick">
          <IconClose />
        </div>
        <div class="o-dialog-head">
          <slot name="head"></slot>
        </div>
        <div class="o-dialog-body">
          <slot></slot>
        </div>
        <div class="o-dialog-foot">
          <slot name="foot"></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss">
@keyframes o-dialog-show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes o-dialog-wrap-show {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.o-dialog {
  visibility: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  &-mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);
  }

  &-wrap {
    position: relative;
    top: -10%;
    z-index: 2000;
    background-color: var(--o-color-bg2);
    min-width: 800px;
    box-shadow: var(--o-shadow-pop);
    @media screen and (max-width: 1023px) {
      min-width: auto;
      width: 90%;
    }
  }

  &-head {
    // padding: 40px 80px 16px;
    font-size: var(--e-font_size-h1);
    line-height: var(--e-line_height-h1);
    text-align: left;
    @media screen and (max-width: 1023px) {
      // padding: 30px 60px 12px;
      font-size: 18px;
    }
  }

  &-body {
    // padding: 0 80px;
    font-size: var(--e-font_size-text);
    line-height: var(--e-line_height-text);
    @media screen and (max-width: 1023px) {
      // padding: 18px 60px;
    }
  }

  &-foot {
    font-size: 16px;
    line-height: 24px;
    font-size: var(--e-font_size-h4);
    line-height: var(--e-line_height-h4);
    @media screen and (max-width: 1023px) {
      padding: 18px 60px;
    }
  }

  &-close-btn {
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;
    z-index: 1;
    line-height: 1;
    font-size: var(--e-font_size-h1);
    color: var(--o-color-text1);
    &:hover {
      color: var(--o-color-brand1);
    }
  }

  &.show {
    opacity: 1;
    visibility: visible;
    animation: o-dialog-show 0.3s;

    .dialog-wrap {
      animation: o-dialog-wrap-show 0.3s ease-in-out;
    }
  }
}
</style>
