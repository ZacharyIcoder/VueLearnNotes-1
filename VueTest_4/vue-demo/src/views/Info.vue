<template>
  <div class="info">
    <h1>Hello Info</h1>
    <button @click="add()">add</button>
    <div>{{count}}</div>
  </div>
</template>
<script>
import store from '../store'
export default {
    name:'info',
    store,
    data () {
        return {
            count:store.state.count
        }
    },
    methods: {
        add(){
            console.log("add event");
            store.commit('increase');
        }
    }
}
</script>
