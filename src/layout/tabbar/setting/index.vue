<template>
  <el-button size="small" icon="Refresh" circle @click="doRefresh"/>
  <el-button size="small" icon="FullScreen" circle />
  <el-button size="small" icon="Setting" circle />
  <el-avatar
    size="small"
    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
  />
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
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
let LayoutSettingStore = useLayoutSettingStore()
const doRefresh = () => {
  LayoutSettingStore.isRefresh = !LayoutSettingStore.isRefresh
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
