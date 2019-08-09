<template>
<!-- 模板 -->
<!-- 子实例，组件 -->
    <li class="item" @click="handleRemove">{{content}}</li>
</template>
<script>
//脚本，逻辑
export default {
    name:"todoitem",
    props: ['content'],
    methods: {
        handleRemove:function(){
            this.$emit('delete',this.index)
        }
    }
}
</script>
<style scoped>
/* 样式，scoped限制了作用域在此组件中 */
.item {
    color: green;
}
</style>


