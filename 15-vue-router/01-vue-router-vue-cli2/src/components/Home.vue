<template>
  <div class="page">
    <h2>我是首页</h2>
    <p>你好啊</p>
    <router-link to="/news">新闻</router-link>
    <router-link to="/messages">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }

</script>

<style scoped></style>
