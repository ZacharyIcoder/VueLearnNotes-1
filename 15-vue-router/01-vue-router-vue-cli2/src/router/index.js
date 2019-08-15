//配置路由相关信息

import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

// 1.通过Vue.use(插件)，安装插件

Vue.use(VueRouter)

//映射关系
const routes = [{
    path: '',
    redirect: '/home' //路径为''自动重定向到/home
  },
  {
    path: "/home",
    component: Home,
    meta: { //元数据
      title: "首页"
    },
    beforeEnter: (to, from, next) => {
      // 进入之前
      console.log("11111");

      next()
    },

    children: [
      // {
      //   path: "",
      //   redirect: "news"
      // },
      {
        path: "news",
        component: () => import("../components/HomeNews.vue"),
        meta: { //元数据
          title: "新闻"
        }
      },
      {
        path: "messages",
        component: () => import("../components/HomeMessages.vue")
      }
    ]
  },
  {
    path: "/about",
    component: About,
    meta: { //元数据
      title: "关于"
    }
  },
  {
    path: "/user/:userId", //动态路由
    component: User,
    meta: { //元数据
      title: "用户"
    }
  },
  {
    path: "/profile", //动态路由
    component: () => import("../components/Profile.vue"),
    meta: { //元数据
      title: "档案"
    }
  },
  {
    path: "/link",
    component: () => import("../components/Link.vue"),
    meta: { //元数据
      title: "连接"
    }
  }

]

// 2.创建vueRouter对象
const router = new VueRouter({
  //配置组件和路由之间关系
  routes,
  mode: 'history', //修改路由默认模式hash为history
  linkActiveClass: 'active', //统一修改被激活状态路由class为active
})

//前置钩子(守卫)跳转前-----全局守卫
router.beforeEach((to, from, next) => {

  // document.title = to.meta.title
  document.title = to.matched[0].meta.title
  //调用next()
  next()
})
//后置钩子(守卫)跳转后,不需要主动调用next()-----全局守卫
router.afterEach((to,from)=>{
  console.log(to);
})


// 3.将router对象传入Vue实例中
export default router
