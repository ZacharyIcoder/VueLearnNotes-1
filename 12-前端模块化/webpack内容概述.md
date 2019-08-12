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

### webpack的起步

### webpack的配置

### loader的使用

### webpack中配置vue

### plugin的使用

### 搭建本地服务器