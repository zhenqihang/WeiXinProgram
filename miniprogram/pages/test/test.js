const db = wx.cloud.database();
const images = db.collection("image");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:null
  },


  selectImage:function(e){
      wx.chooseVideo({
        success:chooseResult=>{
          wx.cloud.uploadFile({
            cloudPath:`img/${Math.floor((Math.random()*1000000))}.mp4`,
            filePath:chooseResult.tempFilePath,
            success:res=>{
              wx.showToast({
                title: '上传成功',
              })
            },
          })
        }
      })
  },

  onSubmit:function(e){
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})