<script lang="ts" setup>
import Icon from './Icon.vue';
defineProps({
  size: {
    validator(value: string) {
      return ['large', 'medium', 'small', 'mini', ''].includes(value);
    },
    default: '',
  },
});
</script>

<template>
  <Icon :size="size">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M9.107 5.227c-0.126-0.125-0.197-0.296-0.197-0.473s0.071-0.348 0.197-0.473l1.413-1.413c0.121-0.129 0.29-0.202 0.467-0.202s0.346 0.073 0.467 0.202l12.253 12.253c0.188 0.187 0.293 0.442 0.293 0.707v0.347c-0 0.265-0.106 0.519-0.293 0.707l-12.253 12.253c-0.121 0.129-0.29 0.202-0.467 0.202s-0.346-0.073-0.467-0.202l-1.413-1.413c-0.126-0.125-0.197-0.296-0.197-0.473s0.071-0.348 0.197-0.473l10.773-10.773-10.773-10.773z"
      ></path>
    </svg>
  </Icon>
</template>
