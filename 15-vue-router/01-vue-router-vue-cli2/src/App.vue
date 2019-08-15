<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about"   replace active-class="active" >关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 动态路由 -->
    <router-link :to="/user/+userId">用户</router-link>
    <!-- 通过$route.query传递参数 -->
    <router-link :to="{path:'/profile',query:{id:'zzz',age:18}}">档案</router-link>

    <button @click="linkClick">连接</button>

    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zhangsan"
    };
  },

  methods: {
    homeClick() {
      //通过代码方式修改路径 vue-router
      this.$router.push("/home");
      //this.$router.replace("/home")
    },
    aboutClick() {
      this.$router.push("/about");
      //this.$router.replace("/about")
    },
    linkClick() {
      const obj = {
        path: "/link",
        query: {
          id: 123,
          age: 22,
          height: 188
        }
      };
      this.$router.push(obj);
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
.active {
  color: red;
}
</style>
