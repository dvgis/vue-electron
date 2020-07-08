/*
 * @Author: Caven
 * @Date: 2018-12-15 00:33:19
 * @Last Modified by: Caven
 * @Last Modified time: 2020-07-08 13:19:22
 */
'use strict'
const path = require('path')
let resolve = dir => {
  return path.resolve(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.extensions
      .add('.js')
      .add('.vue')
      .end()

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        name: 'images/[name].[ext]',
        limit: 10000
      })
      .end()

    config.module
      .rule('fonts')
      .test(/\.(eot|ttf|woff|woff2)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        name: 'fonts/[name].[ext]',
        limit: 10000
      })
      .end()

    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      chainWebpackMainProcess: config => {},
      chainWebpackRendererProcess: config => {
        config.plugin('define').tap(args => {
          const env = args[0]['process.env']
          for (let key in env) {
            args[0][`process.env.${key}`] = env[key]
          }
          delete args[0]['process.env']
          return args
        })
      }
    }
  }
}
