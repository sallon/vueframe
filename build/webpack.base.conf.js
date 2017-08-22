var webpack = require('webpack');
var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      // 'assets': resolve('src/assets'),
      // 'router': resolve('src/router'),
      // 'components': resolve('src/components'),
      // 'zepto': resolve('src/assets/js/zepto.min.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      //增加一个scss 引入
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass",resolve('sass')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      //引入zepto
      {
        test: resolve('src/assets/js/zepto.min.js'),
        loader: 'exports-loader?window.$!script-loader'
      },
      //引入weuijs
      {
        test: resolve('src/assets/js/weui.min.js'),
        loader: 'exports-loader?window.$!script-loader'
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      //注册插件，每次新增加了插件需要重新启动服务
      $: resolve('src/assets/js/zepto.min.js'),
      // Zepto: resolve('src/assets/js/zepto.min.js'),
      // "window.Zepto": resolve('src/assets/js/zepto.min.js'),
      wui:resolve('src/assets/js/weui.min.js')
    })
  ]
}
