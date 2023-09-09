<template>
  <el-card class="box-card">
    <el-button type="primary" icon="Plus">添加</el-button>
    <el-table border style="margin: 10px 0" :data="trademarArr">
      <el-table-column
        label="序号"
        width="80"
        type="index"
        align="center"
      ></el-table-column>
      <el-table-column label="名称" prop="tmName"></el-table-column>
      <el-table-column label="图片">
        <template #="{ row, $index }">
          <img :src="row.logoUrl" style="width: 60px; height: 60px" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #="{ row, $index }">
          <el-button
            type="primary"
            size="small"
            @click=""
            icon="Edit"
          ></el-button>
          <el-button
            type="danger"
            size="small"
            @click=""
            icon="Delete"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[3, 5, 10]"
      background="true"
      layout=" prev, pager, next, jumper, ->, sizes, total"
      :total="total"
    />
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqHasTradeMark } from '@/api/product/trademark/index'
import type { Records, TradeMarkResponseData } from '@/api/product/trademark/type'
const currentPage = ref<number>(1)
const pageSize = ref<number>(3)
const total = ref<number>(0)
const trademarArr = ref<Records>([])

const getHasTrademark = async () => {
  const result:TradeMarkResponseData = await reqHasTradeMark(currentPage.value, pageSize.value)
  if (result.code == 200) {
    total.value = result.data.total
    trademarArr.value = result.data.records
  }
}

onMounted(() => {
  getHasTrademark()
})
</script>

<style scoped></style>
