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
    //public/ 是根目录，不用写
    this.axios.get("/mock/user/login.json").then((res)=>{
        this.res=res;//
    })

  }
};
</script>

<style>
</style>
