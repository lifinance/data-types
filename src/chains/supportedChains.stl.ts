import type { STLChain } from '@lifi/types'
import { ChainId, ChainKey, ChainType, CoinKey } from '@lifi/types'

export const supportedSTLChains: STLChain[] = [
  {
    key: ChainKey.XLM,
    chainType: ChainType.STL,
    name: 'Stellar',
    coin: CoinKey.XLM,
    id: ChainId.XLM,
    mainnet: true,
    logoURI:
      'https://lifinance.github.io/types/src/assets/icons/chains/stellar.svg',
    faucetUrls: [],
    metamask: {
      chainId: ChainId.XLM.toString(),
      blockExplorerUrls: [
        'https://stellarchain.io/',
        'https://stellarscan.io/',
      ],
      chainName: 'Stellar',
      nativeCurrency: {
        name: 'Stellar',
        symbol: 'XLM',
        decimals: 7,
      },
      rpcUrls: [
        'https://soroban-rpc.mainnet.stellar.gateway.fm',
        'https://mainnet.sorobanrpc.com',
        'https://stellar-soroban-public.nodies.app',
      ],
    },
  },
]
