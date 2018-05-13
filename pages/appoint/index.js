import {formatTime} from '../../utils/util.js';
Page({
  data: {
    store: ['爪爪宠物', '逗丁屋'],
    array: ['洗澡', '美容', '疫苗'],
    index: 0,
    date: '',
    time: '12:01',
    hideLoading: true
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
  submitAppoint: function () {
    const self = this;
    self.setData({
      hideLoading: false
    })
    setTimeout(() => {
      self.setData({
        hideLoading: true
      });
      wx.navigateTo({ url: `../complete/index?type=oppointSuccess` })
    }, 2000);
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '我要预约'
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
