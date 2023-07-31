<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <p class="big_text">Hello</p>
          <p class="small_text">欢迎来到硅谷甄选项目练习</p>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username" />
          </el-form-item>
          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              type="password"
              show-password
              v-model="loginForm.password"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="login_btn"
              @click="login"
              :loading="loading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
let useStore = useUserStore()
let $router = useRouter()

let loading = ref(false)
let loginForm = reactive({
  username: 'admin',
  password: '11111',
})

const login = async () => {
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    $router.push('/home')
    ElNotification({
      title: '登录成功',
      type: 'success',
    })
  } catch (error) {
    ElNotification({
      title: (error as Error).message,
      type: 'error',
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    padding: 40px;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;

    .big_text {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }

    .small_text {
      font-size: 16px;
      color: #fff;
      padding: 20px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
