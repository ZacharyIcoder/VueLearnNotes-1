<template>
    <div class="tab-bar-item">
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "",
    data() {
      return {

      }
    },
    components: {

    }
  }

</script>

<style scoped>
  .tab-bar-item {
    flex: auto;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }


</style>
