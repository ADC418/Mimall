import Vue from 'vue'
import Router from "vue-router"

import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm' //订单确认
import OrderList from './pages/orderList'//订单列表
import OrderPay from './pages/orderPay'//订单结算
import AliPay from './pages/alipay'//中间页
import Login from "./pages/login.vue"

Vue.use(Router);//加载插件

const route=new Router({
    routes: [ //配置
        {
            path: '/',
            name: 'home',
            component: Home,//组件 不用加s
            redirect:"/index",//重定向 默认的跳转到index
            //父路由是Home 加载子路由一定会加载Home组件
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
                    path: '/detail/:id',//商品详情 动态定义路由
                    name: 'detail',
                    component: Detail,
                }
            ]
        },
        {
            path: '/cart',//购物车 单独页面
            name: 'cart',
            component: Cart,
        },
        {
            path: '/login',//登录 单独页面
            name: 'login',
            component: Login,
        },
        {
            path: '/order',//订单
            name: 'order',
            component: Order,
        //父路由是order 加载子路由一定会加载order组件
            children: [//子路由 会自动带上前面的路由/order
                {
                    path: 'list',//订单列表 不用加/
                    name: 'order-list',
                    component: OrderList,
                },{
                    path: 'confirm',//订单确认
                    name: 'order-confirm',
                    component: OrderConfirm,
                }, {
                    path: 'pay',//订单结算
                    name: 'order-pay',
                    component: OrderPay,
                },{
                    path: 'alipay',//中间页
                    name: 'ali-pay',
                    component: AliPay,
                }
            ]
        }
    ]
})

export default route