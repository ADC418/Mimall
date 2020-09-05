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
    // storage.setItem("mall",{"user":{"a":"1","age":18,"sex":1}})
    // storage.setItem("a",1)
    // storage.setItem("user",{"b":1})
    // storage.clear("a");
    // storage.clear("a", "user"); //删除user下的a
  }
};
</script>

<style>
</style>
