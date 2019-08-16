import Vue from 'vue'
import App from './App'
import axios from 'axios';

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})






//1.axios基本使用
// axios({
//   url:"http://123.207.32.32:8000/api/v1/home/multidata",
//   method:'get'
// }).then(res=>{
//   console.log(res)
// })

// axios({
//   url:"http://123.207.32.32:8000/api/v1/home/data",
//   //专门针对get请求的参数拼接
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res)
// })


//axios配置
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

// 2.axios发送并发请求
axios.all([
  axios({
    url:"/api/v1/home/multidata"
  }),
  axios({
    url:"/api/v1/home/data",
    params:{
      type:'sell',
      page:4
    }
  })
]).then(res=>{
  //res数组
  console.log(res);
})
//then((res1,res2)=>{console.log(res1);console.log(res2)})

axios({
  url:'/category',
})

