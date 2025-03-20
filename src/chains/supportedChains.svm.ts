import type { SolanaChain } from '@lifi/types'
import { ChainId, ChainKey, ChainType, CoinKey } from '@lifi/types'

export const supportedSolanaChains: SolanaChain[] = [
  {
    key: ChainKey.SOL,
    chainType: ChainType.SVM,
    name: 'Solana',
    coin: CoinKey.SOL,
    id: ChainId.SOL,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/solana.svg',
    faucetUrls: ['https://stakely.io/faucet/solana-sol'],
    metamask: {
      chainId: ChainId.SOL.toString(),
      blockExplorerUrls: [
        'https://solana.fm/',
        'https://explorer.solana.com/',
        'https://solscan.io/',
      ],
      chainName: 'Solana',
      nativeCurrency: {
        name: 'SOL',
        symbol: 'SOL',
        decimals: 9,
      },
      rpcUrls: [
        'https://api.mainnet-beta.solana.com',
        'https://solana-rpc.publicnode.com',
      ],
    },
  },
]
