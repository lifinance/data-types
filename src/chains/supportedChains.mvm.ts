import type { MVMChain } from '@lifi/types'
import { ChainId, ChainKey, ChainType, CoinKey } from '@lifi/types'

export const supportedMVMChains: MVMChain[] = [
  {
    key: ChainKey.SUI,
    chainType: ChainType.MVM,
    name: 'SUI',
    coin: CoinKey.SUI,
    id: ChainId.SUI,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/solana.svg',
    faucetUrls: ['https://stakely.io/faucet/sui-sui'],
    metamask: {
      chainId: ChainId.SUI.toString(),
      blockExplorerUrls: ['https://www.suiscan.xyz/', 'https://suivision.xyz/'],
      chainName: 'SUI',
      nativeCurrency: {
        name: 'SUI',
        symbol: 'SUI',
        decimals: 9,
      },
      rpcUrls: ['https://fullnode.mainnet.sui.io:443'],
    },
  },
]
