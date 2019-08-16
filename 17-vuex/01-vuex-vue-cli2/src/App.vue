<template>
  <div id="app">
    <h2>App内容</h2>
    <h2>{{$store.state.counter}}</h2>
    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button> -->
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">添加学生</button>
    <hr>

    <h2>App内容:Getters相关信息</h2>
    <h2>
      {{$store.getters.powerCounter}}
    </h2>
    <ul>
      <li v-for="(item, index) in $store.getters.more20stu" :key="index"  >{{item}}</li>
    </ul>
    <h2>{{$store.getters.more20studLength}}</h2>
    <h2>{{$store.getters.moreAgestu(25)}}</h2>
    <hr>

    <h2>App内容:info内容是否是响应式的</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click='modifyInfo'>修改信息</button>
    <button @click='aUpdateInfo'>异步修改信息</button>
    <hr>

    <h2>HelloVueX内容</h2>
    <hellovuex></hellovuex>

  <hr>

  <h2>APP内容：module的内容</h2>
  <h2>{{$store.state.a.name}}</h2>

  </div>
</template>

<script>
import hellovuex from "./components/HelloVueX";
export default {
  name: "App",
  components: {
    hellovuex
  },
  methods: {
    add() {
      console.log("add");

      this.$store.commit("increment");
    },
    sub() {
      console.log("sub")
      this.$store.commit("decrement");
    },
    addCount(count){
      console.log(count)
      this.$store.commit('addCount',count)
    },
    addStu(){
      const stu = {name:"yyq",age:29}
      this.$store.commit('addStu',stu)
    },
    modifyInfo(){
      this.$store.commit('modifyInfo')
    },
    aUpdateInfo(){
      this.$store.dispatch('aUpdateInfo','这是要传递的信息').then(res=>{
        console.log('已经完成了提交');
        console.log(res)
      })
    }

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
