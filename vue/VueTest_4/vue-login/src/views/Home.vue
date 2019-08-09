<template>
 <div class="page">
    <router-view/>
    <ul>
        <li><router-link :to="{name: 'list'}" >新闻列表</router-link></li>
        <li><router-link :to="{name: 'user'}" >个人中心</router-link></li>
    </ul>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'home',
 data() {
 return {

 }
 },
 components: {

 }
}
</script>

<style scoped lang="stylus">
</style>
