<template>
  <div>
    <template v-for="(item,index) in menuList" :key="index">
        <el-menu-item v-if="!item.children && item.meta.show" :index="item.path">
            <span>标</span>
            <span>{{item.meta.title}}</span>
        </el-menu-item>
        <el-menu-item v-if="item.children && item.children.length==1 && item.children[0].meta.show" :index="item.children[0].path">
            <span>标</span>
            <span>{{item.children[0].meta.title}}</span>
        </el-menu-item>
        <el-sub-menu :index="item.path" v-if="item.children && item.children.length>1">
            <template #title>
                <span>标</span>
                <span>{{item.meta.title}}</span>
            </template>
            <Menu :menuList="item.children"></Menu>
        </el-sub-menu>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps(['menuList'])
</script>

<script lang="ts">
export default{
    name:'Menu'
}
</script>

<style scoped></style>
