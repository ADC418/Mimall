import Vue from 'vue'
import routers from "./router"

import axios from "axios"
import VueAxios from "vue-axios" //调用时通过this.axios.xxx即可

import store from './store/index.js'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload' //图片懒加载
import VueCookie from "vue-cookie"


Vue.use(VueLazyLoad, {
  loading: "/imgs/loading-svg/loading-bars.svg"
})
Vue.use(VueCookie)

const mock = true;//定义一个开关
if (mock) {
  require('./mock/api');//因为import是预编译加载,编译的时候，import加载的文件就会执行  require不是从上到下执行的时候加载
}
//根据前端的跨域方法做调整  jsonp或cors代理 eg接口写成http:"//www.baidu.com" 不同的跨域方式，配置不同
axios.defaults.baseURL = "/api";//用接口代理的方式 当前接口的域名和前端一样 习惯写成 /api 
//访问 /a/b : /api/a/b 但在转发时会自动把/api去掉 => /a/b
axios.defaults.timeout = 8000;//超时时间 提高用户体验
//根据环境变量获取不同的请求地址
//axios.defaults.baseURL=env.baseURL
//inter 拦截器  接口错误拦截
/* 
接口规范
{
  status:0，//状态码
  data:[];//数据 返回前端即可
  msg:''；//错误信息
}
*/
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = location.hash;
  if(res.status == 0){
    return res.data;
  } else if (res.status == 10) {
    if (path != "#/index") {
      //在首页就不用调转
      window.location.href = '/#/login';
    }
   
    //return Promise.reject(res);
  } else {
    alert(res.msg);
    return Promise.reject(res);
  }
});

Vue.use(VueAxios, axios);//调用时通过this即可

Vue.config.productionTip = false

new Vue({
  store,
  router: routers,
  render: h => h(App),
}).$mount('#app')
