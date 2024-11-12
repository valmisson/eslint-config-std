import type { Linter } from 'eslint'

declare const standard: {
  readonly meta: {
    readonly name: string
    readonly version: string
  },
  readonly configs: {
    readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> }[]
  }
}

export = standard
