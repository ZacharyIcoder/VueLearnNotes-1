const webpackMegre = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = webpackMegre(baseConfig,{
  devServer:{
    contentBse:'./dist',
    inline:true
  }
})

