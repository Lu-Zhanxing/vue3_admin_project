<template>
    <div>
        <!-- <SvgIcon name="home" color="red"></SvgIcon> -->
        <h1>你好</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import request from '@/utils/request'
export default defineComponent({
    setup() {
        onMounted(() => {

            request({
                url: '/user/login',
                method: 'post',
                data: {
                    username: 'admin',
                    password: '111111'
                }
            }).then(res => {
                console.log(res)
            })
        })
        return {}
    },
})
</script>

<style scoped lang="scss">
div {
    h1 {
        color: $color;
    }
}
</style>
