# Bump rules — @lifi/data-types

Package name for the changeset frontmatter: `"@lifi/data-types"`.

## Needs a changeset

| Change | Bump |
|---|---|
| New chain, coin or token (`src/chains/**`, `src/coins/**`) | minor |
| Data fix: RPC URL, explorer URL, token address, decimals, logo URL, chain name, multicall address | patch |
| Removed chain, coin or token | major |
| `@lifi/types` pin bump in `dependencies` | patch |

## No changeset

- Only specs (`*.spec.ts`), CI, docs, tooling or config files.

## Notes

- **Behaviour change from standard-version:** data PRs usually have `chore:` titles and
  used to be released anyway. Under Changesets a PR is released only if it carries a
  changeset — so a `chore:` data fix still needs a `patch` changeset.
- The PR title prefix is only a hint; the changeset decides the bump.
- `@lifi/types` is pinned to an exact version and bumped by hand. pnpm does not install
  versions younger than 24 hours, except `@lifi/*` (`minimumReleaseAgeExclude` in
  `pnpm-workspace.yaml`), so a fresh `@lifi/types` release can be pinned right away.
