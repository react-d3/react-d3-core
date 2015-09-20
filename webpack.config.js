
'use strict';

var path = require('path'),
  webpack = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_dist = path.join(__dirname, './dist');
// 0 stands for development, 1 stands for production
// for development mode: NODE_ENV=0 webpack
// for production mode: NODE_ENV=1 webpack
var ENV = !!(+process.env.NODE_ENV || 0);


module.exports = [{
  name: 'react-d3-core',
  devtool: ENV ? 'source-map': '',
  entry: {
    react_d3_core: './index.jsx',
  },

  output: {
    path: js_dist,
    filename: ENV ? '[name].min.js': '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader?stage=0"],
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
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]: [
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]
},{


  name: 'react-d3-core-example',
  devtool: ENV ? "source-map": '',
  entry: {
    blankchart: './example/src/components.jsx',
    legend: './example/src/legend.jsx',
    container: './example/src/container.jsx',
    grid: './example/src/grid.jsx',
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
        loaders: ["react-hot", "babel-loader?stage=0"],
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
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]: [
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]
}];
