let ajaxTimes = 0;
export const request = (params) => {
  ajaxTimes++
  wx.showLoading({
    title: '加载中...',
    mask: true
  })
  const baseUrl = "https://api.it120.cc/kotoba";
  return new Promise((resolve, reject) => {
    wx.request({
      // url: '',
      // data: {},
      // header: { 'content-type': 'application/json' },
      // method: 'GET',
      // dataType: 'json',
      // responseType: 'text',
      ...params,
      url: baseUrl + params.url,
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        ajaxTimes--;
        if (ajaxTimes === 0) {
          wx.hideLoading();
        }
      }
    });

  })
}