import request from '@/utils/request'
// import type { loginForm, loginResponseData, userResponseData } from './type'
import type { loginForm, loginResponseData, userInfoResponseData } from './type'

// enum API {
//   LOGIN_URL = '/user/login',
//   USERINFO_URL = '/user/info',
// }
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

export const reqLogin = (data: loginForm) => {
  return request.post<any, loginResponseData>(API.LOGIN_URL, data)
}

export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERINFO_URL)

export const reqLogout = () => request.post<any,any>(API.LOGOUT_URL)
