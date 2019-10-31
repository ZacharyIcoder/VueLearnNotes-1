const path = require('path') //获取node模块

module.exports = {
  entry: "./src/main.js", //导入入口
  output: { //导出出口
    path: path.resolve(__dirname, 'dist'), //动态获取路径，绝对路径
    filename: "bundle.js", //名字
    publicPath: "dist/" //文件需要指定输出路径
  },
  //npm install --save-dev css-loader
  module: {
    rules: [{
        test: "\.css$",
        //css-loader只负责将css文件进行加载
        //style-loader负载将样式加载到dom
        //使用多个loader从右向左
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            //当加载图片小于limit，会将会将图片编译成base64字符串形式，大与limit需要使用file-loader
            limit: 81920,
            name: "img/[name].[hash:8].[ext]" //命名规范img/[文件原名称]+[8位hash值]+扩展名

          },
        }]
      }
    ]

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