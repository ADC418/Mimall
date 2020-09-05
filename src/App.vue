<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import storage from "./storage/index";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    //方式1 通过本地加载静态json文件的形式实现数据mock ，需要修改代码-baseURL
    // public/ 是根目录，不用写
    // this.axios.get("/mock/user/login.json").then((res)=>{
    //     this.res=res;//修改baseURL地址 axios.defaults.baseURL=""
    // })
    //方式2 通过easy-mock平台实现数据mock
    // this.axios.get("/topics").then(res => {
    //   this.res = res; //也需要修改代码-baseURL 写成接口地址axios.defaults.baseURL="https://cnodejs.org/api/v1"
    // });
    //方式3 本地集成mockjs 实现数据mock 需要定义一个开关 
     this.axios.get("/user/login").then(res => {
      this.res = res; 
      console.log(this.res)
    });
  }
};
</script>

<style>
</style>
