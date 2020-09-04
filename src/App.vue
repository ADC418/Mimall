<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'

export default {
  name: "App",
  components: {
   
  },
  data() {
    return {
     
    };
  },
  mounted() {
    //storage.setItem("a",1)
    storage.setItem("mall",{"user":{"username":"jack","age":18,"sex":1}})
  },
};
</script>

<style>

</style>
