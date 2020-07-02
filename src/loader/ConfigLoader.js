/*
 * @Author: Caven
 * @Date: 2019-10-12 12:48:10
 * @Last Modified by: Caven
 * @Last Modified time: 2020-07-02 12:45:49
 */

const JSON_TEMP = {
  url: {
    server: '',
    resource: ''
  }
}

class ConfigLoader {
  load() {
    if (process.env.IS_ELECTRON) {
      const HOME_PATH = process.env.HOME || process.env.USERPROFILE
      const fs = require('fs-extra')
      const folder = `${HOME_PATH}/.vue-conf`
      fs.exists(folder, exists => {
        !exists && fs.mkdirSync(folder)
        !exists && fs.writeJsonSync(`${folder}/config.json`, JSON_TEMP)
        exists && (global.Config = fs.readJsonSync(`${folder}/config.json`))
      })
    } else {
      global.Http.get('config/config.json')
        .then(res => {
          global.Config = res.data
          Promise.resolve()
        })
        .catch(e => {
          Promise.reject(e)
        })
    }
  }
}

const configLoader = new ConfigLoader()
export default configLoader
