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
