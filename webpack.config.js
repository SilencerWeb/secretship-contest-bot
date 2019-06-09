const path = require('path');
const UglifyJsPlugin = require('uglify-js-plugin');


module.exports = {
  target: 'node',

  mode: 'production',

  entry: {
    main: path.join(__dirname, 'src', 'index.js'),
  },

  output: {
    path: path.join(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /node_modules/,
        query: { cacheDirectory: true },
      },
    ],
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
};
