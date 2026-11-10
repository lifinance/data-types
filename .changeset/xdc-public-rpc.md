---
"@lifi/data-types": patch
---

Replace the XDC public RPC `https://rpc.xdcrpc.com` with `https://rpc.ankr.com/xdc` and `https://xdc.public-rpc.com`. The old endpoint rate-limits most calls (HTTP 429) and its node runs about 1,000 blocks behind the chain head.
