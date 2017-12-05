const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const connectHistoryApiFallback = require('connect-history-api-fallback');
const compression = require('compression')

const app = express();
const config = require('./webpack.dev.js');
const compiler = webpack(config);


app.use(compression());
app.use('/', connectHistoryApiFallback())

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {color: true},
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  }
}));

app.use(webpackHotMiddleware(compiler))

app.listen(3000, function() {
  console.log('webpack打包服务器开启!')
})