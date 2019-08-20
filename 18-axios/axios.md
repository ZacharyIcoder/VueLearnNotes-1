### axios基本使用


### 数组的解构
```
const arr = ['zzz','ttt','ddd']

const {arr1,arr2,arr3} = arr
```
### axios配置
```
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000
```

### axios的all
```
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
```

### axios封装

```
import axios from 'axios'
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000'",
    timeout: 5000
  })
  // 2.发送真正的网络请求
  return instance(config)
}

```
调用
```
request({
  url: "/api/v1/home/multidata",
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

```

### axios拦截器
```instance.interceptors.request.use
instance.interceptors.response.us```


```
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
```