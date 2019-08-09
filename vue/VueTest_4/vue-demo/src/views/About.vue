<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{count}}</div>
  </div>
</template>
<script>
import store from '../store'
export default {
  name:'about',
  store,
  data () {
    return {
      count:store.state.count
    }
  }
}
</script>
