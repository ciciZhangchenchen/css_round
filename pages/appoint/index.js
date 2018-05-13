import {formatTime} from '../../utils/util.js';
Page({
  data: {
    array: ['洗澡', '美容', '疫苗'],
    index: 0,
    date: '',
    time: '12:01'
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '当前页面'
    })
    const today = formatTime(new Date())
    this.setData({
      date: today.split(' ')[0]
    })
    this.setData({
      time: today.split(' ')[1].substr(0, 5)
    })
  }
})
