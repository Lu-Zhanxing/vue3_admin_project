<template>
    <div>

    </div>
</template>

<script lang="ts">
import { defineComponent,onMounted } from 'vue'
import { reqLogin } from '@/api/user/index.ts'

export default defineComponent({
    setup () {
        
        onMounted(()=>{
            reqLogin({username:'admin',password:'111111'})
        })

        return {}
    }
})
</script>

<style scoped>

</style>