import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA';

//1安装插件
Vue.use(Vuex)


const state = {//保存状态
  counter:1000,
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
    },
  ],
  info:{
    name:'zzz',
    age:24,
    height:180
  }
}

//2.创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters:{
    powerCounter(state){
      return state.counter * state.counter
    },
    more20stu(state){
      return state.students.filter(s=> s.age>20)
    },
    more20studLength(state,getters){//第二个参数可以传getters
      return getters.more20stu.length
    },
    // moreAgestu(state){
    //   return age=>{ //传入一个参数
    //     return state.students.filter(s=>s.age>age)
    //   }
    // },
    moreAgestu(state){
      return age=>{ state.students.filter(s=>s.age>age)}
    }
  },
  modules:{
    a:moduleA
  }
})

//导出对象
export default store