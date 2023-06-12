//初始化谷歌数据分析
import GA4Tool from '../utils/GA4.js';
var apiSecret = 'VLfdAMiSSQqfUMb0_X-Hdg';
var measurementId = 'G-M61TCPNP2L';
var clientId = '5393100480';
var GA4 = GA4Tool.createClient(apiSecret, measurementId, clientId);


//监测页面
const viewPage = page => {

  return new Promise((resolve, reject) => {
    
    var pages = getCurrentPages();
    var prepage = '';
    if (pages.length == 1) {
      prepage = '';
    } else {
      prepage = pages[pages.length - 2].route;
    }

    GA4.send([{
      name: 'page_view',
      params: {
        page_location: page,
        page_referrer: prepage
      }
    }]);
  })

}

//监测事件
const viewClick = (page, action, label) => {
  return new Promise((resolve, reject) => {

    GA4.send([{
      name: 'click',
      params: {
        page: page,
        action: action,
        label: label,
      }
    }]);

  })

}


module.exports = {
  viewPage: viewPage, //监测页面
  viewClick: viewClick, //监测点击事件
}