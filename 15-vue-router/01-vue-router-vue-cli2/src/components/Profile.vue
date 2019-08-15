<template>
  <div class="page">
    <h2>我是档案页面</h2>
    <p>你好啊</p>
    <h2>{{$route.query}}</h2>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Profile",
  created() {
    console.log("Profile create");
  },
  destroyed() {
    console.log("Profile destroyed");
  }
};
</script>

<style scoped>
</style>
