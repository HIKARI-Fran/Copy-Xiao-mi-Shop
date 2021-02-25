import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Index from '../views/index.vue'
import Product from '../views/product.vue'
import Detail from '../views/detail.vue'
import Cart from '../views/cart.vue'
import Order from '../views/order.vue'
import OrderConfirm from '../views/orderConfirm.vue'
import OrderPay from '../views/orderPay.vue'
import OrderList from '../views/orderList.vue'
import AliPay from '../views/aliPay.vue'
import Login from '../views/login.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Home,
    children: [{
      path: '/index',
      name: 'index',
      component: Index,
    }, {
      path: '/product/:id',
      name: 'product',
      component: Product,
    }, {
      path: '/detail',
      name: 'detail',
      component: Detail,
    }]
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }, {
    path: '/order',
    name: 'order',
    component: Order,
    children: [{
        path: 'list',
        name: 'order-list',
        component: OrderList,
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay,
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm,
      }, {
        path: 'alipay',
        name: 'order-alipay',
        component: AliPay,
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
