
'use strict';

var path = require('path'),
  webpack = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

// 0 stands for development, 1 stands for production
// for development mode: NODE_ENV=0 webpack
// for production mode: NODE_ENV=1 webpack
var ENV = !!(+process.env.NODE_ENV || 0);


module.exports = [{
  name: 'react-d3-core-example-es5',
  devtool: ENV ? "source-map": '',
  entry: {
    xaxis: './example/src/xaxis.jsx',
    xaxis_click: './example/src/xaxis_click.jsx',
    blank_chart: './example/src/components.jsx',
    legend: './example/src/legend.jsx',
    container: './example/src/container.jsx',
    grid: './example/src/grid.jsx',
    label: './example/src/label.jsx'
  },

  output: {
    path: path.join(__dirname, './example/dist'),
    filename: ENV ? '[name].min.js': '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        loaders: ["jsx-loader"],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  plugins: ENV ? [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]:[]

}];
