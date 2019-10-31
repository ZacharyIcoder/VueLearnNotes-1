<template>
  <div class="home">
    <NavBar class="home-nav">
      <template #left>
        <div>left</div>
      </template>
      <template #center>
        <div>购物街</div>
      </template>
      <template #right>
        <div>right</div>
      </template>

    </NavBar>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "Home",
    data() {
      return {};
    },
    components: {
      NavBar
    }
  };

</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

</style>
