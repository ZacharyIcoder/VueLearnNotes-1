## 二、Vue-Router

- 认识路由
- vue-router的使用
- vue-router嵌套路由
- vue-router参数传递
- vue-router导航首位
- keep-alive

### 前端渲染和后端渲染
1. 后端渲染（服务端渲染）
jsp
后端路由，后端处理URL和页面映射关系
2. 前后端分离（ajax请求数据）
后端只负责提供数据
静态资源服务器（html+css+js）
ajax发送网络请求后端服务器，服务器回传数据
js代码渲染dom
3. 单页面富应用（SPA页面）
前后端分离加上前端路由
整个网站只有一个html页面

### 前端路由
1. 通过hash修改
`location.hash='home'`
2. html5的history(栈结构-先进后出)
`history.pushState({},'','home')`入栈
使用`history.back()`出栈
替换`history.replaceState({},'','about')`
go`history.go(-1)`
向前一步`history.forwaed()`等价于`history.go(1)`

### 认识vue-router

安装
`npm install vue-router --save`

    //配置路由相关信息

    import VueRouter from 'vue-router'
    import Vue from 'vue'
    import Home from '../components/Home.vue'
    import About from '../components/About.vue'

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
        component: Home
      },
      {
        path: "/about",
        component: About
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


`<router-link to="/home">首页</router-link>`
路由组件渲染出来是a标签
属性：
- to 路由地址
- tag 默认渲染a标签，可以用`tag='button'`，渲染为button
- replace 使浏览器history无效
- active-class 默认路由被激活状态时class为`router-link-active`,想修改使用`active-class='active'`

`<router-view></router-view>`
路由组件显示组件内容占位

>通过代码跳转路由

    homeClick(){
      //通过代码方式修改路径 vue-router
      this.$router.push("/home")
      //this.$router.replace("/home")
    },
    aboutClick(){
      this.$router.push("/about")
      //this.$router.replace("/about")
    }

### 动态路由
>配置路由

    {
      path: "/user/:userId",//动态路由
      component: User
    }

>设置router-link

  动态路由
  `<router-link :to="/user/+userId">用户</router-link>`
>路由页面获取值
在路由组件出使用`this.$route.params`

    computed: {
        userId(){
          //获取活跃状态的路由
          return this.$route.params.userId
        }
      },
    {{$route.params.userId}}

### 认识路由的懒加载
当打包时候js文件很大，影响加载速度
将不同路由的组件分割成不同的代码块，然后当路由被访问时候才加载对应组件
使用懒加载

    {
      path: "/user/:userId",//动态路由
      component: () => import("../components/Home.vue")
    }


### 路由嵌套

>路由配置

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

>路由组件

    <router-link to="/news">新闻</router-link>
    <router-link to="/messages">消息</router-link>
    <router-view></router-view>



