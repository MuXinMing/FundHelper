export const request = async (url: string, data: object, method: any, header = {}) => {
  const baseUrl = "http://192.168.31.242:8080/fundHelper/"
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      data,
      method: method,
      header,
      success: (res) => {
        console.log(res);
        const data = res?.data.data
        resolve(data)
      },
      fail: (err) => {
        console.log(err);
        reject(err)
      }
    })
  })
}