## 一、Vue Cli
### vue-cli使用前提
vue-cli需要webpack
webpack依赖node
所以vue-cli依赖node8.9以上

### vue-cli安装
`npm install -g @vue/cli`
安装完毕使用：
`vue --version`
Vue CLI >= 3 和旧版使用了相同的 vue 命令，所以 Vue CLI 2 (vue-cli) 被覆盖了。如果你仍然需要使用旧版本的 vue init 功能，你可以全局安装一个桥接工具：

    npm install -g @vue/cli-init
    # `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
    vue init webpack my-project

vue-cli-3
使用`vue create my-project`

### vue-cli2-test
1. build/config都是存放vue-cli的webpack的相关配置
2. node_modules是存放需要的依赖模块
3. src源码
4. static 静态资源,会完全复制到dist文件夹
5. .babelrc(ES转化配置文件)
6. .editorconfig(编码配置文件)
7. .eslintignore(忽略一些不规范的代码)
8. .eslintrc(es配置文件)
9. .postcssrc.js(css转化配置)
10. index.html(模板)
11. package.json(包管理,记录大概安装的版本)
12. package-lock.json(记录真实安装版本)

### 安装cli错误和ESLint规范
1. 以管理员使用cmd
2. 清空npm-cache缓存
ESLint检测代码规范

### 理解runtime-compiler和runtime-only区别
>runtime-compiler

    import Vue from 'vue'
    import App from './App'

    Vue.config.productionTip = false

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      components: { App },
      template: '<App/>'
    })
>runtime-only

    import Vue from 'vue'
    import App from './App'

    Vue.config.productionTip = false

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      render: h => h(App)
    })

`render: h => h(App)`

    render:function(h){
      return h(App)
    }


**runtime-compiler**
template会被解析 => ast(抽象语法树) => 然后编译成render函数 => 渲染成虚拟DOM（vdom）=> 真实dom(UI)
**runtime-only**(1.性能更高，需要代码量更少)
render => vdom => UI

>render函数

    render:function(createElement){
      //1.createElement('标签',{标签属性},[''])
      return createElement('h2',
        {class:'box'},
        ['Hello World',createElement('button',['按钮'])])
      //2.传入组件对象
      //return createElement(cpn)
    }


.vue文件的template是由vue-template-compiler解析

### vue-cli2和vue-cli3区别
- vue-cli3基于webpack4，vue-cli2基于webpack3
- vue-cli3的设计原则是0配置，移除build/config等目录
- vue-cli3提供vue ui命令，提供可视化配置
- 移除了static文件夹，新增public文件夹，并且将index.html移入public


### vue-cli3-test

1. public()
2. src(源码)

`Vue.config.productionTip = false`构建信息是否显示

vue-cli3配置文件查看和修改
通过vue ui图形化设置

新建一个vue.config.js


## 二、Vue-Router

- 认识路由
- vue-router的使用
- vue-router嵌套路由
- vue-router参数传递
- vue-router导航首位
- keep-alive

## 三、Vuex

## 四、网络请求封装（axios）