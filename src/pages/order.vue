<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from "./../components/OrderHeader";
import NavFooter from "./../components/NavFoot"
export default {
  components: {
    OrderHeader,
    NavFooter
  }
};
</script>