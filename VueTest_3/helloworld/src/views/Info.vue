<template>
  <div>
    <ul>
      <li @click="change(index++)"
          v-for="(item,index) in list" 
          :key="index"
          :class="{active: index==current}"  >{{item}}</li>
    </ul>
    <button @click="add()">添加</button>
    <ul>
      <li v-for="(item,index) in array" :key="index" >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'info',
  data(){
    return {
      current:"",
      list:[1,2,3,4,5,6,7,8,9,10],
      array:[],
    }
  },
  methods: {
    change(index){
      console.log(index)
      this.current=index
    },
    add(){
      console.log(this.list[this.current])
      this.array.push(this.list[this.current])
      this.current=11
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li.active{
  background: green
}
</style>
