<template>
 <div class="page">
    <p>标题</p>
    <input type="text" v-model="title" />
    <p>内容</p>
    <input type="text" v-model="content" />
    <div class="btn" @click="add" >添加</div>
 </div>
</template>

<script type="text/ecmascript-6">
    import store from '@/store'
    export default {
        data() {
            return {
                title:'',
                content:''
            }
        },
        methods: {
            add(){
                store.commit('addItem',{
                    title: this.title,
                    content: this.content
                })
                this.title=""
                this.content=""
                this.$router.push('/home/list')
            }
        },
        components: {

        }
    }
</script>

<style scoped lang="stylus">
</style>
