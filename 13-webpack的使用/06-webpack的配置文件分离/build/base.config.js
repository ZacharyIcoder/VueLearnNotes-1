const path = require('path') //获取node模块
const webapck = require('webpack')

module.exports = {
  entry: "./src/main.js", //导入入口
  output: { //导出出口
    path: path.resolve(__dirname, 'dist'), //动态获取路径，绝对路径
    filename: "bundle.js", //名字
    publicPath: "../dist/" //文件需要指定输出路径,相对于webpack.config.js路径
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
      },
      {
        test: /\.vue)$/,
        use:['vue-loader']
      }

    ]

  },


}
