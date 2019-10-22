### 认识webpack

静态模块打包工具，模块化和打包
#### 模块化
AMD,CMD,CommonJs，ES6

webpack可以将以上转化为浏览器认识的代码，可以处理模块依赖
js，css，图片，json文件都可以当作模块
#### 打包
**和grunt/glup的对比**
- grunt/glup的核心是Task
  - 我们可以配置一系列的task，并且定义task要处理的事务（例如ES6/TS转化，图片压缩，scss转css）
  - 之后可以让grunt/glup来执行依次这些任务，让整个流程自动化
  - 所以grunt/glup也被称为前端自动化任务管理工具
- 看一个gulp例子
  - task将src下的js文件转化为ES5语法
  - 并输入到dist文件夹中
<pre>const gulp = require('gulp')
    const babel = require('gulp-babel')
    gulp.task('js'()=>
      gulp.src('src/*.js')
        .pipe(babel({
          presets:['es2015']
        }))
        .pipe(gulp.dest('dist'))
    );
</pre>
- 什么时候使用grunt/gulp呢？
  - 如果工程依赖简单，甚至没有模块化
  - 只需要进行简单的合并/压缩
  - 如果模块复杂，相互依赖性强，我们需要使用webpack
- grunt/glup和webpack区别
  - grunt/glup更加强调的是前端自动化流程，模块化不是其核心
  - webpack加强模块化开发管理，而文件压缩/合并/预处理等功能，是附带功能

webpack就是前端模块化打包工具

### webpack的安装

webpack依赖node环境
node自带npm
通过`npm install webpack -g`全局安装
由于vue-cli2基于webpack3.6.0
如果要用vue-cli2的可以使用`npm install webpack@3.6.0 -g`

1. 全局安装
`npm install webpack -g`
2. 局部安装
`npm install webpack --save-dev`

- 在终端执行webpack命令，使用的是全局安装
- 当在package.json中定义了scripts时，其中包括了webpack命令，那么使用的是局部webpack

### webpack的起步



### webpack的配置
1.使用`npm init` 初始化
2.取一个英文名（中文可能有问题）
3.`npm install`安装依赖包
4.`webpack`
5.在package.json中scripts中添加"build": "webpack"，使用`npm run build`，此时执行的是"webpack",优先寻找本地的webpack版本，本地没有全局（终端执行的是全局的）,package.json中依赖了webpack，使用`npm install`安装依赖包，会使用安装的webpack
`npm install webpack@3.6.0 --save-dev`
此时webpack使用的是本地的3.6.0的

### loader的使用
loader是webpack中一个非常核心的概念
>webpack用来做什么？
- webpack主要用来处理js代码依赖
- css、图片、ES6转ES5、TS转JS、scss、less转css，.vue转js等
- 结合loader就可以解决这些问题
>loader使用过程
- 通过npm安装需要的loader
- 在webpack.config.js中module关键字下配置
>注意：大部分loader都可以在webpack官网找到，并有相对应的使用方法

### webpack中配置vue

使用`npm install vue --save`

### plugin的使用

1. 通过npm安装插件
2. 在webpack.config.js中配置

        const webpack = require('webpack')

        module.exports = {
          plugins:[
            new webpack.BannerPlugin("xxxx")
          ]
        }



### 搭建本地服务器

使用插件webpack-dev-serve


