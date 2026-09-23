<div align="center">

[![license](https://img.shields.io/badge/license-Apache%202-blue)](/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/@lifi/data-types/latest.svg)](https://www.npmjs.com/package/@lifi/data-types)
[![npm downloads](https://img.shields.io/npm/dm/@lifi/data-types.svg)](https://www.npmjs.com/package/@lifi/data-types)
[![Follow on Twitter](https://img.shields.io/twitter/follow/lifiprotocol.svg?label=follow+LI.FI)](https://twitter.com/lifiprotocol)

</div>

# LI.FI - Data Types

## Summary

This repository contains data that enriches the types defined in LI.FI's [types package](https://github.com/lifinance/types) with actual information.
Learn more about LI.FI on (https://li.fi).

Check out the [Changelog](./CHANGELOG.md) to see what changed in the last releases.

## Installation

```bash
pnpm add @lifi/data-types
```

or

```bash
npm install --save @lifi/data-types
```

## Development

- `pnpm lint` / `pnpm lint:fix` — lint with [oxlint](https://oxc.rs)
- `pnpm format` / `pnpm format:check` — format with [oxfmt](https://oxc.rs)
- `pnpm typecheck` — type-check with TypeScript 7
- `pnpm build` — build CJS, ESM and declarations

TypeScript 7 ships only the `tsc` binary and no language server. VS Code therefore falls
back to its bundled TypeScript. Install the "TypeScript (Native Preview)" extension to get
editor diagnostics that match `pnpm typecheck`.

Git hooks ([husky](https://github.com/typicode/husky) +
[lint-staged](https://github.com/lint-staged/lint-staged)) run oxlint and oxfmt on staged
files and check commit messages with commitlint.
