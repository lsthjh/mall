// index.js
// 获取应用实例
const app = getApp()
import { getSwiperList, getCateList, getGoodsList } from './../../api/indexAPI'
//Page Object
Page({
  data: {
    swiperList: [],
    cateList: [],
    goodsList: []
  },
  //options(Object)
  onLoad: function (options) {
    /* var reqTask = wx.request({
      // url: 'https://api.zbztb.cn/api/public/v1/banner/list',
      url: 'https://api.it120.cc/kotoba/banner/list',
      data: {},
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result);
        this.setData({
          swiperList: result.data.data.slice(1).reverse()
        })
      },
      fail: () => { },
      complete: () => { }
    });
 */
    this.initSwiperList()
    this.initCateList()
    this.initGoodsList()
  },
  
  async initSwiperList() {
    const { data: res } = await getSwiperList()
    this.setData({
      swiperList: res.data.slice(1).reverse()
    })
  },

  async initCateList() {
    const { data: res } = await getCateList()
    let tempList = []
    for (let i = res.data.length, j = 0; i > 0; i -= 8, j++) {
      tempList[j] = res.data.slice(j * 8, (j + 1) * 8)
    }
    this.setData({
      cateList: tempList
    })
  },

  initGoodsList() {
    getGoodsList().then(result => {
      const { data: res } = result;
      if (res.code === 0) {
        this.setData({
          goodsList: res.data
        })
      }
    });
  },

  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  }
});

