<template>
  <div class="main-tab-bar">
    <TabBar>
      <TabBarItem path="/home">
        <img slot="item-icon" src="~assets/img/tarbar/home.png" alt="" srcset="">
        <img slot="item-icon-active" src="~assets/img/tarbar/home_active.png" alt="" srcset="">
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/category">
        <template #item-icon>
          <img src="~assets/img/tarbar/category.png" alt="" srcset="">
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tarbar/category_active.png" alt="" srcset="">
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/shop">
        <template #item-icon>
          <img src="~assets/img/tarbar/shop.png" alt="" srcset="">
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tarbar/shop_active.png" alt="" srcset="">
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/me">
        <template #item-icon>
          <img src="~assets/img/tarbar/me.png" alt="" srcset="">
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tarbar/me_active.png" alt="" srcset="">
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script type="text/ecmascript-6">
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    data() {
      return {};
    },
    components: {
      TabBar,
      TabBarItem
    }
  };

</script>

<style scoped>
</style>
