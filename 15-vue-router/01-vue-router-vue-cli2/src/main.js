import Vue from 'vue'
import App from './App'
import router from './router'//会在router文件夹中自动招index.js

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
