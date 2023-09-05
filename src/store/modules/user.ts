import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user/index'
import type { loginForm, loginResponseData, userInfoResponseData } from '@/api/user/type'
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
        this.token = result.data as string
        SET_TOKEN(result.data as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    async userInfo() {
      let resultUserInfo: userInfoResponseData = await reqUserInfo()      
      if (resultUserInfo.code == 200) {
        this.username = resultUserInfo.data.name
        this.avatar = resultUserInfo.data.avatar
        return 'ok'
      } else {
        return Promise.reject(new Error(resultUserInfo.message))
      }
    },
    async userLogout() {
      let result: any = await reqLogout()
      if (result.code == 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()
        return 'ok'
      }else{
        return Promise.reject(new Error('退出登录失败'))
      }     
    },
  },
  getters: {},
})

export default useUserStore
