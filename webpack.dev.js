const path = require('path')
const webpack = require('webpack');
const merge   = require('webpack-merge');
const common  = require('./webpack.common');

module.exports = merge(common, {
  entry: {
    index: [
      'webpack-hot-middleware/client?__webpack_hmr',
      'babel-polyfill',
      './src/index.js'
    ]
  },
  devtool: 'inline-source-map',
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})