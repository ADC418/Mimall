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
    axios({
      url:"https://cnodejs.org/api/v1/topics",
      method:"get"
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
