<template>
  <!-- <div> -->
    <template v-for="(item, index) in menuList" :key="index">
      <el-menu-item
        v-if="!item.children && item.meta.show"
        :index="item.path"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
      <el-menu-item
        v-if="
          item.children &&
          item.children.length == 1 &&
          item.children[0].meta.show
        "
        :index="item.children[0].path"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
      <el-sub-menu
        :index="item.path"
        v-if="item.children && item.children.length > 1"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  <!-- </div> -->
</template>

<script setup lang="ts">
defineProps(['menuList'])
//@ts-ignore
import { useRouter } from 'vue-router'
let $router = useRouter()
const goRoute = (vc: any) => {
  $router.push(vc.index)
}
</script>

<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<style scoped></style>
