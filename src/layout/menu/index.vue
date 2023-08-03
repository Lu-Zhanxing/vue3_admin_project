<template>
    <div>
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">数据大屏</el-menu-item>
        <el-sub-menu index="3">
            <template #title>权限管理</template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
            <el-menu-item index="3-3">菜单管理</el-menu-item>
        </el-sub-menu>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>