const { describe, test } = require('node:test')
const assert = require('node:assert')
const { ESLint } = require('eslint')

const standard = require('../src')

describe('`recommended` config', () => {
  test('should work the `recommended` config', async () => {
    const code = 'const foo = 1;'

    const linter = new ESLint({
      overrideConfigFile: true,
      overrideConfig: standard.configs.recommended
    })

    const result = await linter.lintText(code, { filePath: 'bar.js' })
    const messages = result[0].messages

    assert.deepStrictEqual(
      messages.map(m => ({ line: m.line, message: m.message, ruleId: m.ruleId })),
      [
        {
          line: 1,
          message: "'foo' is assigned a value but never used.",
          ruleId: 'no-unused-vars'
        },
        {
          line: 1,
          message: 'Extra semicolon.',
          ruleId: 'semi'
        },
        {
          line: 1,
          message: 'Newline required at end of file but not found.',
          ruleId: 'eol-last'
        }
      ]
    )
  })
})
