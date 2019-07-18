<template>
 <div class="page">
    <ul>
        <li v-for="(item, index) in pageLists" :key="index" >
            {{item.title}}---{{item.content}}
        </li>
    </ul>
 </div>
</template>

<script type="text/ecmascript-6">
import store from '@/store'
    export default {
        data() {
            return {

            }
        },
        store,
        computed: {
            pageLists () {
                return store.state.lists
            }
        },
        components: {

        }
    }
</script>

<style scoped lang="stylus">
</style>
