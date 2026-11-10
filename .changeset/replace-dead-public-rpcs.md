---
"@lifi/data-types": patch
---

Replace or remove public RPC URLs that no longer work:

- XDC: replace `https://rpc.xdcrpc.com` (HTTP 429 on most calls, about 1,000 blocks behind the head) with `https://rpc.ankr.com/xdc` and `https://xdc.public-rpc.com`.
- Mode: replace `https://mainnet.mode.network` (incomplete TLS certificate chain) with `https://1rpc.io/mode`.
- World Chain: replace `https://worldchain-mainnet.gateway.tenderly.co` (HTTP 404) with `https://480.rpc.thirdweb.com`.
- Mantle: remove `https://mantle.public-rpc.com` ("API key disabled").
- Kaia: remove `https://klaytn.drpc.org` (the free plan does not serve `eth_getBlockByNumber` or `eth_getLogs`).
- Stellar: remove `https://stellar-soroban-public.nodies.app` (HTTP 404 "Unsupported path").
