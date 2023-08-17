<template>
  <el-icon @click="changeIcon" style="margin-right: 10px;">
    <!-- <Expand /> -->
    <component :is="LayoutSettingStore.fold?'Expand':'Fold'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">
      <el-icon>
        <Lock />
      </el-icon>
      <span>权限管理</span>
    </el-breadcrumb-item>
    <el-breadcrumb-item>
      <el-icon>
        <User />
      </el-icon>
      <span>角色管理</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting'
let LayoutSettingStore = useLayoutSettingStore()
const changeIcon = ()=>{
    LayoutSettingStore.changeFold()
}


</script>

<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped></style>
