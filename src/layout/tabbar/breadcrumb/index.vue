<template>
  <el-icon @click="changeIcon" style="margin-right: 10px">
    <!-- <Expand /> -->
    <component :is="LayoutSettingStore.fold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      key="index"
      :to="{ path: item.path }"
      v-show="item.meta.title"
    >
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span style="margin: 0px 2px; vertical-align: top">
        {{ item.meta.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'
let LayoutSettingStore = useLayoutSettingStore()
let $route = useRoute()
const changeIcon = () => {
  LayoutSettingStore.changeFold()
}
</script>

<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped></style>
