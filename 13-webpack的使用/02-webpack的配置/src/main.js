//使用CommonJs规范
const {
  add,
  mul
} = require('./mathUtil.js')

console.log(add(10, 20));
console.log(mul(10, 20));
//使用ES6的模块化规范
import {
  name,
  age,
  height
} from './info.js'

console.log(name);
console.log(age);
console.log(height);


//webpack打包在01-webpack的起步目录下打开终端 webpack ./scr/main.js -o ./dist/bundle.js
//webpack@3.6(低版本使用) 使用webpack ./scr/main.js ./dist/bundle.js