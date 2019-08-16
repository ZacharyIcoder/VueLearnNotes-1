export default {
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
}

