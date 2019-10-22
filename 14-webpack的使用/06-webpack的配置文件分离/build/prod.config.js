const webpackMerge = require('webpack-merge')
const UglifyjswebpackPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./base.config.js')

module.exports = webpackMerge (
  baseConfig,
  {
    plugins: [
      new UglifyjswebpackPlugin()
    ]
  }
)
