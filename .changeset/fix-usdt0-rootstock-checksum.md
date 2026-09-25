---
"@lifi/data-types": patch
---

Fix the EIP-55 checksum of the USDT0 address on Rootstock, which was mis-cased and rejected by address lookups that compare verbatim.
