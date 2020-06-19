/*
 * @Author: Caven
 * @Date: 2020-03-19 22:36:19
 * @Last Modified by: Caven
 * @Last Modified time: 2020-06-19 16:07:32
 */
import Vue from 'vue'

const hub = new Vue()

class AppLoader {
  constructor() {
    Vue.config.productionTip = false
    Vue.use({
      install(Vue) {
        Vue.prototype.$hub = hub
      }
    })
  }

  install() {
    global.Vue = Vue
    return Promise.all([
      import('@/components'),
      import('@/loader/HttpLoader'),
      import('@/loader/ConfigLoader')
    ])
  }
}

const appLoader = new AppLoader()
export default appLoader
