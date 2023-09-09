<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="LayoutSettingStore.fold ? 'fold' : ''">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          background-color="#001529"
          text-color="#fff"
          :default-active="$route.path"
          :collapse="LayoutSettingStore.fold ? true : false"
          :collapse-transition="false"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="LayoutSettingStore.fold ? 'fold' : ''">
      <Tabbar></Tabbar>
    </div>
    <div class="layout_main" :class="LayoutSettingStore.fold ? 'fold' : ''">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Tabbar from './tabbar/index.vue'
import Main from './main/index.vue'
import useUserStore from '@/store/modules/user'
import useLayoutSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'
let $route = useRoute()
let userStore = useUserStore()
let LayoutSettingStore = useLayoutSettingStore()
</script>

<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    transition: all 0.3s;

    &.fold {
      width: $base-menu-min-width;
    }
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $tabbar-base-height;
    position: fixed;
    top: 0;
    left: $base-menu-width;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $tabbar-base-height);
    position: absolute;
    top: $tabbar-base-height;
    left: $base-menu-width;
    overflow: auto;
    padding: 10px;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
