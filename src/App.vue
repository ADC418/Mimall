<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import axios from "axios";
//import jsonp from "jsonp"
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      age:30,
      data:""
    }
  },
  mounted(){
    //axios是在network中的XHR中查看
    // axios({
    //   url:"https://cnodejs.org/api/v1/topics",
    //   method:"get"
    // }).then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // })
    
    // jsonp(url,(err,res)=>{
    //   //jsonp是在network中的js查看
    //   let result=res;
    //   this.data=result;
    // })
    axios({
      url:"/api/v1/topics",
      method:"get",
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
