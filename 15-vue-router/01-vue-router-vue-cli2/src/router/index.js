//配置路由相关信息

import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

// 1.通过Vue.use(插件)，安装插件

Vue.use(VueRouter)

//映射关系
const routes = [
  {
    path:'',
    redirect:'/home'//路径为''自动重定向到/home
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "news",
        component: ()=> import("../components/HomeNews.vue")
      },
      {
        path: "messages",
        component: ()=> import("../components/HomeMessages.vue")
      }
    ]
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/user/:userId",//动态路由
    component: User
  }

]

// 2.创建vueRouter对象
const router = new VueRouter({
  //配置组件和路由之间关系
  routes,
  mode:'history',//修改路由默认模式hash为history
  linkActiveClass:'active',//统一修改被激活状态路由class为active
})

// 3.将router对象传入Vue实例中
export default router