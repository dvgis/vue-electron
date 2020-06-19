# Vue-Electron

[**🇨🇳 中文**](./README.md) | [**🇬🇧English**](./README_en.md)

> 该脚手架基于 VueCli4 、 vue-cli-plugin-electron-builder，用于快速构建 Vue 桌面端应用。

## 启动

```node
yarn run serve
yarn run electron:serve
```

## 打包

```node
yarn run build
yarn run electron:build
```

## 配置说明

```js
module.exports = {
  // 其他配置
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

## 全局变量 Config

> 获取对应配置文件赋予的值

> 桌面端： 当前用户目录下的 **_.vue-conf/config.json_**

> Web 端： 项目目录下的 **_public/config/config.json_**

## 示例

![pic](https://github.com/Digital-Visual/vue-electron/blob/master/pic.png)
