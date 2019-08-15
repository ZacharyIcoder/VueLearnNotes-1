<template>
  <div id="app">
    <TarBar>
      <TabBarItem>
        <img slot="item-icon" src="./assets/img/tarbar/home.png" alt="" srcset="">
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem>
        <template #item-icon>
          <img src="./assets/img/tarbar/categories.png" alt="" srcset="">
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </TabBarItem>
      <TabBarItem>
        <template #item-icon>
          <img src="./assets/img/tarbar/shop.png" alt="" srcset="">
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem>
        <template #item-icon>
          <img src="./assets/img/tarbar/me.png" alt="" srcset="">
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </TabBarItem>
    </TarBar>
  </div>
</template>

<script>
  import TarBar from './components/tabbar/TabBar'
  import TabBarItem from './components/tabbar/TabBarItem'
  export default {
    name: 'App',
    components: {
      TarBar,
      TabBarItem
    }
  }

</script>

<style>
  /* style中引用使用@import */
  @import url('./assets/css/base.css');

</style>
