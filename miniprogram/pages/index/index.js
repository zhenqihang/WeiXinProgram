Page({

  data:{
   
    vedio:''
   
  },
  suo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  onLoad:function(){
    const db = wx.cloud.database();
    const table = db.collection("moive");
    var that = this;
   
   // console.log(db)
    table.get({
      success: function (res) {
        //获取云开发的全部信息
        console.log(res)
       that.setData({
         vedio:res.data
       })
      }
    })


  }

 
 
})