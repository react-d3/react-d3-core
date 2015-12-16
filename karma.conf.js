var path = require('path');

module.exports = function (config) {
  config.set({
    autoWatch: true,
    browsers: ['Chrome'],
    // singleRun: true,
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
        ]
      },
      resolve: {
        alias: {
          'react-d3-core': path.join(__dirname, './lib')
        }
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
