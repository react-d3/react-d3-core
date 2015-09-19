
'use strict';

var
  path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_dist = path.join(__dirname, './dist');

module.exports = [{
  name: 'react-d3-core',
  entry: {
    index: './index.jsx'
  },

  output: {
    path: js_dist,
    filename: '[name].js'
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

  plugins: [
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]
}];
