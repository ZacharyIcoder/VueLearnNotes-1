<template>
 <div class="page">
   <h2>我是用户页面</h2>
   <p>用户你好啊</p>
   <h2>{{userId}}</h2>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
name:"User",
computed: {
    userId(){
      //获取活跃状态的路由
      return this.$route.params.userId
    }
  },

}
</script>

<style scoped>
</style>
