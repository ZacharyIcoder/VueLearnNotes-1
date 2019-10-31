import axios from 'axios'


// 4.
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000'",
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.请求拦截
  instance.interceptors.request.use(config => {
    //拦截了config
    console.log(config)
    //1.修改config一些信息
    //2.再发送网络请求，希望再界面显示一个图标
    //3.某些网络请求（比如登录（token）），必须携带一些信息
    // 需要返回
    return config
  }, err => {
    //网络未通
    console.log(err)
  })
  // 响应拦截
  instance.interceptors.response.use(res=>{
    console.log(res)
    return res.data
  },err=>{
    console.log(err)
  })

  // 3.发送真正的网络请求
  return instance(config)
}


// 3.
// export function request(config) {

//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: "http://123.207.32.32:8000'",
//       timeout: 5000
//     })
//     // 2.发送真正的网络请求
//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })

// }

// 2.
// export function request(config) {

//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL:"http://123.207.32.32:8000'",
//     timeout:5000
//   })
//   // 2.发送真正的网络请求
//   instance(config).then(res => {
//     config.success(res)
//   }).catch(err => {
//     config.failure(err)
//   })

// }


// 1.
// export function request(config, success, failure) {

//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL:"http://123.207.32.32:8000'",
//     timeout:5000
//   })
//   // 2.发送真正的网络请求
//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })

// }
