const path = require('path')//获取node模块

module.exports = {
  entry: "./src/main.js",//导入入口
  output: {//导出出口
    path:path.resolve(__dirname,'dist'),//动态获取路径，绝对路径
    filename:"bundle.js"//名字
  }
}
//到02-webpack的配置目录
//1.使用npm init 初始化
//2.取一个英文名（中文可能有问题）
//3.npm install安装依赖包
//4.webpack
//5.在package.json中scripts中添加"build": "webpack"，使用npm run build，此时执行的是"webpack",优先寻找本地的webpack版本，本地没有全局（终端执行的是全局的）,package.json中依赖了webpack，使用npm install安装依赖包，会使用安装的webpack
//npm install webpack@3.6.0 --save-dev
//此时webpack使用的是本地的3.6.0的
