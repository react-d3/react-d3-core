/* eslint no-console: 0 */
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/example', function(req, res) {
  res.sendFile(path.join(__dirname, './example/index.html'));
});

app.get('/example/*', function(req, res) {
  res.sendFile(path.join(__dirname, './example/index.html'));
});

app.listen(5000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:5000/example');
});
