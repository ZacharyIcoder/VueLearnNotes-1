<template>
  <div class="page">
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "HelloVueX",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
</style>
