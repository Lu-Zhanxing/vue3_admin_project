<template>
    <div class="logo" v-if="setting.isShow">
        <img :src="setting.img">
        <p>{{setting.title}}</p>
    </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>

<style scoped lang="scss">
.logo{
    width: 100%;
    height: $base-menu-logo-height;
    display: flex;
    align-items: center;
    padding: 10px;
    img{
        width:30px;
        height: 30px;
    }
    p{
        font-size: $base-logo-title-fontSize;
        color: white;
        margin-left: 10px
    }
}
</style>