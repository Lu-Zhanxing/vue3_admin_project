import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/api/user/index'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routes'

let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
    }
  },
  actions: {
    async userLogin(data: loginForm) {
      let result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    async userInfo() {
      let resultUserInfo = await reqUserInfo()
      if (resultUserInfo.code == 200) {
        this.username = resultUserInfo.data.checkUser.username
        this.avatar = resultUserInfo.data.checkUser.avatar
        return 'ok'
      } else {
        return Promise.reject(new Error(resultUserInfo.data.message))
      }
    },
    userLogout() {
      REMOVE_TOKEN()
      this.username = ''
      this.avatar = ''
    },
  },
  getters: {},
})

export default useUserStore
