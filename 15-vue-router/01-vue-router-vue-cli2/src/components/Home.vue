<template>
  <div class="page">
    <h2>我是首页</h2>
    <p>你好啊</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/messages">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/news"
    };
  },
  created() {
    console.log("created");
  },
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    console.log("activated");
    //处于活跃状态时候跳转页面
    this.$router.push(this.path);
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开之前记录path
    console.log(this.$route.path);
    this.path = this.$route.path;
    next()
  }
  // deactivated() {
  //   console.log("deactivated");
  //   this.path = this.$route.path
  // },
};
</script>

<style scoped></style>
