### Promise

Promise是一种异步编程的解决方案

使用定时器模拟异步请求

   setTimeout(() => {
     console.log("hello promise");
   }, 1000);

>Promise基本使用

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