const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

fs.open(resolve('./env.js'), 'w', function (err, fd) {
  const buf = 'export default "production";';
  fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer) {});
});

module.exports = merge(webpackBaseConfig, {
  output: {
    publicPath: 'https://jjwangel.github.io/dyjj/dist/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js'
  },
  plugins: [
    new cleanWebpackPlugin(['docs/*'], {
      root: path.resolve(__dirname, '../')
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.[hash].js'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'DYJJ-PROD',
      filename: '../index.html',
      template: './src/template/index.ejs',
      inject: false
    })
  ]
});
