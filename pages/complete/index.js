import {formatTime} from '../../utils/util.js';
Page({
  data: {
    icon: 'success',
    text: '成功'
  },
  onLoad: function (options) {
    switch (options.type) {
      case 'oppointSuccess':
        this.setData({
          icon: 'success',
          text: '预约成功'
        }); 
        wx.setNavigationBarTitle({
          title: '预约成功'
        })
      break;
      default: break;
    }
  }
})
