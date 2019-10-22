
## VueX是做什么的？
VueX是一个专门为vue.js应用程序开发的状态管理模式

简单来说就是多个组件都需要的一个变量，放在哪个组件内都不合适，此时由vuex来管理才合适。

### 哪些状态需要VueX管理
多个页面需要共享的，类似java的服务器的application/session，不要什么都放在VueX
- 比如用户登录状态、用户名称、头像、地理位置
- 商品收藏/购物车

### 安装
`npm install vuex --save`

1. src下新建store文件夹，index.js
```
import Vue from 'vue'
import Vuex from 'vuex'

//1安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({
  state:{//保存状态
    counter:1000
  },
  mutations:{

  },
  actions:{

  },
  getters:{

  },
  modules:{

  }
})

//导出对象
export default store
```
2. 导入到man.js
```
import store from './router'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
```

### 定义状态
定义了一个state，`counter:1000`键值对
```
const store = new Vuex.Store({
  state:{//保存状态
    counter:1000
  },
)}
```
### 修改状态
修改counter
```
  mutations:{
    //定义方法默认传递state参数
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter++
    }
  },
```
调用
```
  methods: {
    add() {
      console.log("add");
      this.$store.commit("increment");
    },
    sub() {
      console.log("sub")
      this.$store.commit("decrement");
    }
  }
```
使用`$store.commit('increment')`调用
mutations中不要使用异步方法，actions（异步操作）无法跟踪到

### Getters的使用
Getters类似计算属性computed
```
    students:[
      {
      name:"zzz",
      age:24
      },
      {
      name:"ttt",
      age:19
      },
      {
      name:"yyy",
      age:30


    more20stu(state){
      return state.students.filter(s=> s.age>20)
    }
```
使用
```
    <ul>
      <li v-for="(item, index) in $store.getters.more20stu" :key="index"  >{{item}}</li>
    </ul>
```
补充
```
    more20studLength(state,getters){//第二个参数可以传getters
      return getters.more20stu.length
    }
```
使用传参
```
    moreAgestu(state){
      return age=>{ //传入一个参数
        return state.students.filter(s=>s.age>age)
      }
    }
```

### actions
异步操作，action中调用commit（即mutations），通过promise异步回调


```
  actions:{
    //context上下文
    aUpdateInfo(context,payload){
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          context.commit('modifyInfo')
          console.log(payload)
          resolve('携带数据')
        }, 1000)
      })

    }
  },
```
调用`$store.dispatch('aUpdateInfo',参数)`
```
aUpdateInfo(){
      this.$store.dispatch('aUpdateInfo','这是要传递的信息').then(res=>{
        console.log('已经完成了提交');
        console.log(res)
      })
    }

```

### modules的使用
store可以分割成模块，

```
modules:{
    a:{
      state:{
        name:'zhangsan'
      },
    }
  }
```
调用
```
$store.state.a.name
```

### 对象的结构（ES6）
```
const obj = {
  name:'zzz',
  age:18,
  height:177
}
const {name,age,height} = obj
```
此时会把obj的属性赋值给对应的名字属性


### vuex的推荐目录结构
```
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```