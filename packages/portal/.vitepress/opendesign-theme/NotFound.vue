<script setup lang="ts">
import img404 from '@/assets/img/404.svg';
</script>

<template>
  <div class="not-found">
    <img class="img-404" :src="img404" alt="404" />
    <p>页面走丢了</p>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 318px);
  font-size: var(--e-font_size-h2);
  color: var(--e-color-text1);

  .img-404 {
    max-width: 500px;
    object-fit: cover;
    user-select: none;
  }
}
</style>
