import request from '@/utils/request'
import type { TradeMarkResponseData } from './type'

enum API {
  TRADEMARK_URL = '/admin/product/baseTrademark/',
}

// 获取已有品牌的数据
export const reqHasTradeMark = (page: number, limit: number) => {
  return request.get<any, TradeMarkResponseData>(API.TRADEMARK_URL + `${page}/${limit}`)
}
