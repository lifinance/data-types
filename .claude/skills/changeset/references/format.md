# Changeset file format

A changeset is a markdown file in `.changeset/` with a YAML frontmatter block that maps the
package name to a bump type, followed by a summary that becomes the changelog entry.

## Shape

```markdown
---
"@lifi/data-types": minor
---

A human-readable summary of the change. This text is copied verbatim into CHANGELOG.md and
the GitHub Release, so write it for someone reading release notes — what changed and why it
matters, not "fix bug". Keep it to 1–2 lines max.
```

- **Bump values:** `major`, `minor` or `patch`.
- **Filename:** any unique name ending in `.md`. `pnpm changeset` generates a random one
  (e.g. `fenced-stories-add.md`); a descriptive kebab-case name like `add-fogo-chain.md`
  is also fine.
- **Summary:** the first paragraph is the changelog line. **Keep it to 1–2 lines max —
  short but descriptive.** Markdown is allowed; the changelog generator adds the PR link,
  the commit link and "Thanks @author!" automatically, so do not add them by hand.
- Single or double quotes around the package name both work.

## Worked examples

**A new chain:**
```markdown
---
"@lifi/data-types": minor
---

Add the Fogo chain and its native coin.
```

**A data fix:**
```markdown
---
"@lifi/data-types": patch
---

Use native Circle USDC for World Chain instead of the bridged token.
```

**A removal:**
```markdown
---
"@lifi/data-types": major
---

Remove the deprecated Fantom chain and its coins.
Migration: use Sonic (`ChainId.SON`).
```

**An `@lifi/types` pin bump:**
```markdown
---
"@lifi/data-types": patch
---

Bump `@lifi/types` to 18.12.0.
```

## Lifecycle (why `.changeset/` looks empty on main)

`changeset version` (run by the bot's **chore: version packages** PR) **consumes and
deletes** every `*.md` changeset, rolling them into the version bump and `CHANGELOG.md`. So
between releases `.changeset/` holds only `config.json` and `README.md`. An empty
`.changeset/` is the normal resting state, not a sign that something was lost.
