import request from "@/utils/request";

enum API{
    TRADEMARK_URL = '/admin/product/baseTrademark/'
}

// 获取已有品牌的数据
export const reqHasTradeMark = (page:number,limit:number) =>{
    return request.get<any,any>(API.TRADEMARK_URL + `${page}/${limit}`)
}