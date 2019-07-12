<template>
  <!-- 改造VueTest_2的test4.html -->
  <div id="app">
    <input v-model="inputValue" />
    <button @click="handlerClick">提交</button>
    <todoitem v-for="(item,index) of list" :key="index" :content="item" :index="index" @delete="handlerDelete"></todoitem>
    <hr>
    <info :msg='inputValue'></info>
  </div>
</template>

<script>
import todoitem from './components/todoitem.vue'//导入todoitem.vue的组件
import info from './components/info.vue'

export default {
  name: 'app',
  data () {
    return {
      inputValue:"",
      list:[]
    }
  },
  components: {
    todoitem,//局部组件注册
    info
  },
  methods: {
    handlerClick:function(){
      this.list.push(this.inputValue);    
    },
    handlerDelete:function(index){
      this.list.splice(index,1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
