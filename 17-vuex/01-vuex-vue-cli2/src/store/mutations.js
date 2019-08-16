
  const mutations = {
    //定义方法默认传递state参数
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter++
    },
    addCount(state,count){
      state.counter+=count
    },
    addStu(state,stu){
      state.students.push(stu)
    },
    modifyInfo(state){
      state.info.name='ytz'
    }
  }

//导出对象
export default mutations