<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
        <Logo></Logo>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar"></div>
    <div class="layout_main">
      <p style="height: 1000px">12</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: #bfa;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
  }
  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $tabbar-base-height;
    background-color: cyan;
    position: fixed;
    top: 0;
    left: $base-menu-width;
  }
  .layout_main {
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $tabbar-base-height);
    background-color: yellow;
    position: absolute;
    top: $tabbar-base-height;
    left: $base-menu-width;
    overflow: auto;
    padding: 10px;
  }
}
</style>
