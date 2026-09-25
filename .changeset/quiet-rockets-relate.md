---
"@lifi/data-types": patch
---

Switch the Zcash block explorer to CipherScan, with 3xpl as the second entry. The previous explorer routes transactions at `/transactions/`, so `/tx/{hash}` links returned 404, and it does not show Ironwood (v6) shielded value.
