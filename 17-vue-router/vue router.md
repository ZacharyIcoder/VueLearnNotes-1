## Vue-Router

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

注意path不加'/'
>路由组件

在Home.vue（需要嵌套的路由组件）


    <router-link to="/news">新闻</router-link>
    <router-link to="/messages">消息</router-link>
    <router-view></router-view>

### vue-router的参数传递

- 动态路由方式：通过`$route.params.userId`获取由`path: "/user/:userId"`，需要传递的参数`<router-link :to="/user/+userId">用户</router-link>`
  - 配置路由方式`/router/:id`
  - 传递方式**在path后面跟上对应的值**
  - 传递后形成的路径：**/router/123、/router/aaa**
- 通过`$route.query`获取传过来的对象,路由配置`path: "/user"`,传递参数`  <router-link :to="{path:'/profile',query:{id:'zzz',age:18}}">档案</router-link>`
  - 配置路由方式`/router`，跟普通配置一样
  - 传递的方式：对象中使用**query的key作为参数传递**
  - 传递后的路径：**/router?id=123、/router?id=aaa**

- 通过方法传递`$router.push()`

        linkClick() {
          const obj = {
            path: "/link",
            query: {
              id: 123,
              age: 22,
              height: 188
            }
          };
          this.$router.push(obj);
        }

### 理解vue-router-router和route的由来


### vue-router全局导航守卫

SPA页面修改title，使用全局导航守卫

定义meta元数据

    {
      path: "/home",
      component: Home,
      meta: { //元数据
        title: "首页"
      }
    }


通过beforeEach(to,from,next)获取，不调用next,路由无法跳转

    //前置钩子(守卫)跳转前-----全局守卫
    router.beforeEach((to, from, next) => {
      //获取要跳转的路由的元数据
      document.title = to.meta.title
      //document.title = to.matched[0].meta.title//嵌套路由时候可以使用这个获取父路由元数据
      //调用next()
      next()
    })

`next('\')`跳转到\，`next(false)`不跳转

//后置钩子(守卫)跳转后,不需要主动调用next()-----全局守卫

    router.afterEach((to,from)=>{
      console.log(to);
    })

路由独享守卫

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
  }

[更多详见Vue-Router](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E8%B7%AF%E7%94%B1%E7%8B%AC%E4%BA%AB%E7%9A%84%E5%AE%88%E5%8D%AB)


### keep-alive

- keep-alive是Vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染
- router-view也是一个组件，如果直接被包在keep-alive里面，所有路径匹配到的视图组件都被缓存

两个函数：

    activated() {
        console.log("activated");
        //处于活跃状态时候跳转页面，活跃状态调用
        this.$router.push(this.path);
      },
      deactivated() {
        //失去活跃状态调用
        console.log("deactivated");
      },

属性：

- include - 字符串或正则表达式，只有匹配的才会缓存
- exclude - 字符串或正则表达式，只有匹配的才不会缓存

### TabBar案例
首页/分类/购物车/我的

-  style中引用使用@import
- 路径起别名（webpack配置文件）

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'views': resolve('scr/views')
    }
  },

>引用路径
- import TabBarItem from "components/tabbar/TabBarItem";
- `<img src="~assets/img/tarbar/shop.png" alt="" srcset="">`需要使用~
vue-cli3中先定义了`'@': resolve('src'),`,可以使用`'assets': resolve('@/assets'),`

