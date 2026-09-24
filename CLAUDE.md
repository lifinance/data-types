# @lifi/data-types

Data for the LI.FI stack: supported chains, coins/tokens and multicall addresses, typed with
`@lifi/types`. The package is data-first: `src/chains/**` and `src/coins/**` hold the data,
and the specs check it.

## Commands

- `pnpm lint` / `pnpm lint:fix` — oxlint (`.oxlintrc.json`), warnings fail
- `pnpm format` / `pnpm format:check` — oxfmt (`.oxfmtrc.json`)
- `pnpm typecheck` — TypeScript 7 `tsc --noEmit`
- `pnpm build` — CJS, ESM and declarations into `src/_cjs`, `src/_esm`, `src/_types`
- `pnpm test:unit` — every spec except `*.int.spec.ts` (offline), part of CI and of the release gate
- `pnpm test:int` — live-network specs (`*.int.spec.ts`: chain RPCs, logo URLs); run by
  `.github/workflows/integration.yaml`, never part of the release gate

## Releases (Changesets)

- Every PR that changes the published data needs a changeset: `pnpm changeset` or
  `/changeset`. The `changeset` skill (`.claude/skills/changeset/`) picks the bump.
- A `chore:` data fix still needs a `patch` changeset — without one it is not released.
- No changeset for spec-only, CI, docs or tooling changes.
- Never edit `version` in `package.json` or `CHANGELOG.md` by hand — the Version PR does it.
- Publishing, preview builds (`release-preview` label) and pitfalls: the `release` skill
  (`.claude/skills/release/SKILL.md`). Never rename `.github/workflows/publish.yaml`.

## Tooling notes

- pnpm 12: settings live in `pnpm-workspace.yaml` (including `allowBuilds`); `.npmrc` is only for auth. pnpm skips
  versions younger than 24 hours except `@lifi/*` (`minimumReleaseAgeExclude`), so a fresh
  `@lifi/types` can be pinned right away.
- TypeScript 7 does not ship `tsserver`, so VS Code's built-in TypeScript support uses its
  bundled version. Install the "TypeScript 7" extension (`TypeScriptTeam.native-preview`) so
  the editor matches `pnpm typecheck`.
