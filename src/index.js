'use strict'

const { name, version } = require('../package.json')

module.exports = {
  meta: {
    name,
    version
  },
  configs: {
    recommended: require('./config/recommended')
  }
}
