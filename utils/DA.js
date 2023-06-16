//初始化谷歌数据分析
import GA4Tool from '../utils/GA4.js';
var apiSecret = 'xxx';//Measurement Protocol API 密钥
var measurementId = 'G-xxx';//衡量 ID
var clientId = 'xxxx';//数据流 ID
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
        page_referrer: prepage,
        utm_campaign: '',//utm追踪参数
        utm_source: '',//utm追踪参数
        utm_content: '',//utm追踪参数
        utm_medium: '',//utm追踪参数
        scene_name:'',//场景值，参照 https://developers.weixin.qq.com/minigame/dev/reference/scene-list.html
        user_id:'',//用户id，可用openid/userid
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
        utm_campaign: '',//utm追踪参数【可选】
        utm_source: '',//utm追踪参数【可选】
        utm_content: '',//utm追踪参数【可选】
        utm_medium: '',//utm追踪参数【可选】
        scene_name:'',//场景值，【可选】参照 https://developers.weixin.qq.com/minigame/dev/reference/scene-list.html
        user_id:'',//用户id，可用openid/userid【可选】
      }
    }]);

  })

}


module.exports = {
  viewPage: viewPage, //监测页面
  viewClick: viewClick, //监测点击事件
}
