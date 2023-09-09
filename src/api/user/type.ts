export interface loginForm {
  username: string
  password: string
}
// 定义全部接口返回的数据都拥有的类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
// 定义登录接口返回的数据类型
export interface loginResponseData extends ResponseData {
  data: string
}

// 定义获取用户信息返回的数据类型
export interface userInfoResponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}

// 这是根据mock的数据写的ts类型
// export interface loginForm {
//   username: string
//   password: string
// }
// export interface dataType {
//   token?: string
//   message?: string
// }
// export interface loginResponseData {
//   code: number
//   data: dataType
// }

// interface userInfo {
//   userId: number
//   avatar: string
//   username: string
//   password: string
//   desc: string
//   roles: string[]
//   buttons: string[]
//   routes: string[]
//   token: string
// }
// interface user {
//   checkUser: userInfo
// }
// export interface userResponseData {
//   code: number
//   data: user
// }
