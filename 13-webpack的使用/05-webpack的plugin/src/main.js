//1.使用CommonJs规范
const {
  add,
  mul
} = require('./js/mathUtil.js')

console.log(add(10, 20));
console.log(mul(10, 20));
//2.使用ES6的模块化规范
import {
  name,
  age,
  height
} from './js/info.js'

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件(需要使用loader)
require("./css/normal.css")

// 4.依赖less文件
require("./css/special.less")

// 5.使用vue开发
import Vue from 'vue'
// import App from './js/app.js'
import App from './vue/App.vue'

const app = new Vue({
  el:"#app",
  template:"<App/>",
  components:{
    App
  }
})



//webpack打包在01-webpack的起步目录下打开终端 webpack ./scr/main.js -o ./dist/bundle.js
//webpack@3.6(低版本使用) 使用webpack ./scr/main.js ./dist/bundle.js
