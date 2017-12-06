const path = require('path')
const webpack = require('webpack');
const merge   = require('webpack-merge');
const common  = require('./webpack.common.js');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = merge(common, {
  entry: {
    index: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index.js'
    ]
  },
  
  devtool: 'inline-source-map',
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
        url: 'http://localhost:3000/'
    })
  ]
})