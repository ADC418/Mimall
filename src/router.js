import Vue from 'vue'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm.vue' //订单确认
import OrderList from './pages/orderList.vue'//订单列表
import OrderPay from './pages/orderPay.vue'//订单结算
import Router from "vue-router"

Vue.use(Router);//加载插件

export default new Router({
    routes: [ //配置
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect:"/index",//重定向
            children: [
                {
                    path: '/index',//首页
                    name: 'index',
                    component: Index,
                },{
                    path: '/product/:id',//产品 动态定义路由
                    name: 'product',
                    component: Product,
                },{
                    path: '/detail/:id',//详情 动态定义路由
                    name: 'detail',
                    component: Detail,
                }
            ]
        },
        {
            path: '/cart',//购物车
            name: 'cart',
            component: Cart,
        },
        {
            path: '/order',//订单
            name: 'order',
            component: Order,
            children: [
                {
                    path: '/list',//订单列表
                    name: 'order-list',
                    component: OrderList,
                },{
                    path: '/confirm',//订单确认
                    name: 'order-confirm',
                    component: OrderConfirm,
                }, {
                    path: '/pay',//订单结算
                    name: 'order-pay',
                    component: OrderPay,
                }
            ]
        }
    ]
})