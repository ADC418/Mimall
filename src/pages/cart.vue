<template>
  <div>
       <order-header></order-header>
        购物车
        <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import NavFooter from "./../components/NavFoot"
export default {
    components:{
        OrderHeader,
         NavFooter
    }
}

</script>
<style>
</style>