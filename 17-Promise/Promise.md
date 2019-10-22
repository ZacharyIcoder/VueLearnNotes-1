### Promise

Promise是一种异步编程的解决方案

## 什么是Promise
Promise是一种JavaScript异步编程的解决方案。

### 使用axaj异步请求
可能会这样嵌套
```
$.ajax({
	$.ajax({
		...
	})
})
```
### Promise基本使用
#### 什么时候使用Promise？
有异步操作时候，对异步操作进行封装。
#### Promise对象

```
new Promise((resolve, reject) => {})
```
Promise对象需要传入一个函数`(resolve, reject) => {}`，这个函数传入的两个参数resolve和reject也是函数。
此时用setTimeout模拟异步请求


    // 参数->函数(resolve,reject)
    // resolve,reject本身又是函数
    new Promise((resolve, reject) => {
      //第一次网络请求
      setTimeout(() => {
        //调用了resolve()就会到then()
        resolve()
      },1000)
    }).then(()=>{
      //第一次请求结果
      console.log("hello promise");
      //返回Promise对象，链式调用
      return new Promise((resolve, reject)=>{
        //第二次网络请求
        setTimeout(()=>{
          resolve()
        },1000)
      }).then(()=>{
        //第二次请求结果
        console.log("hello vue")
      })
    })

调用resolve()就会执行到then()，在then()中可以执行异步代码，在网络请求响应后需要执行的代码，then()中可以返回一个Promise对象，嵌套使用异步请求。
虽然代码变多了，但是逻辑很清晰。
>#### reject()函数和catch()
      // 什么情况下会使用Promise？
      // 一般是有异步操作，使用Promise这个异步操作进行封装
      // new -> 构造函数(1.保存一些状态信息 2.执行传入的函数)
      // 在执行回调函数时候(resolve，reject)本身又是函数
      new Promise((resolve,reject) => {
        setTimeout(() => {
          //成功时候调用resolve
          //失败的时候调用reject
          reject('error message')
        }, 1000);
      }).catch(error => {
        console.log(error)
      })


### Promise的三种状态

- pending:等待状态，正在进行网络请求，或定时时间未到
- fulfil:满足状态，当我们主动回调resolve函数，就处于该状态，并且会回调then()
- reject:拒绝状态，主动回调reject函数，就处于该状态，并且会回调catch()


### Promise其他使用形式

```
    new Promise((resolve,reject) => {
      setTimeout(() => {
        //成功时候调用resolve
        //resolve('success message')
        //失败的时候调用reject
        reject('error message')
      }, 1000);
    }).catch(success => {
      console.log(success)
    },error => {
      console.log(error)
    })
```

### Promise的链式调用

```
    new Promise((resolve, reject) => {
      //第一次网络请求
      setTimeout(() => {
        //调用了resolve()就会到then()
        resolve()
      },1000)
    }).then(()=>{
      //第一次请求结果
      console.log("hello promise");
      //返回Promise对象，链式调用
      return new Promise((resolve, reject)=>{
        //第二次网络请求
        setTimeout(()=>{
          resolve()
        },1000)
      }).then(()=>{
        //第二次请求结果
        console.log("hello vue")
      })
    })
```
第二种
```
 <script>
    //网络请求aaa ->处理（）
    //处理 aaa+111 ->处理
    //处理aaa111+222 ->处理

    new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve('aaa')
      }, 1000);
    }).then(res=>{
      console.log(res)
      return new Promise(resolve=>{
        resolve(res+'111')
      }).then((res)=>{
        console.log(res)
        return new Promise(resolve=>{
          resolve(res+'222')
        }).then(res=>{
          console.log(res)
        })
      })
    })
  </script>
```
简写
```
    //简写
    new Promise(resolve => {
      setTimeout(() => {
        resolve('aaa')
      }, 1000);
    }).then(res => {
      console.log(res)
      return Promise.resolve(res + '111')
    }).then((res) => {
      console.log(res)
      return Promise.resolve(res + '222')
    }).then(res => {
      console.log(res)
    })

    //在简写
    new Promise(resolve => {
      setTimeout(() => {
        resolve('aaa')
      }, 1000);
    }).then(res => {
      console.log(res)
      return es + '111'
    }).then((res) => {
      console.log(res)
      return res + '222'
    }).then(res => {
      console.log(res)
    })
```
catch捕获异常
```
    //catch
    new Promise(resolve => {
      setTimeout(() => {
        resolve('aaa')
      }, 1000);
    }).then(res => {
      console.log(res)
      // return Promise.reject('error message')
      throw 'error message'
    }).then((res) => {
      console.log(res)
      return res + '222'
    }).then(res => {
      console.log(res)
    }).catch(error){
      console.log(error)
    }
```

### Promise的all
如下情况：
有两个网络请求A和B,只有AB都返回结果才进行下一步
ajax可能会这么写
```
$.ajax({
  ...//结果A
  resultA = true
  callback()
})
$.ajax({
  ...//结果B
  resultB = true
  callback()
})
//回调函数
function callback(){
  if(resultA&&resultB){
    ...
  }
}
```
使用Promise的all
```
    Promise.all([
      new Promise((resolve, reject) => {
        $.ajax({
          url:"url1",
          success:function(data){
            resolve(data)
          }
        })
      }),
      new Promise((resolve, reject) => {
        $.ajax({
          url:"url2",
          success:function(data){
            resolve(data)
          }
        })
      }),
    ]).then(res => {
      // result[0]网络请求1的结果
      // result[1]网络请求2的结果
    })
```

