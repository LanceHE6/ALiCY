Page({
  data:{
    images:[
      "/images/test-1.jpg",
      "/images/test-2.jpg",
      "/images/test-3.jpg"
    ],
    time:{
      "year":2023,
      "month":10,
      "day":11,
      "week":6,
      "weekday":3
    }
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '首页',
      desc: '首页',
      path: 'pages/index/index',
    };
  },
});
