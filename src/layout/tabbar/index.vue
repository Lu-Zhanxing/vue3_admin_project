<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="tabbar-right">
      <Setting></Setting>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>

<style scoped lang="scss">
.tabbar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 100%;

  .tabbar-left {
    display: flex;
    align-items: center;
  }

  .tabbar-right {
    display: flex;
    align-items: center;
  }
}
</style>
