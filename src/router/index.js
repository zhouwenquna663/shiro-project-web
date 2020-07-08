import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "login",
  },
  {
    path: '/index',
    redirect: "home",
    name: 'index',
    component: () => import(/* webpackChunkName: "login" */ '../views/index/index.vue'),
    children:[
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "login" */ '../views/home/home.vue'),
      },{
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/user.vue')
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
  },{
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test/test.vue')
  },{
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
