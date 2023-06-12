// logs.js
const util = require('../../utils/util.js')
var GA4=require('../../utils/DA.js');

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
    //页面浏览
    GA4.viewPage("pv_log");
  }
})
