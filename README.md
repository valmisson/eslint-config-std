# ESLint config of `JavaScript Standard Style`

A fork of the [eslint-config-standard](https://github.com/standard/eslint-config-standard) rules for use with ESLint 9+.

[![npm][npm-shields]][npm-package]
[![license][license-shields]][license-file]

## Installation

```shell
npm i -D eslint-config-std
```

## Usage

Use in your `eslint.config.js` file anytime you want to extend the configs:

```js
import standard from 'eslint-config-std'

export default [
  ...standard.configs.recommended,
]
```

## Learn more

For the full listing of rules, FAQs, and more, visit the main
[JavaScript Standard Style repo](http://standardjs.com).

## License

[MIT](LICENSE)

Copyright (c) 2024-present, Valmisson Grizorte


[npm-shields]: https://img.shields.io/npm/v/eslint-config-std.svg
[license-shields]: https://img.shields.io/badge/license-MIT-green
[npm-package]: https://www.npmjs.com/package/eslint-config-std
[license-file]: https://github.com/valmisson/eslint-config-std/blob/main/LICENSE
