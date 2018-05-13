//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    productList: [{
      src: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/1.png?t=201859',
      title: '猫咪',
      subtitle: '好漂亮的猫咪呀',
      price: '12'
    },
      {
        src: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/1.png?t=201859',
        title: '猫咪',
        subtitle: '好漂亮的猫咪呀',
        price: '12'
      }, {
        src: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/1.png?t=201859',
        title: '猫咪',
        subtitle: '好漂亮的猫咪呀',
        price: '12'
      }]
  },
  onLoad: function () {
  }
})
