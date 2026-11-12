---
"@lifi/data-types": major
---

Remove the deprecated chains Moonbeam (1284), Boba (288), BOB (60808), opBNB (204), Lens (232), Blast (81457), Gravity (1625) and Lisk (1135): their chain definitions, multicall addresses, foundry names, per-chain coin entries and wrapped tokens. Fusion (32659) loses its multicall address and foundry name; its chain definition was already gone.
Remove the coins that only these chains carried: `GLMR`, `FSN`, `USDB` and `GHO`.
