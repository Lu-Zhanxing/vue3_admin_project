<template>   
    <el-icon>
        <Expand />
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

</script>

<script lang="ts">
export default {
    name: 'Breadcrumb',
}
</script>

<style scoped>
</style>