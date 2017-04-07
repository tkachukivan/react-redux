const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['whatwg-fetch', './client/app.jsx'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'eslint-loader', enforce: 'pre', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?sourceMap', 'sass-loader?sourceMap'],
          fallback: 'style-loader'
        }),
      },
      { test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader', options: { name: '[name].[ext]?[hash]' } },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],

    modules: [
      'client/', 'node_modules'
    ]
  },

  devServer: {
    proxy: {
      '/': 'http://localhost:3000'
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
    }),
    new ExtractTextPlugin('style.css')
  ],

  performance: {
    hints: false
  },

  devtool: '#source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = false;

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
