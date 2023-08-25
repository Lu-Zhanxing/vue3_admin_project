<template>
  <el-button size="small" icon="Refresh" circle @click="doRefresh" />
  <el-button size="small" icon="FullScreen" circle @click="switchFullScreen" />
  <el-button size="small" icon="Setting" circle />
  <el-avatar
    size="small"
    :src="userStore.avatar"
  />
  <el-dropdown>
    <span class="el-dropdown-link">
      {{userStore.username}}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
let LayoutSettingStore = useLayoutSettingStore()
let userStore = useUserStore()
const doRefresh = () => {
  LayoutSettingStore.isRefresh = !LayoutSettingStore.isRefresh
}
const switchFullScreen = () => {
  let full = document.fullscreenElement
  // 如果不是全屏，切换为全屏
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
</script>

<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style scoped lang="scss">
.el-avatar {
  margin: 0 10px;
}
</style>
