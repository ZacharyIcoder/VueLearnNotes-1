<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script type="text/ecmascript-6">
import Cpn from './Cpn.vue'
export default {
  data() {
    return {
      message: "hello webpack",
      name: "zzz"
    };
  },
  methods: {
    btnclick() {}
  },
  components: {
    Cpn
  }
};
</script>

<style scoped lang="stylus">
.title {
  color: green;
}
</style>
