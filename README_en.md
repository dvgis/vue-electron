# Vue-Electron

[**🇨🇳 中文**](./README.md) | [**🇬🇧English**](./README_en.md)

> This scaffold is built based on VueCli4, vue-cli-plugin-electronic-builder , which is used to quickly build Vue desktop applications.

## Start

```node
yarn run serve
yarn run electron:serve
```

## Package

```node
yarn run build
yarn run electron:build
```

## Configuration

```js
module.exports = {
  // Other configuration
  chainWebpack: config => {},
  pluginOptions: {
    electronBuilder: {
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
```

## Global variable Config

> gets the value assigned by the corresponding configuration file

> desktop: **_.vue-conf/config.json_** in the current user directory

> Web side: the project directory **_public/config/config json_**

## demo

![pic](https://github.com/Digital-Visual/vue-electron/blob/master/pic.png)
