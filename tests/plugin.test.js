const { describe, test } = require('node:test')
const assert = require('node:assert')

const pkg = require('../package.json')
const plugin = require('../src')
const recommended = require('../src/config/recommended')

describe('`plugin` config', () => {
  test('should have a `meta` object', () => {
    assert.strictEqual(plugin.meta.name, pkg.name)
    assert.strictEqual(plugin.meta.version, pkg.version)
  })

  test('should have `recommended` rules in configs', () => {
    assert.deepStrictEqual(plugin.configs, { recommended })
  })
})
