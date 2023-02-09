import { request } from './../request/index'

export const getSwiperList = function () {
  return request({
    url: "/banner/list"
  })
}

export const getCateList = function() {
  return request({ 
    url: "/shop/goods/category/all" 
  })
}

export function getGoodsList() {
  return request({
    url: "/shop/goods/list"
  })
}

// 商品详情
export function getGoodsInfo(id){
  return request({
    url: "/shop/goods/detail",
    data: {
      id
    }
  })
}