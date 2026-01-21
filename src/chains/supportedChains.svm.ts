import type { SVMChain } from '@lifi/types'
import { ChainId, ChainKey, ChainType, CoinKey } from '@lifi/types'

export const supportedSVMChains: SVMChain[] = [
  {
    key: ChainKey.SOL,
    chainType: ChainType.SVM,
    name: 'Solana',
    coin: CoinKey.SOL,
    id: ChainId.SOL,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/solana.svg',
    faucetUrls: [],
    metamask: {
      chainId: ChainId.SOL.toString(),
      blockExplorerUrls: [
        'https://solscan.io/',
        'https://solana.fm/',
        'https://explorer.solana.com/',
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
  {
    key: ChainKey.FOG,
    chainType: ChainType.SVM,
    name: 'Fogo',
    coin: CoinKey.FOGO,
    id: ChainId.FOG,
    mainnet: true,
    logoURI: '', // TODO
    faucetUrls: [],
    metamask: {
      chainId: ChainId.FOG.toString(),
      blockExplorerUrls: ['https://fogoscan.com/'],
      chainName: 'Fogo',
      nativeCurrency: {
        name: 'FOGO',
        symbol: 'FOGO',
        decimals: 9,
      },
      rpcUrls: ['https://fluxrpc.com/'],
    },
  },
]
