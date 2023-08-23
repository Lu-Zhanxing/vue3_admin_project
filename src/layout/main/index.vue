<template>
  <router-view v-if="flag"></router-view>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from 'vue'
import useLayoutSettingStore from '@/store/modules/setting'
let LayoutSettingStore = useLayoutSettingStore()
let flag = ref(true)
watch(
  () => LayoutSettingStore.isRefresh,
  () => {
    flag.value = !flag.value
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>

<script lang="ts">
export default {
  name: 'Main',
}
</script>

<style scoped></style>
