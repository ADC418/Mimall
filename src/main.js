import Vue from 'vue'
import routers from "./router"

import axios from "axios"
import VueAxios from "vue-axios" //调用时通过this.axios.xxx即可
//import env from  "./env"
import App from './App.vue'

//根据前端的跨域方法做调整  jsonp或cors代理 eg接口写成http:"//www.baidu.com" 不同的跨域方式，配置不同
axios.defaults.baseURL="/";//用接口代理的方式 当前接口的域名和前端一样 习惯写成 /api 
//访问 /a/b : /api/a/b 但在转发时会自动把/api去掉 => /a/b
axios.defaults.timeout=8000;//超时时间 提高用户体验
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
    let res=response.data;
    if(res.status==0){
      return res.data;
    }else if(res.status==10){
      window.location.href="/#/login"
    }else{
      alert(res.msg)
    }
})


Vue.use(VueAxios,axios);//调用时通过this即可

Vue.config.productionTip = false

new Vue({
  router:routers,
  render: h => h(App),
}).$mount('#app')
