import type { TVMChain } from '@lifi/types'
import { ChainId, ChainKey, ChainType, CoinKey } from '@lifi/types'

export const supportedTVMChains: TVMChain[] = [
  {
    key: ChainKey.TRN,
    chainType: ChainType.TVM,
    name: 'Tron',
    coin: CoinKey.TRX,
    id: ChainId.TRN,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/tron.svg',
    faucetUrls: [],
    metamask: {
      chainId: ChainId.TRN.toString(),
      blockExplorerUrls: ['https://tronscan.org/'],
      chainName: 'Tron',
      nativeCurrency: {
        name: 'Tron',
        symbol: 'TRX',
        decimals: 6,
      },
      rpcUrls: ['https://tron-rpc.publicnode.com'],
    },
  },
]
