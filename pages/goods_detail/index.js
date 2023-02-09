// pages/goods_detail/index.js
import {
  getGoodsInfo
} from './../../api/indexAPI'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {},
    isCollect: false,
  },

  GoodsInfo: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let pages = getCurrentPages();
    let currentPage = pages[pages.length - 1];
    let options = currentPage.options;
    const {
      id
    } = options;
    this.initGoodsDetail(id);
  },

  async initGoodsDetail(id) {
    const res = await getGoodsInfo(id)
    const {
      data
    } = res.data;
    this.GoodsInfo = data;
    let collect = wx.getStorageSync('collect') || [];
    let isCollect = collect.some(v => v.basicInfo.id === this.GoodsInfo.basicInfo.id);
    console.log(data);

    this.setData({
      goodsObj: {
        goods_name: data.basicInfo.name,
        goods_price: data.basicInfo.minPrice,
        goods_introduce: data.content,
        pics: data.pics,
      },
      isCollect,
    });
    // WxParse.wxParse('article', 'html', data.content, this, 5);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})